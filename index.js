import express from 'express';

const app = express();
const port = 3000;

// set view engine
app.set('view engine', 'ejs');
// set root route
app.get('/', (req, res) => {
  res.render('index');
});

// start the server at port 3000
app.listen(port, () => {
  console.log(`app is running on port, ${port}`);
});
