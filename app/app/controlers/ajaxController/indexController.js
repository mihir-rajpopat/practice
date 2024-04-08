
// let conn = require("../../config/connection")


const conn = require("../../../config/connection");
/* insert function */

const basicdetails = async (req, res) => {

    let { fname, currdesignation, email, gender, address, state, lname, dob, phone, relnstatus, city, zipcode } = req.body;

    let sql = `insert into basicdetails (fname, designation, email, gender, address, state, lname, dob, phone, reln_status, city, zipcode) values (?)`

    dob = new Date(dob)
    data = [fname, currdesignation, email, gender, address, state, lname, dob, phone, relnstatus, city, zipcode]

    let [result] = await conn.query(sql, [data]);

    let uid = result.insertId;

    return uid;


}

const educationdeatils = async (req, res, uid) => {

    let { sscnameofboard, sscpassingyear, sscpercentage, hscnameofboard, hscpassingyear, hscpercentage, bachelorcourse, bacheloruniversity, bachelorpassingyear, bachelorpercentage, mastercourse, masteruniversity, masterpassingyear, masterpercentage } = req.body;


    let sql = `insert into educationdetails (candid,degreename,coursename_nameofboard,passingyear,percentage) values (?)`;

    let ssc = [uid, "ssc", sscnameofboard, sscpassingyear, sscpercentage]
    let hsc = [uid, "hsc", hscnameofboard, hscpassingyear, hscpercentage]
    let bachelor = [uid, "bachelor", bachelorcourse, bachelorpassingyear, bachelorpercentage]
    let master = [uid, "master", mastercourse, masterpassingyear, masterpercentage]
    let array = [ssc, hsc, bachelor, master]

    let result;

    for (let i = 0; i < array.length; i++) {
        if (array[i].includes("ssc") || array[i].includes("hsc") || !array[i].includes("")) {
            [result] = await conn.query(sql, [array[i]])
        }

    }

    return result;


}

const workexperience = async (req, res, uid) => {

    let { companyname, designation, from, to } = req.body;

    let sql = `insert into workexperiences (candid,companyname,designation,fromdate,todate) values (?)`;
    let array = [];
    let result;

    for (let i = 0; i < companyname.length; i++) {
        if (companyname[i].trim() != "") {
            array[0] = uid;
            array[1] = companyname[i];
            array[2] = designation[i];
            array[3] = new Date(from[i]);
            array[4] = new Date(to[i]);

            [result] = await conn.query(sql, [array]);
        }
    }

    return result;


}

const languageknown = async (req, res, uid) => {

    let { lang1, langcheck1, lang2, langcheck2, lang3, langcheck3 } = req.body;

    let result;

    let sql = `insert into languageknowns (candid,language,canread,canwrite,canspeak) values (?)`;


    if (lang1 !== undefined) {
        let l1 = [uid, lang1, langcheck1.includes("read") ? true : false,
            langcheck1.includes("write") ? true : false, langcheck1.includes("speak") ? true : false];
        [result] = await conn.query(sql, [l1])
    }
    if (lang2 !== undefined) {
        let l2 = [uid, lang2, langcheck2.includes("read") ? true : false,
            langcheck2.includes("write") ? true : false, langcheck2.includes("speak") ? true : false];
        [result] = await conn.query(sql, [l2])
    }
    if (lang3 != undefined) {
        let l3 = [uid, lang3, langcheck3.includes("read") ? true : false,
            langcheck3.includes("write") ? true : false, langcheck3.includes("speak") ? true : false];
        [result] = await conn.query(sql, [l3])
    }

    return result;



}

const technologyknown = async (req, res, uid) => {

    let { php, phptech, mysql, mysqltech, oracle, oracletech, laravel, laraveltech } = req.body;

    let sql = `insert into technologyknowns (candid,techname,level) values (?)`;
    let phpdata = [], mysqldata = [], oracledata = [], laraveldata = [];
    let result = [];
    if (php && phptech) {
        phpdata = [uid, php, phptech];

        [result] = await conn.query(sql, [phpdata])
    }
    if (mysql && mysqltech) {
        mysqldata = [uid, mysql, mysqltech];

        [result] = await conn.query(sql, [mysqldata])
    }
    if (laravel && laraveltech) {
        laraveldata = [uid, laravel, laraveltech];

        [result] = await conn.query(sql, [laraveldata])
    }

    if (oracle && oracletech) {
        oracledata = [uid, oracle, oracletech];
        [result] = await conn.query(sql, [oracledata])
    }

    return result;

}

const references = async (req, res, uid) => {

    let { name, contactnum, relation } = req.body;
    let sql = `insert into reference (candid,person_name,contactnum,relation) values (?)`;
    let result = [];
    let array = []
    for (let i = 0; i < name.length; i++) {
        if (name[i].trim() != "") {
            array[0] = uid;
            array[1] = name[i];
            array[2] = contactnum[i];
            array[3] = relation[i];

            [result] = await conn.query(sql, [array]);
        }
    }

    return result;

}

const preferences = async (req, res, uid) => {

    let { prefloc, noticeperiod, department, expectedctc, currentctc } = req.body;
    let sql = `insert into preferences (candid,preferedlocation,noticeperiod,expacted_ctc,current_ctc,department) values (?)`;

    let preference = [uid, prefloc, noticeperiod, expectedctc, currentctc, department];

    let [result] = await conn.query(sql, [preference])

    return result;



}



const generatecombo = async (req, res, comboname, type, val = "") => {


    let data;

    let sql = `select * from selectmaster where select_key=?`;


    let [result] = await conn.query(sql, [comboname])

    if (result.length === 0) {
        return res.render("ajax/home", { result: [], messege: "" })
    }


    let id = result[0].sid;
    let name = result[0].select_name;
    // let type = result[0].select_type;

    sql = `select * from optionmaster where sid=?`;
    [result] = await conn.query(sql, [id])

    if (result.length != 0) {
        if (type == "radio" || type == "checkbox") {
            data = `<label for="${name}">
                ${name}
            </label>`

            result.forEach(element => {

                data += `<input type=" ${type}" name=" ${name} " id=" ${element.option_value}  " value=" ${element.option_value}  " ${element.option_value}==${val}?'checked' : ''>
                            <label for="${element.option_value} ">
                                 ${element.option_value} 
                            </label>`

            })
        }
        if (type == "dropdown") {

            data = `<label for="${name}">
                              ${name}
                        </label>
                        <select name="${name}" id="${name}">
                        <option value="">Select Value</option>`


            result.forEach(element => {
                data += ` <option value="${element.option_value}" >
                             ${element.option_value}
                        </option>`
            })
            data += `</select>`

        }

        return data;
    }


}



/* function for insert data */
exports.getform = async (req, res) => {
    try {
        return res.render("ajax/home", {
            route: "/form",
            basicdetail: {}, educationdetial: {}, workexperience: [], languageknown: [],
            technologyknown: [], reference: {}, preference: {}, message: ""
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            messege: "getform"
        })
    }
}

exports.insertdata = async (req, res) => {
    try {

        let { fname, currdesignation, email, gender, address, state, lname, dob, phone, relnstatus,
            city, zipcode, sscnameofboard, sscpassingyear, sscpercentage, hscnameofboard, hscpassingyear,
            hscpercentage, bachelorcourse, bachelorpassingyear, bachelorpercentage, mastercourse,
            masterpassingyear, masterpercentage, companyname, designation, from, to, lang1, langcheck1, lang2, langcheck2, lang3,
            langcheck3, php, phptech, mysql, mysqltech, oracle, oracletech, laravel, laraveltech, name, contactnum, relation,
            prefloc, noticeperiod, department, expectedctc, currentctc } = req.body;



        if (!fname || !currdesignation || !email || !gender || !address || !state || !lname || !dob || !phone || !relnstatus || !city || !zipcode

            || !sscnameofboard || !sscpassingyear || !sscpercentage ||
            !hscnameofboard || !hscpassingyear || !hscpercentage ||

            (!lang1 && langcheck1) || (lang1 && !langcheck1) || (!lang2 && langcheck2) || (lang2 && !langcheck2) || (!lang3 && langcheck3) || (lang3 && !langcheck3) ||

            (!php && phptech) || (php && !phptech) || (!mysql && mysqltech) || (mysql && !mysqltech) ||
            (!oracle && oracletech) || (oracle && !oracletech) || (!laravel && laraveltech) || (laravel && !laraveltech) ||

            !prefloc || !noticeperiod || !department || !expectedctc || !currentctc ||

            (!bachelorcourse && (bachelorpassingyear || bachelorpercentage)) ||
            (bachelorcourse && (!bachelorpassingyear || !bachelorpercentage)) ||
            (!mastercourse && (masterpassingyear || masterpercentage)) ||
            (mastercourse && (!masterpassingyear || !masterpercentage)) ||

            (mastercourse && !bachelorcourse)

        ) {

            return res.json({ success: false, message: "Please fill all field" })
        }
        else {

            if (!(lang1 && langcheck1) && !(lang3 && langcheck3) && !(lang2 && langcheck2)) {

                return res.json({ success: false, message: "Please choose one language" })
            }

            for (let i = 0; i < companyname.length; i++) {
                if ((!companyname[i] && (designation[i] || from[i] || to[i])) || (companyname[i] && (!designation[i] || !from[i] || !to[i]))) {
                    return res.json({ success: false, message: "Please fill all field of selected company" })

                }

            }

            for (let i = 0; i < name.length; i++) {
                if ((!name[i] && (contactnum[i] || relation[i])) || (name[i] && (!contactnum[i] || !relation[i]))) {
                    return res.json({ success: false, message: "Please fill all field of selected reference" })

                }

            }

            let sql = `select * from basicdetails where email="${email}" limit 1;`;

            let [result] = await conn.query(sql);

            if (result.length == 1) {

                return res.json({ success: false, message: "User exist with same email" })

            }
            else {

                let uid;

                uid = await basicdetails(req, res);
                await educationdeatils(req, res, uid)
                await workexperience(req, res, uid)

                if ((lang1 && langcheck1) || (lang2 && langcheck2) || (lang3 && langcheck3)) {
                    await languageknown(req, res, uid);
                }

                if ((php && phptech) || (laravel && laraveltech) || (oracle && oracletech) || (mysql && mysqltech)) {
                    await technologyknown(req, res, uid);
                }

                await references(req, res, uid);
                await preferences(req, res, uid);



                return res.json({ success: true, message: "Data Inserted SucessFully" })
            }



        }




    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            messege: "insertdata"
        })
    }




}


/* function for show all job applicatent data in table */
exports.result = async (req, res) => {
    try {
        let sql = `select candid,fname as FirstName,lname as LastName,designation,email,dob as birthdate,phone as phoneNO,gender,reln_status as Relationship,address,city,state,zipcode from basicdetails`;

        let [result] = await conn.query(sql)

        return res.render("ajax/result", { result: result });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            messege: "result"
        })
    }

}













