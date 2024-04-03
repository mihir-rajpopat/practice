const con = require("../../connection");

exports.pagination = async (req, res) => {

    try {

        //ek page na total record 
        const resultpage = 30;
        let year = 11;
        let month = 2023;
        let temp = req.query.year;

        let sql = `select s.sid,s.name,count(s.sid) as presentDay from student_master as s join attan as a on s.sid = a.sid where CONCAT( month(a.dop)," ",year(a.dop) ) = '${month} ${year}' and a.pre = 1 group by s.sid order by s.sid `;

        let data = new con("localhost", "root", "password", "node_dashboard");
        let [result] = await data.queary(sql)

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
          select s.sid,s.name,count(s.sid) as presentDay from student_master as s join attan as a on s.sid = a.sid where CONCAT ( month(a.dop)," ",year(a.dop) ) = '${month} ${year}' and a.pre = 1 group by s.sid order by s.sid limit ${startingLimit},${resultpage}`;

        let [result1] = await data.queary(sql1)


        res.render('pagination/attan', { data: result1, page, numberOfPages, temp });
    } catch (error) {

    }



}