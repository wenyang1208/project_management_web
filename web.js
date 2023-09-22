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
    const { name, assignee, storyPoint, taskPriority, stage, status, description, taskTag, category} = request.body
    const db = dbService.getServiceInstance();
    const result = db.insertNewData(name, assignee, storyPoint, taskPriority, stage, status, description, taskTag, category);

    result
    .then(data => response.json({ data: data}))
    .catch(err => console.log(err))
});

// read all
app.get('/getAll', (request, response) => {
    const db = dbService.getServiceInstance();
    // test when making API call, reach backend\
    const result = db.getAllData();
    result
    .then(data => response.json({data: data}))
    .catch(err => console.log(err))
})

// read by id
app.get('/getById/:id', (request, response) => {
    const { id } = request.params;
    const db = dbService.getServiceInstance();
    // delete by id
    const result = db.getDataById(id);
    result
    .then(data => response.json({data: data}))
    .catch(err => console.log(err))
})

// update
app.patch('/update', (request, response) => {
    const { id, name } = request.body;
    const db = dbService.getDbServiceInstance();

    const result = db.updateNameById(id, name);
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});

// delete
app.delete('/delete/:id', (request, response) => {
    const { id } = request.params;
    const db = dbService.getServiceInstance();
    // delete by id
    const result = db.deleteData(id);
    result
    .then(data => response.json({success: data}))
    .catch(err => console.log(err))
})

app.listen(process.env.PORT, () => console.log(`app is running on port ${process.env.PORT}`))

// export default app