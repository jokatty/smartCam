import express from 'express';

const app = express();
const port = 3000;

// set root route
app.get('/', (req, res) => {
  res.send('hi');
});

// start the server at port 3000
app.listen(port, () => {
  console.log(`app is running on port, ${port}`);
});
