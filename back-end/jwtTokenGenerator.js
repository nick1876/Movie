const jwt=require('jsonwebtoken');

//data is payload
const generateAuthToken=function(data){  //Here data == userDbInfo
     data=JSON.stringify(data);//This is compulsary
     const token=jwt.sign(data,"HELLO") //Hello basically defines unique key
     return token;
}

module.exports=generateAuthToken;