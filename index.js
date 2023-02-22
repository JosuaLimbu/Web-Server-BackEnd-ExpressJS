const express = require('express');
const members = require('./members');
const getUsers = require('./users');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('This is the home page');
});
app.get('/about', (req, res) => {
    res.json({
        status: 'success',
        message: 'response success',
        description: 'Exercise #03',
        date: `${new Date().toISOString()}`,
        data: members
    })
});
app.get('/users', async (req, res) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(await getUsers()));
  });
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})