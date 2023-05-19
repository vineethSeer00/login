const mongoose=require('mongoose')


const CONNECTDB=async()=>{
    try {
        mongoose.connect("mongodb://localhost:27017/userAuth",{
            useNewUrlParser:true
        }).then((res)=>console.log("mongodb connected successfully"))
        
    }catch(err){
        console.log(err);
    }
}

module.exports=CONNECTDB