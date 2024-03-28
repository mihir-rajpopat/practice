const con = require("../../connection");

exports.filter = async (req, res) => {

            //ek page na total record 
        const resultpage= 30;

        var yr = 11;
        var mn = 2023;
        var temp = req.query.year;


        if (temp == "January") {
            yr = 2024;
            mn = 1;
        
    
        }
        else if (temp == "  ") {
            yr = 2023;
            mn = 11;
       
        }
        else if (temp == "December") {
            yr = 2023;
            mn = 12;
        }
        else {
            yr = 2023;
            mn = 11;
            
        }
    
        
        let sql = `
      select s.sid,s.name,count(s.sid) as presentDay from student_master as s join attan as a on s.sid = a.sid where CONCAT( month(a.dop)," ",year(a.dop) ) = '${mn} ${yr}' and a.pre = 1 group by s.sid order by s.sid `;

    
     
    var data = new con("localhost", "root", "password", "node_dashboard");
    var [result] = await data.queary(sql)
    
    
    
            const numOfResults = result.length;
    
            const numberOfPages = Math.ceil(numOfResults / resultpage);
    
            let page = req.query.page ? Number(req.query.page) : 1;
    
    
            if (page > numberOfPages) {
                res.redirect('/?page=' + encodeURIComponent(numberOfPages));
            } else if (page < 1) {
                res.redirect('/?page=' + encodeURIComponent('1'));
            }
    
    
            const startingLimit = (page - 1) * resultpage;
    
           let sql1 = `
      select s.sid,s.name,count(s.sid) as presentDay from student_master as s join attan as a on s.sid = a.sid where CONCAT ( month(a.dop)," ",year(a.dop) ) = '${mn} ${yr}' and a.pre = 1 group by s.sid order by s.sid limit ${startingLimit},${resultpage}`;
    
    
      var data = new con("localhost", "root", "password", "node_dashboard");
      var [result1] = await data.queary(sql1)
    
           
                res.render('filter/attan', { data: result1, page, numberOfPages, temp });
          
    
      
  }