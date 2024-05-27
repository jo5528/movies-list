const express = require('express')
const app = express()
const port = 3000 
app.get('/' , (req, res) => {
 res.redirect('/movies')
})
app.get('/movies', (req, res) => {
res.send('movies-list')
})

app.get('/movie/:id', (req, res) => {
const id = req.params.id 
res.send(`read movie: ${id}`)
})

app.listen(port, () => {
 console.log(`3rd express server is running on http://localhost:${port}`)
})