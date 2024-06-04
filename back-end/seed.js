const mongoose=require('mongoose');
const Movies = require('./models/Movie');

let dummyMovies=[
    {
        author:"Vedansh Gautam",
        text:"Good Boy",
        name:"hello"
    },
    {
        author:"Nikhil Agrawal",
        text:"Bad Boy",
        name:"hello"
    },
    {
        author:"Naman",
        text:"Hello vedu",
        name:"hello"
    },
    {
        author:"Sharma",
        text:"Dhasu Personality",
        name:"hello"
    }
]

async function seedDB(){
    await Movies.deleteMany({}); // If data is seeded more than one time than it deletes first and than add the data
    await Movies.insertMany(dummyMovies);
    console.log("Data Seeded Successfully");
}

module.exports=seedDB;