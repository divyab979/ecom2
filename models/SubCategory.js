import mongoose from 'mongoose'

let SubCategory ;

try{
    SubCategory = mongoose.model('SubCategory')

} catch(error){


const subcategorySchema = new mongoose.Schema ({
    category : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true,
    },
    name : {
        type:String,
        required:true,
    },
    image: {
        type:String,
        required:true,
    },

});
SubCategory =mongoose.model('SubCategory', subcategorySchema);
}
module.exports= SubCategory;
