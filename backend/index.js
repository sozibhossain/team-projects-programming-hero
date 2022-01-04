const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jewqg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;


// console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        // console.log('connected to databse');
        const databse               = client.db('learning_management_system');
        const coursesCollection     = databse.collection('courses');
        const blogsCollection       = databse.collection('blogs');
        const teachersCollection    = databse.collection('teachers');
        const galleriesCollection   = databse.collection('galleries');

        // GET Courses API
        app.get('/courses', async(req, res) => {
            const cursor        = coursesCollection.find({});
            const courses       = await cursor.toArray();
            res.send(courses);
        });

        // POST Courses API
        app.post('/courses', async(req, res) => {
            const courses       = req.body;
            const result        = await coursesCollection.insertOne(courses);
            console.log(`Courses Successfully inserted with the _id:${result.insertedId}`);
            res.json(result);
        })

        // FIND SINGLE Courses API
        app.get('/courses/:id', async(req, res) => {
            const id    = req.params.id;
            const query = {_id: id};
            const courses   =  await coursesCollection.findOne(query);
            res.json(courses);
        });

        // Courses UPDATE API
        app.put("/courses/:id", async (req, res) => {
            const filter = { _id: req.params.id };
            const result = await coursesCollection.updateOne(filter, {
            $set: {
                // price: req.body.status,
                name: req.body.name,
                image: req.body.image
            },
            });
            res.send(result);
            // console.log(result);
        });

        // Courses DELETE API
        app.delete('/courses/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id:id }
            const result = await coursesCollection.deleteOne(query);
            res.send(result);
        })
    } 
    finally{
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/',(req,res)=>{
    res.send('running redux lms team 138 server');
})

app.listen(port,()=>{
    console.log('Running running redux lms team 138 server on port',port);
})