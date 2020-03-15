import express from 'express';
import { config } from 'dotenv';
config();
const port  = process.env.PORT || 9903;
const app = express();

app.get('/', (_, res): void => {
  res.json('i work')
})

app.listen(port, (): void => {
  console.log('This is your working dir: ', __dirname)
  console.log()
  console.log('Grind hard on server port ' + port);
});