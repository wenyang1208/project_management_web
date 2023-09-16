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

});

// read
app.get('/getAll', (request, response) => {
    // test when making API call, reach backend
    response.json({
        success: true
    });
})

// update

// delete
app.listen(process.env.PORT, () => console.log('app is running'))

// export default app