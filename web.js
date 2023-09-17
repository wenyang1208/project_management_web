const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const { request } = require('http');
dotenv.config();

const dbService = require('./database');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}))

// create
app.post('/insert', (request,response) => {
    console.log(request.body);
    const { name, assignee, storyPoint, taskPriority, stage, status, description, taskTag} = request.body
    const db = dbService.getServiceInstance();
    const result = db.insertNewData(name, assignee, storyPoint, taskPriority, stage, status, description, taskTag);

    result
    .then(data => response.json({ success: true}))
    .catch(err => console.log(err))
});

// read
app.get('/getAll', (request, response) => {
    const db = dbService.getServiceInstance();
    // test when making API call, reach backend\
    const result = db.getAllData();
    result
    .then(data => response.json({data: data}))
    .catch(err => console.log(err))
})

// update

// delete
app.listen(process.env.PORT, () => console.log('app is running'))

// export default app