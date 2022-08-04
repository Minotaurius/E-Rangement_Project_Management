const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3333;

const app = express();

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)});