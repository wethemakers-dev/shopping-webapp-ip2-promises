const mongoose = require('mongoose');
//const Schema = mongoose.schema();

const userSchema = new mongoose.Schema({
    userName:{
       type:String,
       require:true
    },
    userEmail:{
        type:String,
        require:true
    },
    userPassword : {
        type:String,
        require:true
    }
});

const shoppingSchema =new  mongoose.Schema({
    title : {
        type : String,
        require
    },
    price : { 
        type : Number,
        require
    }
    ,
    catgegory : {
        type : String,
        require
    },
    user_id : String

})
const shopping=  mongoose.model("shopping", shoppingSchema);
const User=  mongoose.model("User", userSchema);

module.exports.Shopping = {
    Shopping : shopping,
    User : User
}

module.exports.User = mongoose.model('User',userSchema);
module.exports.Shopping = mongoose.model('Shopping',shoppingSchema);
