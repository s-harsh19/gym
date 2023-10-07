const mongoose=require('mongoose');
// connect data base

mongoose.connect("mongodb+srv://harshsinha:admin@cluster0.59s6rjw.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
}).then(()=>{
    console.log("connenction succesfully");
}).catch((e)=>{
    console.log(e);
})