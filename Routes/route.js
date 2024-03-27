const express = require("express");
const route =  express.Router()


const {dashboard,kukucube,tictac,event,dynamictable} = require("../app/controlers/create");
const { delimiter_post, delimiter_get } = require("../app/controlers/delimiter");
const { filter } = require("../app/controlers/filter");
const { pagination } = require("../app/controlers/pagination");
const { combo, combo_post } = require("../app/controlers/cobobox");
const {timezone,contryname,cityname,timezone_name} = require("../app/controlers/timezone")


route.get('/dashboard',dashboard)
route.get('/kukucube',kukucube)
route.get('/tictac',tictac)
route.get('/event',event)
route.get('/dyanmictable',dynamictable)
route.get('/delimiter',delimiter_get)
route.post('/delimiter',delimiter_post)
route.get('/filter',filter)
route.get('/pagination',pagination)
route.get('/combo',combo)
route.post('/combo',combo_post)

route.get('/time',timezone)
route.post('/country',contryname)
route.post('/city',cityname);
route.post('/timezone',timezone_name);



module.exports = route;



 
