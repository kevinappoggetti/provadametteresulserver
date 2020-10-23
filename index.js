const express = require('express');
const cors=require('cors');
const mysql=require('mysql');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port,()=>{
  console.log(`Server is running on Port ${port}`);
})
