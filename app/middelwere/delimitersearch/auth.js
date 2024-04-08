
exports.midtoken = async (req, res,next) => {

    try {
        if(!req.cookies.token)
        {
        
            return res.redirect("login")
        } 
        console.log(req.cookies);
        next();
    } catch (error) {
        console.log(error.message);
    }
  

    
}

