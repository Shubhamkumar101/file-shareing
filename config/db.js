import dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config()
function connectDB() {

    // mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    //     useNewUrlParser: true,
    //     useCreateIndex:true,useUnifiedTopology: true,
    //     useFindAndModify:true
    // });
    // const connection=mongoose.connection;
    
    // connection.once('open', () =>{
        //     console.log('Database connected.');
        
        // })
        // mongoose.catch(err =>{
        //     console.log('connection failed.');
    // })


    mongoose.connect(process.env.MONGO_CONNECTION_URL).then(() => {
        console.log('Database connected.');
    }).catch(err => {
        console.log('connection failed.',err);
    })
    
}

export default connectDB;