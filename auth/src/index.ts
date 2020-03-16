import express from 'express';
import { config } from 'dotenv';
config();
const port  = process.env.PORT || 9903;
const app = express();

app.post('/api/auth/login', (_req, res): void => {
  res.json('I got this')
});

app.post('/api/auth/signup', (_req, res): void => {
  res.json('I got signed up')
})

app.listen(port, (): void => {
  console.log('This is your working dir: ', __dirname)
  console.log()
  console.log('Grind hard on server port ' + port);
});