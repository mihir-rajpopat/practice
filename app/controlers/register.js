
var con = require("../../connection")
var md5 = require('md5');
const ShortUniqueId = require('short-unique-id');

const jwt =  require("jsonwebtoken")



const jwt_secret = "mihir"

//used for render sing up page 
exports.registration = async (req, res) => {

    return res.render("registration/hello", { message: "" })
}

exports.active = async (req, res) => {

    return res.render("registration/active")
}

//check user is active or not and update the user 
exports.activeuser = async (req, res) => {

    var msg ="hello";

    // console.log(req.query);

    async function getdata()
    {
      
        let data = new con("localhost","root","password","node_dashboard"); 
        console.log("hello",req.query.activecode);
        let sql =` select * from user  WHERE active = '${req.query.activecode}'  and email= '${req.query.email}'`
        // console.log(sql);
      
        var [result] =await data.queary(sql);
        return result;
    }

    let result = await getdata();
    console.log(result);
    // console.log(result);
    if(result[0].status == 'active')
    {   
        msg = "alrady active" 
    }
    console.log(req.query.activecode);

    if(result[0].email == req.query.email && result[0].active == req.query.activecode)
    {

        var timeStart = new Date(result[0].create_at);
        console.log("start time " ,timeStart);
        var timeEnd = new Date();
        var difference = timeEnd - timeStart; 
        console.log("end time is " ,timeEnd);   

        

            let minite =  parseInt((difference/(1000*60))%60); 

      
        if(minite < 1 )
        {
            update_user();
            msg = "activate"
        }
        else
        {
            msg = "linkexpire"
        }

      
    }



    async function update_user()
    {
        console.log(req.query);
        let data  = new con("localhost","root","password","node_dashboard");
        let sql =`UPDATE user SET status = 'active'  WHERE active = '${req.query.activecode}'  and email= '${req.query.email}'`
        console.log(sql);
        var [result] =await data.queary(sql);
    
    }
    console.log(msg);
    return res.render("registration/msg" , {msg :msg})
}
//veryfy the genrate the solt and encrypt the password
exports.verify = async (req, res) => {

        if(req.body)
        {
                    let pass1 = req.body.password;
                    const uid = new ShortUniqueId({ length: 4 });
                    let pass2 = uid.rnd();
                    pass1 += pass2;
                    pass1 = md5(pass1);
                    res.json({password:pass1 ,solt:pass2})
        }     
}
//insert the data in to the database 
exports.insert_database = async (req, res) => {
    if(req.body)
    {        
        const uid = new ShortUniqueId({ length: 12 });
        let active = uid.rnd();
        let sql = ` INSERT INTO user (firstname, lastname, email, password, active, solt) VALUES ('${req.body.firstname}', '${req.body.lastname}', '${req.body.email}', '${req.body.password}','${active}', '${req.body.solt}')`
        let data  = new con("localhost","root","password","node_dashboard");
        var [result] =await data.queary(sql);
        res.json({active:active})   
        console.log("object");  
    }     
}

//used for check main is alrady there or not 
exports.mail = async (req, res) => {
    if(req.body)
    {
        let inmail = req.body.mail;
        console.log(inmail);
        let data  = new con("localhost","root","password","node_dashboard");
        let sql =`select count(*) as count from user where email = "${inmail}"`
        var [result] =await data.queary(sql)
        console.log(result);
        var bol = false;
        console.log(result[0].count);
        if(result[0].count == 0)
        {
            bol = true;

        }
     
          res.json({mail: bol})
    }     
}


//used for login check user password is right or not and email is available or not
exports.validateuser = async (req, res) => {

            var isvalidate_user = true;

            async function getdata()
            {
            
                let data = new con("localhost","root","password","node_dashboard"); 
                let sql =` select * from user  WHERE email = '${req.body.email}'`
                console.log(sql);
                let [result] =await data.queary(sql);
                return result;
            }

        let result  = await getdata();


            let decrypt_password ;
            let password_input = req.body.password;
            let solt = result[0].solt;
            console.log(result[0].solt);
            password_input += solt;
            password_input = md5(password_input);

            if(password_input != result[0].password)
            {
                return res.json({validate: false})

            }
            


            let payload = {
                email : result[0].email

            }

            let token  = jwt.sign(payload,jwt_secret,{expiresIn:"1d"})





        res.cookie("token" , token , {maxAge:2*60*1000}).json({validate: isvalidate_user})
}


exports.login = async (req, res) => {

    return res.render("registration/login")
}

exports.home = async (req, res) => {

    return res.render("registration/home")
}

exports.verify_user_byemail = async (req, res) => {

    if(!req.body.email)
    {
        return res.json({isvalidate_user : false})
    }


    let input_email = req.body.email

    async function email_verify(input_email)
    {
    
        let data = new con("localhost","root","password","node_dashboard"); 
        let sql =` select count(*)  as count from user  WHERE email = '${input_email}'`
      
        let [result] =await data.queary(sql);
        return result;
    }

    let result = await email_verify(input_email)

    console.log(result[0].count);
    if(result[0].count == 0 )
    {
        return res.json({isvalidate_user : false})
    }

    return res.json({isvalidate_user : true})




 
}



exports.forgot_password = async (req, res) => {


    res.render("registration/forgot")
 }
 



exports.set_password = async (req, res) => {

    if(!req.body.email &&  !req.body.password)
    {
        return res.json({isvalidate_user : false})
    }


    let input_email = req.body.email
    let input_password = req.body.password



    async function get_data(input_email)
    {
    
        let data = new con("localhost","root","password","node_dashboard"); 
        let sql =` select *  from user  WHERE email = '${input_email}'`
      
        let [result] =await data.queary(sql);
        return result;
    }

    let [result] = await get_data(input_email)
    console.log(result.solt);


    input_password += result.solt;

    console.log(input_password);
    input_password = md5(input_password);
    
    async function update_email(input_email,input_password)
    {
    
        let data = new con("localhost","root","password","node_dashboard"); 
        let sql =` UPDATE user SET password ='${input_password}'  WHERE email = '${input_email}'
        `
      
        let [result] =await data.queary(sql);
        return result;
    }

    await update_email(input_email,input_password);


    return res.json({isvalidate_user : true})




 
}



