import mongoose from "mongoose";

export const Connection = async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@e-commerce.etx15vb.mongodb.net/?retryWrites=true&w=majority`
    try {
       await mongoose.connect(URL,{useUnifiedTopology:true , useNewUrlParser:true})
    console.log("Database Connected")
    } catch (error) {
        console.log('Error while connecting with the datbase ',error.message)
    }
}

export default Connection;