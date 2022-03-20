const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/api', (req, res) => {
    res.send('Hello from server!');
});

app.listen(process.env.PORT, () => {
    console.log(`server listening at: http:/localhost:${process.env.PORT}`);
})

