
const con = require("../../connection");

//GET COMBO ROUTER CALL BACK FUNCTION 
exports.combo = async (req, res) => {
    var count = 0;
    res.render("combobox/index", { count })
}

//POST CALLBACK BACK FUNCTION 
exports.combo_post = async (req, res) => {

    //GIVE THE  BOX NAME FROME THE BODY
    box_name = req.body.txtbox;
    //MAKE THE OBJECT OF THE CONNECTION CLASS ND CALL THE CONSTRUTOR 
    try {

        let data = new con("localhost", "root", "password", "node_dashboard");
        let sql = `select * from select_master where select_key = "${box_name}"`
        let [result_1] = await data.queary(sql);
        if (result_1.length > 0) {
            let id = result_1[0].sid
            let type = result_1[0].combo_type;
            let name1 = result_1[0].select_name;
            let sql2 = `select * from option_master where sid = "${id}";`
            let [res2] = await data.queary(sql2);
            let count = 1;
            let selected = "marketing"
            res.render("combobox/index", { data: res2, type, name1, count, selec: selected })
        }
        else {
            res.send("plese enster valid")
        }
    } catch (error) {
        return res.send(error)
    }

    // IF THE RSULT LENGTH IS MORE THAN ONE THAN CRERATE COMB

}












