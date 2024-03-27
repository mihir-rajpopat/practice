
const con = require("../../connection");


//GET COMBO ROUTER CALL BACK FUNCTION 
exports.combo = async (req, res) => {

    

    var count = 0;
    res.render("combobox/index" , {count})
  }


  //POST CALLBACK BACK FUNCTION 
  exports.combo_post = async (req, res) => {

    //GIVE THE  BOX NAME FROME THE BODY
    box_name = req.body.txtbox ;
    //MAKE THE OBJECT OF THE CONNECTION CLASS ND CALL THE CONSTRUTOR 
    var data  = new con("localhost","root","password","node_employee");
    var sql = `select * from select_master where select_key = "${box_name}"`
    var [res1] =await data.queary(sql);
    // IF THE RSULT LENGTH IS MORE THAN ONE THAN CRERATE COMB
    if(res1.length>0)
    {
        var id = res1[0].sid
        var type = res1[0].combo_type;
        var name1 =  res1[0].select_name;
        var sql2= `select * from option_master where sid = "${id}";`
        var [res2] =await data.queary(sql2);
        var count = 1;
    
    var selec  =  "marketing"
        res.render("combobox/index" , {data:res2 ,type,name1 ,count,selec})
    }    
    else{
        res.send("plese enster valid")
    }


  
  }
  


  








