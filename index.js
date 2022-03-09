const express = require("express")
require("module-alias/register");
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
})