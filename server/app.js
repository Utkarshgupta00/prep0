const dotenv = require('dotenv');

const express = require('express');
const app = express();

dotenv.config({ path:'./config.env' });
require('./db/conn');
// require('./db/ronn');

// const User = require('./model/userSchema');

app.use(express.json());
//we link router file here
app.use(require('./router/auth'));
// app.use(require('./router/resu'));


const PORT = process.env.PORT;

app.listen(PORT, () =>{
    console.log(`server is running at port ${PORT}`);
})

