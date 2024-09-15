import mongoose from "mongoose";


const Connection = () => {
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "PORTFOLIO"
    }).then( () => {
        console.log("Connected to Database... ");
        
    }).catch( (error) => {
        console.log(`Error connecting to Database ${error}`);
        
    })
}


export default Connection