
const express = require('express');
const cores = require('cors');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(cores());
app.use(bodyParser.json());

app.listen(3333,()=>{
    console.log('Server is running on port 3333');
});
