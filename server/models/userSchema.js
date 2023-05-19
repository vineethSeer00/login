const mongoose=require("mongoose")
const bcrypt = require("bcrypt");

const userAuthSchema=new mongoose.Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
        
    },
    password:{
        type:String,
        
    }

})


userAuthSchema.pre("save",async function (next){
    if(!this.isModified("password")){
        next()
    }
    const salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
})

userAuthSchema.methods.matchPassword=async function (enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

module.exports=mongoose.model("userAuths",userAuthSchema)