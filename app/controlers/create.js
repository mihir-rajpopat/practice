//USED FOR THE render dashboard file
exports.dashboard = async (req, res) => {

  res.render("dashboard/dashboard");
}

//export kuku cube  for render the kuku cube
exports.kukucube = async (req, res) => {

  res.render("kukucube");
}

exports.tictac = async (req, res) => {

  res.render("tictac");
}




exports.event = async (req, res) => {

  res.render("event");
}


exports.dynamictable = async (req, res) => {

  res.render("dynamictable");
}
