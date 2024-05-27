const express = require('express')
const app = express()
const port = 3000 
app.get('/' , (req, res)=>{
res.send('express app for movies')
})
app.listen(port, () => {
 console.log(`2nd express server is running on http://localhost:${port}`)
})