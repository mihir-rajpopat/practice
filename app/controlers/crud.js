
var con = require('../../connection');

exports.form = async (req, res) => {

    return res.render("crud/form", { message: "" })
}

exports.insert = async (req, res) => {
    
    uid = 0;
    let { fname, designation, email, gender, address, state, lname, dob, phone, relnstatus, city, zipcode, sscnameofboard, sscpassingyear, sscpercentage, hscnameofboard, hscpassingyear, hscpercentage, bachelorcourse, bacheloruniversity, bachelorpassingyear, bachelorpercentage, mastercourse, masteruniversity, masterpassingyear, masterpercentage, companyname1, designation1, from1, to1, companyname2, designation2, from2, to2, companyname3, designation3, from3, to3, lang1, langcheck1, lang2, langcheck2, lang3, langcheck3, php, phptech, mysql, mysqltech, oracle, oracletech, laravel, laraveltech, name1, contactnum1, relation1, name2, contactnum2, relation2, prefloc, noticeperiod, department, expectedctc, currentctc } = req.body;
   
    let  basic = [fname,lname,designation,city,  state,email,phone,  zipcode, gender,relnstatus,  dob ,address]

    let sql   =     `

        INSERT INTO candidateMaster1 ( fname, lname, designation, city, state, email, phoneNo, zipCode, gender, relationship, dob, add1) VALUES (`

    function genrate_queray(sql,data)
    {
              var l=  data.length

                data.forEach((element,i) => {
                    sql+= "'"
                    sql += element;
                    sql+= "'"

                    if(i != l-1)
                    {

                        sql += ","
                        

                    }
                    
                
            });
            sql+=")"

            return sql;

        
    }




    async function basicdetails()
    {


        
            var rs = genrate_queray(sql,basic)
            var [res11] =await data.queary(rs)
    
        
    
             uid = res11.insertId;

             return uid;
        
     
        

    }
    var data  = new con("localhost","root","password","node_dashboard");

    







  async function education_details()
   {
       let ssc = [uid, sscnameofboard, sscpassingyear, sscpercentage]
       let hsc = [uid,  hscnameofboard, hscpassingyear, hscpercentage]
       let bachelor = [uid,  bachelorcourse, bachelorpassingyear, bachelorpercentage]
       let master = [uid,  mastercourse, masterpassingyear, masterpercentage]
       
       let edu = [ ssc , hsc , bachelor , master];
    
         let sql = `INSERT INTO educationDetails ( canid, board, passingYear, percentage) VALUES ( `;
            
            for(let i = 0 ; i<edu.length;i++)
            {
            
            if(edu[i][1] != '')
            {
               

                    var r = genrate_queray(sql,edu[i])
                    var [res11] =await data.queary(r)

                    
               
            }
            
            }
    }

   async function compnay_details()
   {

//compney details
    let company1 = [uid, companyname1, designation1, from1, to1]
    let company2 = [uid, companyname2, designation2, from2, to2]
    let company3 = [uid, companyname3, designation3, from3, to3]
    let compney = [ company1 , company2, company3 ];

    let sql = `INSERT INTO workExperience (canid, companyName, designation, fromDate, toDate) 
    VALUES ( `

        for(let i = 0 ; i<compney.length;i++)
        {

            if(compney[i][1] != '')
            {
          
           
            
               
                        var r = genrate_queray(sql,compney[i])
                        var [res11] =await data.queary(r)
    
                 
            }

        }
   }



   async function language_known()
   {
                
            //for the language 

           let  sql = `INSERT INTO languageKnown (canid, language, canRead, canWrite, canSpeak) VALUES (`
            let rws = [langcheck1,langcheck2,langcheck3]
            let l1 = [uid,lang1];
            let l2 = [uid,lang2];
            let l3 = [uid,lang3];

            let dt = [l1,l2,l3]
            for(let i = 0 ; i<rws.length ; i++)
            {
                    if(rws[i] != undefined)
                    {
                            var t1 =0;
                            var t2 = 0;
                            var t3 = 0;
                        for(let j = 0 ; j < rws[i].length;j++)
                        {
                            
                                if(rws[i][j] == "read")
                                {
                                    t1 = 1;

                                }
                                else if(rws[i][j] == "write")
                                {
                                    t2=1;

                                }
                                else if(rws[i][j] == "speak")
                                {
                                    t3=1;

                                }
                            
                                
                        }
                        if(dt[i][1] != undefined)
                        {

                            dt[i].push(t1,t2,t3)
                            
                           

                            
                        
                                var res1 = genrate_queray(sql,dt[i]) ;
                                var [res11] =await data.queary(res1)
            
                                
                          
                        }
                        
                     
                
                
                    }
            
            }



   }
   async function reference()
   {
    

    let ref1 = [uid, name1, contactnum1, relation1];
    let ref2 = [uid, name2, contactnum2, relation2];


    let ref = [ ref1 ,ref2];
    
    let sql = `INSERT INTO referenceContact (canid, name, contactNo, relation) VALUES (
    `
    
    for(let i = 0 ; i<ref.length;i++)
    {
    
       if(ref[i][1] != '')
       {
           
      

            var r = genrate_queray(sql,ref[i])
            var [res11] =await data.queary(r)

            
        
       
           
       }
                          
    
     
    
    }
 
   }




   async function technology_known()
   {
    

    let   phpdata = [uid, php, phptech];

  
  
    let mysqldata = [uid, mysql, mysqltech];
     
     let laraveldata = [uid, laravel, laraveltech];
  
     
     let oracledata = [uid, oracle, oracletech];
 
 
     let lang_data = [phpdata,mysqldata , laraveldata , oracledata]
    
 
     let sql = `INSERT INTO technologyYouKnow (canid, technology, level) VALUES (
 
        `
        
        for(let i = 0 ; i<lang_data.length;i++)
        {
        
           if(lang_data[i][1] != undefined)
           {
              
           
       
                   var r = genrate_queray(sql,lang_data[i])
                   var [res11] =await data.queary(r)
       
               
              
           }
               
         
        
         
        
        }
 
 
 
     
  
 
 
     }
 

     async function pref()
     {
        let sql = `INSERT INTO preference (canid, preferedLocation, noticePeriod, expectedCTC, currentCTC, department) VALUES (`

        let pre = [uid, prefloc, noticeperiod, expectedctc, currentctc, department];
       
    
            rs = genrate_queray(sql,pre);
            var [res11] =await data.queary(rs)

            
           
        }
        
    
    
    try {
        uid = await basicdetails();

    } catch (error) {
        return res.status(500).json({
            return: false,
            message: error.message,
            messege: "2"
        })   
        
    }
        try {
            education_details();
         } catch (error) {
            return res.status(500).json({
                return: false,
                message: error.message,
                messege: "2"
            })    
         }
    
         try {
            await compnay_details();
         } catch (error) {
            return res.status(500).json({
                return: false,
                message: error.message,
                messege: "2"
            })    
         }
         try {
            await language_known();
         } catch (error) {
            return res.status(500).json({
                return: false,
                message: error.message,
                messege: "2"
            })    
         }
         try {
            await  reference();
         } catch (error) {
            return res.status(500).json({
                return: false,
                message: error.message,
                messege: "2"
            })    
         }
         try {
            await technology_known();
         } catch (error) {
            return res.status(500).json({
                return: false,
                message: error.message,
                messege: "2"
            })    
         }
         try {
            await pref();
         } catch (error) {
            return res.status(500).json({
                return: false,
                message: error.message,
                messege: "2"
            })    
         }
         
    
     

     

    res.render('crud/thanks');




 
}

exports.listing = async (req, res) => {


 var data  = new con("localhost","root","password","node_dashboard");

 let sql = `select canid,
 fname,
 lname
  from candidateMaster1`
 var [res11] =await data.queary(sql)


 console.log(res11);




        
    return res.render("crud/list" , {data :res11})
}

exports.update_form  =   async (req , res ) =>{





    var id = req.query.id;
    async function getdata(id)
    {


        var data  = new con("localhost","root","password","node_dashboard");


            table_names = [
                'candidateMaster1',
                'educationDetails',
                'languageKnown',
                'preference',
                'referenceContact',
                'technologyYouKnow',
                'workExperience'
            ]


             var data1 = [] 
            for (let index = 0; index < table_names.length; index++) {

                let sql = `select * from  ${table_names[index]} where canid= ${id}`
                


                let [basic_detail_getdata] =  await data.queary(sql)
        

                data1.push(basic_detail_getdata);
               
                
            }
        res.render("crud/update" ,{data : data1}  )



    }

    if(id!= undefined )
    {
        getdata(id);
    } 
    else{
        res.send("enter the id")
    }
   




    

}


exports.update = async (req, res) => {

      let { fname, designation, email, gender, address, state, lname, dob, phone, relnstatus, city, zipcode, sscnameofboard, sscpassingyear, sscpercentage, hscnameofboard, hscpassingyear, hscpercentage, bachelorcourse, bacheloruniversity, bachelorpassingyear, bachelorpercentage, mastercourse, masteruniversity, masterpassingyear, masterpercentage, companyname1, designation1, from1, to1, companyname2, designation2, from2, to2, companyname3, designation3, from3, to3, lang1, langcheck1, lang2, langcheck2, lang3, langcheck3, php, phptech, mysql, mysqltech, oracle, oracletech, laravel, laraveltech, name1, contactnum1, relation1, name2, contactnum2, relation2, prefloc, noticeperiod, department, expectedctc, currentctc } = req.body;
      
      let  basic = [fname,lname,designation,city,  state,email,phone,  zipcode, gender,relnstatus,  dob ,address];

    console.log(basic);
    return res.send("updated")
}


