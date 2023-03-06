const express = require('express');
const members = require('./members');
const getUsers = require('./users');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('This is the home page');
});
app.get('/about', (req, res) => {
    const date = new Date().toISOString();
    res.json({
        status: 'success',
        message: 'response success',
        description: 'Exercise #03',
        date: date,
        data: members
    })
});
app.get('/users', async (req, res) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(await getUsers()));
  });
// app.get("/post/:id", (req, res) => {
//     let id = req.params.id;
//     res.json({
//         id,
//     });
// });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})