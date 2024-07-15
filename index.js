const express = require('express')
const app = express()
    //end point - root(/)
app.get('/', (req, res) => {
    res.send('Hello There !!!!')
})

app.listen(4000, () => {
    console.log('Server started at http://localhost:4000');
})