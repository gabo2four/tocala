import mongoose from "mongoose";

mongoose.Promise = global.Promise;


const connect = async (url) =>{
    try{
        mongoose.connect(url,{
            useNewUrlParser:true,
        })
        console.log("[db] connect");
    }catch(err){
        console.log(err);
    }
    
}

export default connect;