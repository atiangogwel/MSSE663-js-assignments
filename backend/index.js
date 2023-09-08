const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

//routes here
//app.use('/api/pizzas', require('./routes/pizzas'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
