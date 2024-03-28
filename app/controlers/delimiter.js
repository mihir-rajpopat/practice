const con = require("../../connection");

exports.delimiter_get = async (req, res) => {
    var count = 1;
    var qr=""
    sql = `SELECT * FROM student_today limit 100`
    var data = new con("localhost", "root", "password", "node_dashboard");
    var [res11] = await data.queary(sql)
    res.render("delimiter/index", {data: res11, count,qr,sql })
  }


  exports.delimiter_post = async (req, res) => {
            var s = (req.body.in)
            var star = {};
            var per = {};
            var no = {};
            var un = {};
            for (let i = 0; i < s.length; i++)
            {
                if (s[i] == "%" || s[i] == "*" || s[i] == "^" || s[i] == "_" ) 
                {
                    if (s[i] == "%") 
                    {
                        per["%" + i] = i

                    }
                    else if (s[i] == "*") 
                    {
                        star["*" + i] = i

                    }
                    else if ((s[i] == "^")) 
                    {
                        no["^" + i] = i

                    }

                    else if ((s[i] == "_")) 
                    {
                        un["_" + i] = i

                    }
            
                }
            }

            let temp = {
            ...per,
            ...star,
            ...no,
            ...un
            };

            const sortedObject = Object.entries(temp).sort((x, y) => x[1] - y[1]);
            var Key1 = [];
            var val = [];

            for (let i = 0; i < sortedObject.length; i++) 
            {

                for (let j = 0; j < sortedObject[i].length; j++) 
                {
                    if (j == 0) 
                    {
                        Key1.push(sortedObject[i][j].slice(0, 1));
                    }
                    else 
                    {
                        val.push(sortedObject[i][j]);

                    }
                }

            }
            val.push(s.length)
            var city = []
            var lastname = []
            var firstname = []
            var  role=[]

            for (var j = 0; j < val.length; j++) 
            {
                var flag = "";
                for (var i = val[j] + 1; i < val[j + 1]; i++)
                {
                    flag += s[i];
                }
                if (Key1[j] == "*") 
                {
                    if(flag.trim()!='')
                    city.push(flag.trim())
                }
                else if (Key1[j] == "%") 
                {
                    if(flag.trim()!='')
                    lastname.push(flag.trim())
                }
                else if (Key1[j] == "^")
                {
                    if(flag.trim()!='')
                    firstname.push(flag.trim())
                }
                else if (Key1[j] == "_") 
                {
                    if(flag.trim()!='')
                    role.push(flag.trim())
                }
            }

            var data = new con("localhost", "root", "password", "node_dashboard");
            var qr = `SELECT * FROM student_today WHERE `

            if (city.length)
            {
                var qrc = '('

                for (var i = 0; i < city.length; i++)
                {

                
                    if (city.length == 1) 
                    {

                        qrc += `city LIKE '%${city[i]}%' `

                    }
                    else if (i == city.length - 1) 
                    {
                        qrc += `city LIKE '%${city[i]}%' `
                    }
                    else 
                    {
                        qrc += `city LIKE '%${city[i]}%' or `
                    }


                }


                qrc += ")"
                qr = qr + qrc;
            }


            if (firstname.length) 
            {
                if (city.length > 0) 
                {

                    var qrc1 = ' and ( ';
                }
                else 
                {
                    var qrc1 = '(';

                }


                for (var i = 0; i < firstname.length; i++) 
                {
                    if (firstname.length == 1) 
                    {

                        qrc1 += `firstname LIKE '%${firstname[i]}%' `

                    }
                    else if (i == firstname.length - 1) 
                    {
                        qrc1 += `firstname LIKE '%${firstname[i]}%' `
                    }
                    else 
                    {
                        qrc1 += `firstname LIKE '%${firstname[i]}%' or  `
                    }
                 }
                qrc1 += ")"
                qr = qr + qrc1;
            }


            if (lastname.length) 
            {
                if (city.length > 0 || firstname.length > 0) 
                {

                    var qrc2 = ' and ( ';
                }
                else 
                {
                    var qrc2 = '(';

                }

                for (var i = 0; i < lastname.length; i++) 
                {
                    if (lastname.length == 1) 
                    {

                        qrc2 += `lastname LIKE '%${lastname[i]}%' `

                    }
                    else if (i == lastname.length - 1) 
                    {
                        qrc2 += `lastname LIKE '%${lastname[i]}%' `
                    }
                    else {
                        qrc2 += `lastname LIKE '%${lastname[i]}%' or  `
                    }
                }
                qrc2 += ")"
                qr = qr + qrc2;
            }

            if (role.length) {
            if (city.length > 0 || firstname.length > 0 || lastname.length>0) {

                var qrc3 = ' and ( ';
            }
            else {
                var qrc3 = '(';

            }
            for (var i = 0; i < role.length; i++) {
                if (role.length == 1) {

                    qrc3 += `role LIKE '%${role[i]}%' `

                }
                else if (i == role.length - 1) {
                    qrc3 += `role LIKE '%${role[i]}%' `
                }
                else {
                    qrc3 += `role LIKE '%${role[i]}%' or  `
                }


            }
            qrc3 += ")"
            qr = qr + qrc3;
            }

            console.log(qr);
            if(qr.length == 34)
            {
            qr = `SELECT * FROM student_today limit 100`
            }
            var [res11] = await data.queary(qr)

            // console.log(res11);
            var count = 1;
            console.log("hello");
            res.render("delimiter/index", { data: res11, count,qr :s ,sql :qr})
  }
  

