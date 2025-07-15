import app from "./server.js"
import mongodb from "mongodb"
import reviewsDAO from "./dao/reviewsDAO.js";


const MongoClient=mongodb.MongoClient
const mongo_username=process.env['MONGO_USERNAME']
const mongo_password=process.env['MONGO_PASSWORD']
const uri = "mongodb://127.0.0.1:27017/movieDB";

const port=process.env.PORT || 8000;

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    }
)


.catch(err=>{
    console.error(err.stack)
    process.exit(1)
})

.then(async client=>{
    await reviewsDAO.injectDB(client)
    app.listen(port,()=>{
        console.log(`listening on the port ${port}`);
    })
})