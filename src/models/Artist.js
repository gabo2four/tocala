import {Schema, model} from "mongoose"

const artistSchema = new Schema({
    type:{
        type:String
    },
    name:{
        type:String
    },
    description:{
        type:String
    },
    number:{
        type:String
    },
    departament:{
        type:String
    },
    province:{
        type:String
    },
    district:{
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

export default model("Artist",artistSchema)