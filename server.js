
const express = require('express');
const cors = require('cors')
const router = require('./Routes');
require('dotenv').config();

const app = express()


app.use(cors({
  origin: '*',
  methods: ['POST', 'GET'],
  credentials: true
}));


const PORT = process.env.PORT || 3000; 
const HOST = process.env.HOST


app.use(express.json())

  

app.use('/', router)


app.listen(PORT, HOST, () => {
    console.log(`server is running on http://${HOST}:${PORT}`)
})
