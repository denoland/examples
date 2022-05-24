// import { express } from "https://esm.sh/express@4.18.1";
import express from 'https://cdn.skypack.dev/express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.listen(8000);
