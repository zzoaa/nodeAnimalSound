// Importing express module
const express = require('express')
const cors = require('cors');


// Creating an instance of express
const app = express()

app.use(cors());

// Handling GET request on root URL
app.get('/', function (req, res) {
  res.send('Hello World')
})

// Handling GET request on '/sound/:name' URL
app.get('/sound/:name',(req, res) => {
    

  const { name } = req.params
    console.log( name )
    if ( name === 'dog'){
      res.json({ 'sound': '멍멍','img' : 'https://www.zoo-s.com/admincenter/files/upload/vhxCRyfnqbcftzK.gif'})
    }
    else if ( name ==='cat'){
        res.json({ 'sound': '야옹' })
    }

    
})

// Starting server on port 3000
app.listen(3000)

