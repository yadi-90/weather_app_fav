const express = require('express');
const cors = require('cors');
const { restart } = require('nodemon');



const app = express();
app.use(cors());
app.use(express.json());

const PORT= process.env.PORT || 8000;




app.get('/',(req,res) => {
    res.json({message:'Hello from my server'})
});


app.listen(PORT,() =>{
    console.log(`Server listening on ${PORT}`);
});