import {Schema, model} from "mongoose"

const commentSchema = new Schema({
    idUser:{
        type: Schema.Types.ObjectId, 
        ref: 'Customer'
    },
    idArtistProfile:{
        type: Schema.Types.ObjectId, 
        ref: 'Artist'},
    comment:{
        type:String
    }
},
{
    timestamps:true,
}
)

export default model("Comment",commentSchema)