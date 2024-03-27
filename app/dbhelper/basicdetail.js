
async function basicdetails()
{
    let sql   =  `
    INSERT INTO candidateMaster ( fname, lname, designation, city, state, email, phoneNo, zipCode, gender, relationship, dob, add1) VALUES (`
        var rs = genrate_queray(sql,basic)
        var [res11] =await data.queary(rs)
         uid = res11.insertId;
         return uid;
}

exports.module =basicdetails;
