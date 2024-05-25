const mongoose = require(`mongoose`);
mongoose.connect("mongodb://127.0.0.1:27017/postcreation");



const userSchema = mongoose.Schema({
  email:String,
  password :String
})


const postSchema = mongoose.Schema({
  image: String,
  caption:String
})




const  users = mongoose.model("users", userSchema)
const posts = mongoose.model("posts", postSchema)


module.exports = [users, posts];





