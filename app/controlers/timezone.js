
var con = require('../../connection');
exports.timezone = async (req, res) => {

   res.render("timezone/timezone")

}


exports.contryname = async (req, res) => {


  var data  = new con("localhost","root","password","node_dashboard");
    sql = `SELECT DISTINCT country FROM city_country `

  var [res11] =await data.queary(sql)
  res.json(res11);


}

exports.cityname = async (req, res) => {

    if(req.body.tag)
    {
      let city = req.body.tag;
      var data  = new con("localhost","root","password","node_dashboard");

      sql = `select city from city_country where country= "${city}"`
    var [res11] =await data.queary(sql)
    console.log(res11);
  res.json(res11);
  
    }
   
}



exports.timezone_name = async (req, res) => {
  if(req.body.tag)
  {
    let city = req.body.tag;
  var data  = new con("localhost","root","password","node_dashboard");

  

    sql = `select timezone from timezone_country  where countryname ="${city}";`
  var [res11] =await data.queary(sql)
  console.log(res11);

  res.json(res11);
  }



}









