const moment = require("moment");
// let conn = require("../../config/connection")


const conn = require("../../../config/connection");

/*  update functions */

const updatebasic = async (req, res, uid) => {

    let { candid, fname, currdesignation, email, gender, address, state, lname, dob, phone, relnstatus,
        city, zipcode } = req.body;

    let sql = `update basicdetails set ? where candid=?`;

    let basicdetail = {
        "fname": fname,
        "designation": currdesignation,
        "email": email,
        "gender": gender,
        "address": address,
        "state": state,
        "lname": lname,
        "dob": new Date(dob),
        phone: phone,
        "reln_status": relnstatus,
        "city": city,
        "zipcode": zipcode
    };


    let [result] = await conn.query(sql, [basicdetail, uid]);

    return result;

}

const updateeducation = async (req, res, uid) => {

    let { sscnameofboard, sscpassingyear, sscpercentage, hscnameofboard, hscpassingyear,
        hscpercentage, bachelorcourse, bachelorpassingyear, bachelorpercentage, mastercourse,
        masterpassingyear, masterpercentage } = req.body

    let sql = `update educationdetails set ? where candid=? and degreename=?`;

    let ssc = {
        "candid": uid,
        "degreename": "ssc",
        "coursename_nameofboard": sscnameofboard,
        "passingyear": sscpassingyear,
        "percentage": sscpercentage
    };

    let hsc = {
        "candid": uid,
        "degreename": "hsc",
        "coursename_nameofboard": hscnameofboard,
        "passingyear": hscpassingyear,
        "percentage": hscpercentage
    };

    let bachelor = {
        "candid": uid,
        "degreename": "bachelor",
        "coursename_nameofboard": bachelorcourse,
        "passingyear": bachelorpassingyear,
        "percentage": bachelorpercentage
    };

    let master = {
        "candid": uid,
        "degreename": "master",
        "coursename_nameofboard": mastercourse,
        "passingyear": masterpassingyear,
        "percentage": masterpercentage
    };

    let query = `select * from educationdetails where candid=${uid}`;

    let [edu] = await conn.query(query);

    let degree = [];

    edu.forEach(deg => {
        degree.push(deg.degreename);
    });

    let result;

    if (sscnameofboard.trim() != "") {
        [result] = await conn.query(sql, [ssc, uid, ssc.degreename])
    }

    if (hscnameofboard.trim() != "") {
        [result] = await conn.query(sql, [hsc, uid, hsc.degreename])
    }

    if (bachelorcourse.trim() != "") {
        if (degree.includes("bachelor")) {
            [result] = await conn.query(sql, [bachelor, uid, bachelor.degreename])
        } else {
            [result] = await conn.query(`insert into educationdetails set ? `, [bachelor, uid])
        }
    } else {
        [result] = await conn.query(`delete from educationdetails where candid=${uid} && degreename in ("bachelor","master")`)
    }

    if (mastercourse.trim() != "") {
        if (degree.includes("master")) {
            [result] = await conn.query(sql, [master, uid, master.degreename])
        } else {
            [result] = await conn.query(`insert into educationdetails set ? `, [master, uid])
        }
    } else {
        [result] = await conn.query(`delete from educationdetails where candid=${uid} && degreename="master"`)
    }

    return result;

}

const updateworkexperience = async (req, res, uid) => {

    let { workid, companyname, designation, from, to } = req.body;

    let sql = `update workexperiences set ? where  wid=?`;

    let array = {};
    let result;

    for (let i = 0; i < companyname.length; i++) {
        if (companyname[i].trim() != "") {

            array["companyname"] = companyname[i];
            array["designation"] = designation[i];
            array["fromdate"] = moment(from[i]).format('YYYY-MM-DD');
            array["todate"] = moment(to[i]).format('YYYY-MM-DD');

            if (array["companyname"] && !workid[i]) {
                [result] = await conn.query(`insert into workexperiences set candid=${uid},?`, [array]);
            } else {
                [result] = await conn.query(sql, [array, workid[i]]);
            }
        }

        if (companyname[i].trim() == "" && workid[i]) {
            [result] = await conn.query(`delete from workexperiences where candid=${uid} and wid=${workid[i]}`);
        }

    }

    return result;

}

const updatelanguageknowns = async (req, res, uid) => {

    let { lang1, langcheck1, lang2, langcheck2, lang3, langcheck3 } = req.body;
    let result;

    let sql = `update languageknowns set ? where candid=? and language=?`;

    let query = `select * from languageknowns where candid=${uid}`;
    let [lan] = await conn.query(query);

    let lang = [];

    lan.forEach(element => {
        lang.push(element.language)
    });


    if (lang1 !== undefined) {

        let l1 = {
            "language": lang1,
            "canread": langcheck1.includes("read") ? true : false,
            "canwrite": langcheck1.includes("write") ? true : false,
            "canspeak": langcheck1.includes("speak") ? true : false
        };

        if (lang.includes(lang1)) {
            [result] = await conn.query(sql, [l1, uid, "hindi"])
        } else {
            [result] = await conn.query(`insert into languageknowns SET candid=${uid},?`, [l1])
        }
    } else {
        [result] = await conn.query(`delete from languageknowns where candid=${uid} and language=?`, ["hindi"])
    }


    if (lang2 !== undefined) {
        let l2 = {
            "language": lang2,
            "canread": langcheck2.includes("read") ? true : false,
            "canwrite": langcheck2.includes("write") ? true : false,
            "canspeak": langcheck2.includes("speak") ? true : false
        };

        if (lang.includes(lang2)) {
            [result] = await conn.query(sql, [l2, uid, lang2])
        } else {
            [result] = await conn.query(`insert into languageknowns SET candid=${uid},?`, [l2])
        }

    } else {
        [result] = await conn.query(`delete from languageknowns where candid=${uid} and language=?`, ["gujrati"])
    }

    if (lang3 != undefined) {
        let l3 = {
            "language": lang3,
            "canread": langcheck3.includes("read") ? true : false,
            "canwrite": langcheck3.includes("write") ? true : false,
            "canspeak": langcheck3.includes("speak") ? true : false
        };

        if (lang.includes(lang3)) {
            [result] = await conn.query(sql, [l3, uid, lang3])
        } else {
            [result] = await conn.query(`insert into languageknowns SET candid=${uid},?`, [l3])
        }


    } else {
        [result] = await conn.query(`delete from languageknowns where candid=${uid} and language=?`, ["english"])
    }

    return result;

}

const updatetechnology = async (req, res, uid) => {
    let { php, phptech, mysql, mysqltech, oracle, oracletech, laravel, laraveltech } = req.body;

    let result;


    let sql = `update technologyknowns set ? where candid=? and techname=?`;

    let query = `select * from technologyknowns where candid=${uid}`;

    let [technology] = await conn.query(query);

    let tech = [];

    technology.forEach(element => {
        tech.push(element.techname)
    });

    let phpdata = [], mysqldata = [], oracledata = [], laraveldata = [];

    if (php && phptech) {
        phpdata = {
            "techname": php,
            "level": phptech
        };

        if (tech.includes(php)) {
            [result] = await conn.query(sql, [phpdata, uid, php])
        } else {
            [result] = await conn.query(`insert into technologyknowns set candid=${uid},?`, [phpdata])
        }
    } else {
        [result] = await conn.query(`delete from technologyknowns where candid=${uid} and techname=?`, ["php"])
    }


    if (mysql && mysqltech) {
        mysqldata = {
            "techname": mysql,
            "level": mysqltech
        };
        if (tech.includes(mysql)) {
            [result] = await conn.query(sql, [mysqldata, uid, mysql])
        } else {
            [result] = await conn.query(`insert into technologyknowns set candid=${uid},?`, [mysqldata])
        }
    } else {
        [result] = await conn.query(`delete from technologyknowns where candid=${uid} and techname=?`, ["mysql"])
    }

    if (laravel && laraveltech) {
        laraveldata = {
            "techname": laravel,
            "level": laraveltech
        };

        if (tech.includes(laravel)) {
            [result] = await conn.query(sql, [laraveldata, uid, laravel])
        } else {
            [result] = await conn.query(`insert into technologyknowns set candid=${uid},?`, [laraveldata])
        }
    } else {
        [result] = await conn.query(`delete from technologyknowns where candid=${uid} and techname=?`, ["laravel"])
    }

    if (oracle && oracletech) {
        oracledata = {
            "techname": oracle,
            "level": oracletech
        };

        if (tech.includes(oracle)) {
            [result] = await conn.query(sql, [oracledata, uid, oracle])
        } else {
            [result] = await conn.query(`insert into technologyknowns set candid=${uid},?`, [oracledata])
        }
    } else {
        [result] = await conn.query(`delete from technologyknowns where candid=${uid} and techname=?`, ["oracle"])
    }

    return result;
}

const updatereference = async (req, res, uid) => {

    let { refid, name, contactnum, relation } = req.body;

    let sql = `update reference set ? where candid=? and refid=?`;

    let array = {};
    let result;
    for (let i = 0; i < name.length; i++) {
        if (name[i].trim() != "") {

            array["person_name"] = name[i]
            array["contactnum"] = contactnum[i]
            array["relation"] = relation[i];

            if (array["person_name"] && !refid[i]) {
                [result] = await conn.query(`insert into reference set candid=${uid},?`, [array]);
            } else {
                [result] = await conn.query(sql, [array, uid, refid[i]]);
            }
        }

        if (name[i].trim() == "" && refid[i]) {
            [result] = await conn.query(`delete from reference where candid=${uid} and refid=${refid[i]}`);
        }

    }

    return result;



}

const updatepreference = async (req, res, uid) => {

    let { prefloc, noticeperiod, department, expectedctc, currentctc } = req.body
    let sql = `update preferences set ? where candid=?`;
    let preference = {
        "preferedlocation": prefloc,
        "noticeperiod": noticeperiod,
        "department": department,
        "expacted_ctc": expectedctc,
        "current_ctc": currentctc
    };

    let [result] = await conn.query(sql, [preference, uid])

    return result;

}


const getdata = async (req, res, table, uid, order) => {
    let sql = `select * from ${table} where candid=${uid} order by ${order}`;

    let [result] = await conn.query(sql);

    return result;

}

exports.getdataforupdate = async (req, res) => {
    try {

        let id = Number(req.params.id);

        let basicdetail = await getdata(req, res, "basicdetails", id, "candid")

        let educationdetial = await getdata(req, res, "educationdetails", id, "eid")

        let workexperience = await getdata(req, res, "workexperiences", id, "wid")

        let languageknown = await getdata(req, res, "languageknowns", id, "lkid")

        let technologyknown = await getdata(req, res, "technologyknowns", id, "tid")

        let reference = await getdata(req, res, "reference", id, "refid")

        let preference = await getdata(req, res, "preferences", id, "pid")

        return res.json({
            route: "/ajax/update",
            basicdetail: basicdetail[0], educationdetial: educationdetial, workexperience: workexperience, languageknown: languageknown,
            technologyknown: technologyknown, reference: reference, preference: preference[0], message: ""
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            messege: "getdataforupdate"
        })
    }
}

exports.updateform = async (req, res) => {
    try {

        let { candid, fname, currdesignation, email, gender, address, state, lname, dob, phone, relnstatus,
            city, zipcode, sscnameofboard, sscpassingyear, sscpercentage, hscnameofboard, hscpassingyear,
            hscpercentage, bachelorcourse, bachelorpassingyear, bachelorpercentage, mastercourse,
            masterpassingyear, masterpercentage, companyname, workid, designation, from, to, lang1, langcheck1, lang2, langcheck2, lang3,
            langcheck3, php, phptech, mysql, mysqltech, oracle, oracletech, laravel, laraveltech, name, contactnum, relation,
            prefloc, noticeperiod, department, expectedctc, currentctc } = req.body


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
            (mastercourse && (!masterpassingyear || !masterpercentage))

        ) {
            return res.json({ success: false, message: "Please fill all field" })
        } else {

            if ((mastercourse && !bachelorcourse)) {
                return res.json({ success: false, message: "Please fill all bachelor field" })
            }

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

            try {
                await updatebasic(req, res, candid)
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    message: error.message,
                    messege: "updatebasic"
                })
            }

            try {
                await updateeducation(req, res, candid)
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    message: error.message,
                    messege: "basicdetails"
                })
            }

            try {
                await updateworkexperience(req, res, candid)
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    message: error.message
                })
            }

            try {
                await updatelanguageknowns(req, res, candid)
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    message: error.message
                })
            }

            try {
                await updatetechnology(req, res, candid)
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    message: error.message

                })
            }

            try {
                await updatereference(req, res, candid)
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    message: error.message,

                })
            }

            try {
                await updatepreference(req, res, candid)
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    message: error.message

                })
            }

            return res.json({ success: true, message: "Data Updated SucessFully" })

        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            messege: "updateform"
        })
    }
}
