const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
// const view_routes = require('connection/connection.js')

app.use(express.json());

app.get('/', (req, res) => {
    res.send ("Works")
})
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)});