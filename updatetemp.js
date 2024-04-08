

exports.update = async (req, res) => {
    let uid = req.params.id; // Assuming you're passing the candidate ID in the URL

    // Extract fields from request body
    let { fname, designation, email, gender, address, state, lname, dob, phone, relnstatus, city, zipcode, sscnameofboard, sscpassingyear, sscpercentage, hscnameofboard, hscpassingyear, hscpercentage, bachelorcourse, bacheloruniversity, bachelorpassingyear, bachelorpercentage, mastercourse, masteruniversity, masterpassingyear, masterpercentage, companyname1, designation1, from1, to1, companyname2, designation2, from2, to2, companyname3, designation3, from3, to3, lang1, langcheck1, lang2, langcheck2, lang3, langcheck3, php, phptech, mysql, mysqltech, oracle, oracletech, laravel, laraveltech, name1, contactnum1, relation1, name2, contactnum2, relation2, prefloc, noticeperiod, department, expectedctc, currentctc } = req.body;

    // Define arrays for different sections of data
    let basic = [fname, lname, designation, city, state, email, phone, zipcode, gender, relnstatus, dob, address];
    let ssc = [sscnameofboard, sscpassingyear, sscpercentage];
    let hsc = [hscnameofboard, hscpassingyear, hscpercentage];
    let bachelor = [bachelorcourse, bacheloruniversity, bachelorpassingyear, bachelorpercentage];
    let master = [mastercourse, masteruniversity, masterpassingyear, masterpercentage];
    let company1 = [companyname1, designation1, from1, to1];
    let company2 = [companyname2, designation2, from2, to2];
    let company3 = [companyname3, designation3, from3, to3];
    let lang1Data = lang1 ? [lang1, langcheck1] : null;
    let lang2Data = lang2 ? [lang2, langcheck2] : null;
    let lang3Data = lang3 ? [lang3, langcheck3] : null;
    let ref1 = [name1, contactnum1, relation1];
    let ref2 = [name2, contactnum2, relation2];
    let technology1 = php ? [php, phptech] : null;
    let technology2 = mysql ? [mysql, mysqltech] : null;
    let technology3 = oracle ? [oracle, oracletech] : null;
    let technology4 = laravel ? [laravel, laraveltech] : null;
    let pref = [prefloc, noticeperiod, department, expectedctc, currentctc];

    // Define SQL queries
    let basicSql = `UPDATE candidateMaster SET fname=?, lname=?, designation=?, city=?, state=?, email=?, phoneNo=?, zipCode=?, gender=?, relationship=?, dob=?, add1=? WHERE canid=?`;
    let sscSql = `UPDATE educationDetails SET board=?, passingYear=?, percentage=? WHERE canid=? AND board='ssc'`;
    let hscSql = `UPDATE educationDetails SET board=?, passingYear=?, percentage=? WHERE canid=? AND board='hsc'`;
    let bachelorSql = `UPDATE educationDetails SET board=?, passingYear=?, percentage=? WHERE canid=? AND board='bachelor'`;
    let masterSql = `UPDATE educationDetails SET board=?, passingYear=?, percentage=? WHERE canid=? AND board='master'`;
    let companySql = `UPDATE workExperience SET companyName=?, designation=?, fromDate=?, toDate=? WHERE canid=? AND companyName=?`;
    let langSql = `INSERT INTO languageKnown (canid, language, canRead, canWrite, canSpeak) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE canRead=VALUES(canRead), canWrite=VALUES(canWrite), canSpeak=VALUES(canSpeak)`;
    let refSql = `UPDATE referenceContact SET name=?, contactNo=?, relation=? WHERE canid=? AND name=?`;
    let techSql = `INSERT INTO technologyYouKnow (canid, technology, level) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE level=VALUES(level)`;
    let prefSql = `UPDATE preference SET preferedLocation=?, noticePeriod=?, department=?, expectedCTC=?, currentCTC=? WHERE canid=?`;

    try {
        // Update basic details
        await data.query(basicSql, [...basic, uid]);
        // Update education details
        await data.query(sscSql, [...ssc, uid]);
        await data.query(hscSql, [...hsc, uid]);
        await data.query(bachelorSql, [...bachelor, uid]);
        await data.query(masterSql, [...master, uid]);

        // Update company details
        await data.query(companySql, [...company1, uid, companyname1]);
        await data.query(companySql, [...company2, uid, companyname2]);
        await data.query(companySql, [...company3, uid, companyname3]);

        // Insert or update language known
        if (lang1Data) await data.query(langSql, [uid, ...lang1Data, ...lang1Data]);
        if (lang2Data) await data.query(langSql, [uid, ...lang2Data, ...lang2Data]);
        if (lang3Data) await data.query(langSql, [uid, ...lang3Data, ...lang3Data]);

        // Update reference details
        await data.query(refSql, [...ref1, uid, name1]);
        await data.query(refSql, [...ref2, uid, name2]);

        // Insert or update technology known
        if (technology1) await data.query(techSql, [uid, ...technology1]);
        if (technology2) await data.query(techSql, [uid, ...technology2]);
        if (technology3) await data.query(techSql, [uid, ...technology3]);
        if (technology4) await data.query(techSql, [uid, ...technology4]);

        // Update preference
        await data.query(prefSql, [...pref, uid]);

        res.json({ message: 'Data updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

