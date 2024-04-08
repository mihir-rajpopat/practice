
const con = require('../../connection');
exports.timezone = async (req, res) => {

  res.render("timezone/timezone")

}


exports.contryname = async (req, res) => {

  try {
    let data = new con("localhost", "root", "password", "node_dashboard");
    let sql = `SELECT DISTINCT country FROM city_country `
    let [result] = await data.queary(sql)
    res.json(result);

  } catch (error) {
    res.send(error)
  }

}

exports.cityname = async (req, res) => {
  try {

    if (req.body.tag) {
      let city = req.body.tag;
      let data = new con("localhost", "root", "password", "node_dashboard");
      sql = `select city from city_country where country= "${city}"`
      let [res11] = await data.queary(sql)
      console.log(res11);
      res.json(res11);

    }
  } catch (error) {
    res.send(error)
  }

}

exports.timezone_name = async (req, res) => {
  try {

    if (req.body.tag) {
      let city = req.body.tag;
      let data = new con("localhost", "root", "password", "node_dashboard");
      sql = `select timezone from timezone_country  where countryname ="${city}";`
      let [res11] = await data.queary(sql)
      console.log(res11);

      res.json(res11);
    }
  } catch (error) {
    res.send(error)
  }



}









