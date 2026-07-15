const express = require("express");
const {getUserById} = require("./services/users");
const port = 3000;

const app = express();

app.use(express.json());



app.get("/users/:id",getUserById);


module.exports = {
    app
};


app.listen(port,()=>{
    console.log('server started in '+port);
})