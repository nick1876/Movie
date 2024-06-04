const express=require('express');
const app=express();
const mongoose=require('mongoose');
const seedDB=require('./seed');
const cors=require('cors');
const moviesRoutes=require('./apis/moviesRoutes');
const authRoutes=require('./apis/authRoutes');

//DB Connected
mongoose.connect('mongodb://127.0.0.1:27017/Quote')
.then(()=>{console.log("DB Connected")})
.catch((err)=>{console.log(err)});

app.use(express.urlencoded({extended:true}));
app.use(cors({origin:['http://localhost:5173']}));
app.use(express.json()); //It is a Body Parser

app.use(moviesRoutes);
app.use(authRoutes);


// seedDB();

const port=8080;
app.listen(port,()=>{
    console.log(`Server Connected at ${port}`);
})