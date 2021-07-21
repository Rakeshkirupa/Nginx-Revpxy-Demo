// index.jsconst express = require('express');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, This is My nodeserver App 1!')
  })
app.listen(5000, () => console.log('Server2 is up and running'));
