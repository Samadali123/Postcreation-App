const mongoose = require(`mongoose`);


// mongoose.connect("mongodb://127.0.0.1:27017/postcreation");

mongoose.connect("mongodb+srv://samadali0125:Samad%40123@cluster0.50e5iin.mongodb.net/PostApp?retryWrites=true&w=majority&appName=Cluster0").then(function() {
    console.log("Db connected Successfully.")

}).catch(function(error) {
    console.log("There was an Error while connectong to a database.")
})


const userSchema = mongoose.Schema({




    email: String,
    password: String
})


const postSchema = mongoose.Schema({
    image: String,
    caption: String
})




const users = mongoose.model("users", userSchema)
const posts = mongoose.model("posts", postSchema)


module.exports = [users, posts];