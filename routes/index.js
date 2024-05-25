var express = require('express');
var router = express.Router();
const [users, posts] = require(`./users`);
const { route } = require('../app');



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});


router.get(`/loginuser`, function(req, res, next) {
    res.render(`login`)
})


router.post(`/register`, async function(req, res, next) {

    const User = await users.findOne({ email: req.body.email })

    if (User) {
        return res.status(401).json({ success: false, message: "User already Registered " })

    } else {
        let createduser = await users.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })

        res.redirect(`/profile`);
    }



})

router.get(`/profile`, async function(req, res, next) {
    let allposts = await posts.find()
    res.render(`profile`, { allposts });
})


router.get(`/createpost`, function(req, res, next) {
    res.render(`posts`)
})



router.post(`/newpost`, async function(req, res, next) {
    let newpost = await posts.create({
        image: req.body.image,
        caption: req.body.caption,
    })

    // res.send("created ");
    res.redirect(`/profile`);
})



module.exports = router;