import mongoose from "mongoose";


const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI || '', {
        dbName: 'xerocodee'
    }).then(() => {
        console.log("db connected")
    }).catch((e) => {
        console.log("cannot connect to database, error :  ", e);
    })
}

export default connectDB;


