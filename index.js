const express = require('express')
const app = express()
    //end point - root(/)
app.get('/name/:n', (req, res) => {
    res.send('Welcom!' + req.params.n)
}),
//display name
app.get('/name/:fn/:ln', (req, res) => {
    res.send('Welcom!' +req.params.fn+'' +req.params.ln)
}),
//Airthmatic eqaution
app.get('/Add/:fn/:sn', (req, res) => {
    res.send('Add' + (parseInt(req.params.fn)+ parseInt(req.params.sn)))
})
app.get('/Sub/:fn/:sn', (req, res) => {
    res.send('Sub' + (parseInt(req.params.fn)- parseInt(req.params.sn)))
})
app.get('/Multi/:fn/:sn', (req, res) => {
    res.send('Multi' + (parseInt(req.params.fn)* parseInt(req.params.sn)))
})
app.get('/Div/:fn/:sn', (req, res) => {
    res.send('Div' + (parseInt(req.params.fn)/ parseInt(req.params.sn)))
})
app.delete('/name', (req, res) => {
    res.send('Keval')
})

app.listen(4000, () => {
        console.log('Server started at http://localhost:4000');
    })
    //arzoo