const express = require("express");
const route = express.Router()


const { kukucube, tictac, event, dynamictable, dashboard } = require("../app/controlers/create");
const { delimiter_post, delimiter_get } = require("../app/controlers/delimiter");
const { filter } = require("../app/controlers/filter");
const { pagination, sort, sort_post } = require("../app/controlers/pagination");
const { combo, combo_post } = require("../app/controlers/cobobox");
const { timezone, contryname, cityname, timezone_name } = require("../app/controlers/timezone")
const { form, insert, update_form, update, listing } = require("../app/controlers/crud")
const { hello, insertdata, listingdata, updatedata, update_data, render_form } = require("../app/controlers/crudajax");
const { midtoken } = require("../app/middelwere/delimitersearch/auth");
const { registration, verify, mail, insert_database, active, activeuser, validateuser, login, home, verify_user_byemail, forgot_password, set_password } = require("../app/controlers/register");


route.get('/', midtoken, dashboard)
route.get('/kukucube', midtoken, kukucube)
route.get('/tictac', midtoken, tictac)
route.get('/event', midtoken, event)
route.get('/dyanmictable', midtoken, dynamictable)
route.get('/delimiter', midtoken, delimiter_get)
route.post('/delimiter', midtoken, delimiter_post)
route.get('/filter', midtoken, filter)
route.get('/sort', midtoken, sort)
route.post('/sort', midtoken, sort_post)
//genrate componenet
route.get('/combo', midtoken, combo)
route.post('/combo', midtoken, combo_post)
//timezone convertor
route.get('/time', midtoken, timezone)
route.post('/country', midtoken, contryname)
route.post('/city', midtoken, cityname);
route.post('/timezone', midtoken, timezone_name);
//crud
route.get('/insert', midtoken, form)
route.get('/list', midtoken, listing)
route.post('/insert', midtoken, insert);
route.get('/update', midtoken, update_form);
route.post('/update', midtoken, update);
//for the crud ajax
route.get('/insertdata', midtoken, render_form)
route.post("/insertdata", midtoken, insertdata);
route.get('/listdata', midtoken, listingdata)
route.get('/updatedata', midtoken, updatedata)
route.get('/update_data', midtoken, update_data)
//login and authentication procees
route.get('/registration', registration)
route.post('/verify', verify)
route.post('/email', mail)
route.post('/insertdata1', insert_database)
route.get('/active', active)
route.get('/activeuser', activeuser)
route.post('/validateuser', validateuser)
route.get('/login', login)
route.post('/validate_email', verify_user_byemail)
route.get('/forgot_password', forgot_password)
route.post('/set_password', set_password)














module.exports = route;




