import {Schema, model} from "mongoose"

const customerSchema = new Schema({
    name:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
},
{
    timestamps:true,
}
)

export default model("Customer",customerSchema)