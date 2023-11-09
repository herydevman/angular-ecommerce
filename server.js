const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()

app.use("/", express.static('angular-app/'));

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)})
