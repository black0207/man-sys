/**
 * Created by website on 2017/12/29.
 */
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/",function(req,res) {
    res.redirect("/login");
   // res.render('index', { title: 'index',name:'首页' });
});

router.get("/login",function(req,res) {
    res.render('login', { title: 'login',name:'首页' });
});
module.exports = router;