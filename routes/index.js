var express = require('express');
var router = express.Router();
const [users, posts] = require(`./users`);




/* GET home page. */
router.get('/', function(req, res, next) {
    try {
        res.render('index');
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
});


router.get(`/loginuser`, function(req, res, next) {
    try {
        res.render(`login`)
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
})


router.post(`/register`, async function(req, res, next) {

    try {
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
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }

})


router.post("/login", async(req, res) => {
    try {
        const { email, password } = req.body;

        const User = await users.findOne({ email: email });

        if (User && User.password === password) {
            res.redirect("/profile")
        } else {
            res.status(401).json({ success: false, message: "Email or Password is Incorrect" })

        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
})
router.get(`/profile`, async function(req, res, next) {
    try {
        let allposts = await posts.find()
        res.render(`profile`, { allposts });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
})


router.get(`/createpost`, function(req, res, next) {
    try {
        res.render(`posts`)
    } catch (error) {
        res.status(500).json({ success: false, message: "internal Server Error" })
    }

})



router.post(`/newpost`, async function(req, res, next) {
    try {
        let newpost = await posts.create({
            image: req.body.image,
            caption: req.body.caption,
        })

        // res.send("created ");
        res.redirect(`/profile`);
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error." })
    }
})



module.exports = router;