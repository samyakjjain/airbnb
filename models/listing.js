const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:String,
        default:"https://media.istockphoto.com/id/1360554439/photo/maldives-tropical-island.jpg?s=1024x1024&w=is&k=20&c=WsFXHNdPXliwtrZN_GVlw24Woh2X02od8-ULZQiCfaE=",
        set:(v)=>v===""?"https://media.istockphoto.com/id/1360554439/photo/maldives-tropical-island.jpg?s=1024x1024&w=is&k=20&c=WsFXHNdPXliwtrZN_GVlw24Woh2X02od8-ULZQiCfaE=" : v,
    },
    price:Number,
    location:String,
    country:String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports=Listing