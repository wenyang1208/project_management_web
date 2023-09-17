const mysql = require('mysql');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();

// create a connection to a MySQL database
const connection = mysql.createConnection({
    // environment variables
    user: process.env.USER_NAME,
    password: process.env.USER_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    // console.log('db ' + connection.state);
});


class database{
    static getServiceInstance(){
        return instance ? instance : new database();
    }
    async getAllData(){
        try{
            const response = await new Promise((resolve,reject) =>
            {   
                // "SELECT" query, other applicable queries: "INSERT","UPDATE","DELETE"
                const query = "SELECT * FROM task_details;";

                // send SQL queries to the MySQL database associated with your connection and get results 
                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            return response;
        }catch(error){
            console.log(error);
        }
    }

    async insertNewData(name, assignee, storyPoint, taskPriority, stage, status, description, taskTag){
        try{
            const response = await new Promise((resolve,reject) =>
            {   
                const tags = taskTag.join(',');
                // "INSERT INTO" query, other applicable queries: "SELECT","UPDATE","DELETE"
                const query = "INSERT INTO task_details (taskName, assignees, storyPoints, taskPriority, stages, status, taskDescription, tags) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
                // send SQL queries to the MySQL database associated with your connection and get results 
                connection.query(query, [name, assignee, storyPoint, taskPriority, stage, status, description,tags], (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            return response;
        }catch(error){
            console.log(error);
        }
    }
}

module.exports = database;