const express = require('express');

const app = express();
app.listen(3000);
app.use(express.static('public'));

const response = (req,res) =>{
  res.send();
}

app.get('/', response);
