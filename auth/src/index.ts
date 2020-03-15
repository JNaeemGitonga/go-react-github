import express from 'express';
import { config } from 'dotenv';
config();
const port  = process.env.PORT || 9903;
const app = express();

app.get('/', (_, res) => {
  res.json('i work')
})


app.listen(port, () => {
  console.log(__dirname)
  console.log()
  console.log('May the force be with you on server port ' + port);
});