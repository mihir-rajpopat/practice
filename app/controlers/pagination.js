const con = require("../../connection");

exports.sort = async (req, res) => {

    try {

        const resultpage = 100;
        let sql = `select * from exam_master `
        let data = new con("localhost", "root", "password", "node_dashboard");
        let order = req.query.name;
        let or = req.query.ord;
        let count = 0;
        if (order == undefined) {
            order = "ex_id"
        }
        if (or == undefined) {
            or = " asc"
        }
        else {
            count = 1;
            or = ` ` + req.query.ord;
        }
        console.log(order);
        let [res11] = await data.queary(sql)
        const numOfResults = res11.length;
        const numberOfPages = Math.ceil(numOfResults / resultpage);
        let page = req.query.page ? Number(req.query.page) : 1;
        // if (page > numberOfPages) {
        //     res.redirect('/?page=' + encodeURIComponent(numberOfPages));
        // } else if (page < 1) {
        //     res.redirect('/?page=' + encodeURIComponent('1'));
        // }
        const startingLimit = (page - 1) * resultpage;

        //     sql1 = sql + "limit" + startingLimit +resultpage
        // count = 1;
        var [res1] = await data.queary(sql + " ORDER BY  " + order + or + " limit " + startingLimit + ',' + resultpage)
        console.log(sql);
        if (count = 1) {
            or = req.query.ord;

        }
        else {
            or = "asc"
        }
        res.render("sort/index", { data: res1, count: count, page, numberOfPages, or, order })

    } catch (error) {
        res.send(error)
    }

}


exports.sort_post = async (req, res) => {
    try {

        const resultpage = 100;
        let sql = `select * from exam_master `
        let data = new con("localhost", "root", "password", "node_dashboard");
        let order = req.query.name;
        let or = req.query.ord;
        let count = 0;
        if (order == undefined) {
            order = "ex_id"
        }
        if (or == undefined) {
            or = " asc"
        }
        else {

            count = 1;

            or = ` ` + req.query.ord;
        }
        console.log(order);
        let [res11] = await data.queary(sql)
        const numOfResults = res11.length;
        const numberOfPages = Math.ceil(numOfResults / resultpage);
        let page = req.query.page ? Number(req.query.page) : 1;
        const startingLimit = (page - 1) * resultpage;

        //     sql1 = sql + "limit" + startingLimit +resultpage
        // count = 1;

        // t  = `sql +"WHERE s_id ="  + req.body.s_id +  
        // " ORDER BY  " + order + or +" limit " + startingLimit + ',' +resultpage


        console.log(req.body);
        if (req.body.sub_id == '' && req.body.Marks == '' && req.body.s_id == '') {
            return res.redirect("/sort")
        }
        else if (req.body.sub_id == '' && req.body.Marks == '') {
            var [res1] = await data.queary(sql + 'where ex_id IN (' + req.body.s_id + ')' +
                " ORDER BY  " + order + or + " limit " + startingLimit + ',' + resultpage)

        }
        else if (req.body.Marks != '' && req.body.sub_id) {
            var [res1] = await data.queary(sql + 'where sub_id IN (' + req.body.sub_id + ')' + "AND" + ' marks IN (' + req.body.Marks + ')' +
                " ORDER BY  " + order + or + " limit " + startingLimit + ',' + resultpage)
        }
        else if (req.body.Marks != '') {
            var [res1] = await data.queary(sql + 'where  marks IN (' + req.body.Marks + ')' +
                " ORDER BY  " + order + or + " limit " + startingLimit + ',' + resultpage)
        }

        else if (req.body.sub_id != '') {
            var [res1] = await data.queary(sql + 'where sub_id IN (' + req.body.sub_id + ')' +
                " ORDER BY  " + order + or + " limit " + startingLimit + ',' + resultpage)
        }

        //  console.log(t);
        if (count = 1) {
            or = req.query.ord;

        }
        else {
            or = "asc"
        }
        res.render("sort/index", { data: res1, count: count, page, numberOfPages, or, order })
    } catch (error) {
        res.send(error)

    }

}
