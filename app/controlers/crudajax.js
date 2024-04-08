
const con = require("../../connection")
//this function is not used in this project 
function textbox(txtname, value, name, classname) {
    if (value == undefined) {
        value = '';

    }
    let textbox = ``;
    textbox += `
    <label for="${name}">${txtname}:</label>
    <input type="text" name="${name}" id="fname" class="${classname}" value ="${value}">
 `
    return textbox;

}

exports.render_form = async (req, res) => {

    return res.render("crudajax/part_form")
}

// this function is only used for the render update form
exports.updatedata = async (req, res) => {

    res.render("crudajax/part_form")
}


//this function is update candidtae data 
exports.update_data = async (req, res) => {
    jsonData = {
        fname: 'suraj',
        designation: 'manager',
        email: 'suraj@gmail.com',
        gender: 'Male',
        address: 'bhavnagae',
        state: 'Gujrat',
        lname: 'parmar',
        dob: '2002-01-17',
        phone: '7990167445',
        relnstatus: 'Unmerried',
        city: 'bhavnagar',
        zipcode: '364001',
        sscnameofboard: 'ssc',
        sscpassingyear: '2002',
        sscpercentage: '58',
        hscnameofboard: 'hsc',
        hscpassingyear: '2004',
        hscpercentage: '25',
        bachelorcourse: 'mkbu',
        bacheloruniversity: 'MKBU',
        bachelorpassingyear: '2025',
        bachelorpercentage: '63',
        mastercourse: 'ddu',
        masteruniversity: 'DVS',
        masterpassingyear: '2025',
        masterpercentage: '36',
        companyname1: 'esparkbiz',
        designation1: 'MA',
        from1: '2002-08-10',
        to1: '2002-08-11',
        companyname2: '',
        designation2: '',
        from2: '',
        to2: '',
        companyname3: '',
        designation3: '',
        from3: '',
        to3: '',
        lang1: 'hindi',
        langcheck1: ['read'],
        lang2: 'gujrati',
        langcheck2: ['read'],
        php: 'php',
        phptech: 'Beginner',
        mysql: 'mysql',
        mysqltech: 'Midetor',
        oracle: 'oracle',
        oracletech: 'Midetor',
        laravel: 'laravel',
        laraveltech: 'Midetor',
        name1: 'mhir',
        contactnum1: '6352023502',
        relation1: 'fbw',
        name2: '',
        contactnum2: '',
        relation2: '',
        prefloc: 'Rajkot',
        noticeperiod: '20',
        department: 'development',
        expectedctc: '10',
        currentctc: '25'
    }
    res.json(jsonData)

}


//this function is used for the listing candidate data for the updation
exports.listingdata = async (req, res) => {
    try {
        let data = new con("localhost", "root", "password", "node_dashboard");
        let sql = `select canid,fname,lname from candidateMaster1`
        let [result_candiateinfo] = await data.queary(sql)
        res.render("crudajax/list", { data: result_candiateinfo });
    } catch (error) {
        res.send(error)

    }
}

exports.insertdata = async (req, res) => {


    let uid = 0;
    let { fname, designation, email, gender, address, state, lname, dob, phone, relnstatus, city, zipcode, sscnameofboard, sscpassingyear, sscpercentage, hscnameofboard, hscpassingyear, hscpercentage, bachelorcourse, bacheloruniversity, bachelorpassingyear, bachelorpercentage, mastercourse, masteruniversity, masterpassingyear, masterpercentage, companyname1, designation1, from1, to1, companyname2, designation2, from2, to2, companyname3, designation3, from3, to3, lang1, langcheck1, lang2, langcheck2, lang3, langcheck3, php, phptech, mysql, mysqltech, oracle, oracletech, laravel, laraveltech, name1, contactnum1, relation1, name2, contactnum2, relation2, prefloc, noticeperiod, department, expectedctc, currentctc } = req.body;

    let data = new con("localhost", "root", "password", "node_dashboard");
    //this function is used for the genrate queray
    function genrate_queray(sql, data) {
        let length = data.length
        data.forEach((element, i) => {
            sql += "'"
            sql += element;
            sql += "'"

            if (i != length - 1) {
                sql += ","
            }


        });
        sql += ")"
        return sql;
    }

    //this function is used for the insert data into the basic table
    async function basicdetails() {
        let basic = [fname, lname, designation, city, state, email, phone, zipcode, gender, relnstatus, dob, address]
        let samplae_sql = `INSERT INTO candidateMaster1 ( fname, lname, designation, city, state, email, phoneNo, zipCode, gender, relationship, dob, add1) VALUES (`
        let basic_insert_sql = genrate_queray(samplae_sql, basic)
        let [result] = await data.queary(basic_insert_sql)
        uid = result.insertId;
        return uid;
    }

    //this function is used for the insert education_details
    async function education_details() {
        let ssc = [uid, sscnameofboard, sscpassingyear, sscpercentage]
        let hsc = [uid, hscnameofboard, hscpassingyear, hscpercentage]
        let bachelor = [uid, bachelorcourse, bachelorpassingyear, bachelorpercentage]
        let master = [uid, mastercourse, masterpassingyear, masterpercentage]
        let edu = [ssc, hsc, bachelor, master];
        let samplae_sql = `INSERT INTO educationDetails ( canid, board, passingYear, percentage) VALUES ( `;
        for (let i = 0; i < edu.length; i++) {
            if (edu[i][1] != '') {
                let education_sql = genrate_queray(samplae_sql, edu[i])
                let [result] = await data.queary(education_sql)
            }
        }
    }

    //this controler is used for the insert the compney details
    async function compnay_details() {
        //compney details
        let company1 = [uid, companyname1, designation1, from1, to1]
        let company2 = [uid, companyname2, designation2, from2, to2]
        let company3 = [uid, companyname3, designation3, from3, to3]
        let compney = [company1, company2, company3];
        let sampale_sql = `INSERT INTO workExperience (canid, companyName, designation, fromDate, toDate) VALUES ( `
        for (let i = 0; i < compney.length; i++) {

            if (compney[i][1] != '') {
                let compney_sql = genrate_queray(sampale_sql, compney[i])
                let [result] = await data.queary(compney_sql)

            }

        }
    }

    // this  controler is used for the language table insert
    async function language_known() {
        //for the language 
        let samplae_sql = `INSERT INTO languageKnown (canid, language, canRead, canWrite, canSpeak) VALUES (`
        let rws = [langcheck1, langcheck2, langcheck3]
        let lenguage_one = [uid, lang1];
        let lenguage_two = [uid, lang2];
        let lenguage_three = [uid, lang3];
        let list_language = [lenguage_one, lenguage_two, lenguage_three]
        for (let i = 0; i < rws.length; i++) {
            if (rws[i] != undefined) {
                let read_flag = 0;
                let write_flag = 0;
                let speak_flag = 0;
                for (let j = 0; j < rws[i].length; j++) {

                    if (rws[i][j] == "read") {
                        read_flag = 1;

                    }
                    else if (rws[i][j] == "write") {
                        write_flag = 1;

                    }
                    else if (rws[i][j] == "speak") {
                        speak_flag = 1;

                    }

                }
                if (list_language[i][1] != undefined) {

                    list_language[i].push(read_flag, write_flag, speak_flag)
                    let language_sql = genrate_queray(samplae_sql, list_language[i]);
                    let [res11] = await data.queary(language_sql)
                }
            }

        }
    }

    async function reference() {
        let reference_1 = [uid, name1, contactnum1, relation1];
        let reference_2 = [uid, name2, contactnum2, relation2];
        let ref = [reference_1, reference_2];
        let sampale_sql = `INSERT INTO referenceContact (canid, name, contactNo, relation) VALUES (`
        for (let i = 0; i < ref.length; i++) {
            if (ref[i][1] != '') {
                let reference_sql = genrate_queray(sampale_sql, ref[i])
                let [res11] = await data.queary(reference_sql)

            }
        }

    }

    async function technology_known() {
        let phpdata = [uid, php, phptech];
        let mysqldata = [uid, mysql, mysqltech];
        let laraveldata = [uid, laravel, laraveltech];
        let oracledata = [uid, oracle, oracletech];
        let lang_data = [phpdata, mysqldata, laraveldata, oracledata]
        let sampale_sql = `INSERT INTO technologyYouKnow (canid, technology, level) VALUES ( `
        for (let i = 0; i < lang_data.length; i++) {
            if (lang_data[i][1] != undefined) {
                let technology_sql = genrate_queray(sql, lang_data[i])
                let [res11] = await data.queary(technology_sql)

            }
        }
    }

    async function pref() {
        let sample_sql = `INSERT INTO preference (canid, preferedLocation, noticePeriod, expectedCTC, currentCTC, department) VALUES (`
        let pre = [uid, prefloc, noticeperiod, expectedctc, currentctc, department];
        let preference_sql = genrate_queray(sample_sql, pre);
        let [result] = await data.queary(preference_sql)
    }



    try {
        uid = await basicdetails();

    } catch (error) {
        return res.status(500).json({
            return: false,
            message: error.message,
            messege: "error in basic details"
        })

    }

    try {
        await education_details();
    } catch (error) {
        return res.status(500).json({
            return: false,
            message: error.message,
            messege: "education table"
        })
    }

    try {
        await compnay_details();
    } catch (error) {
        return res.status(500).json({
            return: false,
            message: error.message,
            messege: "companey details"
        })
    }
    try {
        await language_known();
    } catch (error) {
        return res.status(500).json({
            return: false,
            message: error.message,
            messege: "language_table"
        })
    }

    try {
        await reference();
    } catch (error) {
        return res.status(500).json({
            return: false,
            message: error.message,
            messege: "refrence table"
        })
    }

    try {
        await technology_known();
    } catch (error) {
        return res.status(500).json({
            return: false,
            message: error.message,
            messege: "technology_table"
        })
    }

    try {
        await pref();
    } catch (error) {
        return res.status(500).json({
            return: false,
            message: error.message,
            messege: "prefernew"
        })
    }

    res.json({ key: "data is inserted" });

}





