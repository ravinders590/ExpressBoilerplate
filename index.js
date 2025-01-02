const express = require('express')
const mongoose = require('mongoose');

const app = express();
const port = 3002;


mongoose.connect("mongodb+srv://ravinder451994:my2q7yYUh21u1VNP@cluster0.kxeph.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", 
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log( 'Database Connected' ))
  
  
// const userData = require('./modal/userModal');



//start Ejs
app.set('view engine','ejs');

//public path
app.use(express.static('./public'));

// async function insert(){
//   await userData.create({
//     name:"ravinders",
//     phone:98911829929,
//     age:30
//   })
// }
// insert();
app.get('/', (req, res) => {
  
  res.render('index');  
})

app.get('*', (req, res) => {
  throw Error("The page you were looking for could not be found!!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('404', { error: err })
}
);
