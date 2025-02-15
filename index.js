const express=require('express');

const app=express();


app.get('/',(req,res)=>{
    try{
        res.send("hello this is the home page");
    }
    catch(error)
    {
        console.log(error);
        console.log("hello i am test (button)")
        res.send("you got an error");
    }
})




app.listen(3000,()=>{
    console.log("server is running");
})
