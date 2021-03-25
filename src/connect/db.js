const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost:27017/playersdb",{
    useNewUrlParser:true,
    useUnifiedTopology: true
})