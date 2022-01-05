const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5002;


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

        // =================  Course Start ==================== //
        
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
            //console.log(`Courses Successfully inserted with the _id:${result.insertedId}`);
            res.json(result);
        })

        // FIND SINGLE Courses API
        app.get('/courses/:id', async(req, res) => {
            const id    = req.params.id;
            const query = {_id: ObjectId(id)};
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

        // =================  Course End ==================== //
        // =================  Blog Start ==================== //
        // GET Blogs API
        app.get('/blogs', async(req, res) => {
            const cursor        = blogsCollection.find({});
            const blogs       = await cursor.toArray();
            res.send(blogs);
        });

        // POST Blogs API
        app.post('/blogs', async(req, res) => {
            const blogs       = req.body;
            const result        = await blogsCollection.insertOne(blogs);
            console.log(`Blogs Successfully inserted with the _id:${result.insertedId}`);
            res.json(result);
        })

        // FIND SINGLE Blogs API
        app.get('/blogs/:id', async(req, res) => {
            const id    = req.params.id;
            const query = {_id: ObjectId(id)};
            const blogs   =  await blogsCollection.findOne(query);
            res.json(blogs);
        });

        // Blogs UPDATE API
        app.put("/blogs/:id", async (req, res) => {
            const filter = { _id: req.params.id };
            const result = await blogsCollection.updateOne(filter, {
            $set: {
                // price: req.body.status,
                name: req.body.name,
                image: req.body.image
            },
            });
            res.send(result);
            // console.log(result);
        });

        // Blogs DELETE API
        app.delete('/blogs/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id:id }
            const result = await blogsCollection.deleteOne(query);
            res.send(result);
        })
        // =================  Blog End ==================== //

        // =================  Teachers Start ==================== //
        // GET Teachers API
        app.get('/teachers', async(req, res) => {
            // const options = { ordered: true };
            // const result = await teachersCollection.insertMany(docs, options);
            // console.log(`${result.insertedCount} documents were inserted`);

            const cursor        = teachersCollection.find({});
            const teachers       = await cursor.toArray();
            res.send(teachers);
        });

        // POST Teachers API
        app.post('/teachers', async(req, res) => {
            const teachers       = req.body;
            const result        = await teachersCollection.insertOne(teachers);
            console.log(`Teachers Successfully inserted with the _id:${result.insertedId}`);
            res.json(result);
             
        })

        // FIND SINGLE Teachers API
        app.get('/teachers/:id', async(req, res) => {
            const id    = req.params.id;
            const query = {_id: ObjectId(id)};
            const teachers   =  await teachersCollection.findOne(query);
            res.json(teachers);
        });

        // Teachers UPDATE API
        app.put("/teachers/:id", async (req, res) => {
            const filter = { _id: req.params.id };
            const result = await teachersCollection.updateOne(filter, {
            $set: {
                // price: req.body.status,
                name: req.body.name,
                image: req.body.image
            },
            });
            res.send(result);
            // console.log(result);
        });

        // Teachers DELETE API
        app.delete('/teachers/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id:id }
            const result = await teachersCollection.deleteOne(query);
            res.send(result);
        })
        // =================  Teachers End ==================== //

        // =================  Gallery Start ==================== //
        // GET Gallery API
        app.get('/gallery', async(req, res) => {
            const cursor        = galleriesCollection.find({});
            const gallery       = await cursor.toArray();
            res.send(gallery);
        });

        // POST Gallery API
        app.post('/gallery', async(req, res) => {
            const gallery       = req.body;
            const result        = await galleriesCollection.insertOne(gallery);
            console.log(`Gallery Successfully inserted with the _id:${result.insertedId}`);
            res.json(result);
        })

        // FIND SINGLE Gallery API
        app.get('/gallery/:id', async(req, res) => {
            const id    = req.params.id;
            const query = {_id: ObjectId(id)};
            const gallery   =  await galleriesCollection.findOne(query);
            res.json(gallery);
        });

        // Gallery UPDATE API
        app.put("/gallery/:id", async (req, res) => {
            const filter = { _id: req.params.id };
            const result = await galleriesCollection.updateOne(filter, {
            $set: {
                // price: req.body.status,
                name: req.body.name,
                image: req.body.image
            },
            });
            res.send(result);
            // console.log(result);
        });

        // Gallery DELETE API
        app.delete('/gallery/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id:id }
            const result = await galleriesCollection.deleteOne(query);
            res.send(result);
        })
        // =================  Gallery End ==================== //

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