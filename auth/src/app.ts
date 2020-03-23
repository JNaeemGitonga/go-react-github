import express from 'express';
import { config } from 'dotenv';
config();
const port  = process.env.PORT || 9903;
const app = express();
import loginRoute from './routes/login/login';
import signupRoute from './routes/signup/signup';

app.use('/api/auth/login', loginRoute);

app.use('/api/auth/signup', signupRoute)

app.listen(port, (): void => {
  console.log('This is your working dir: ', __dirname)
  console.log()
  console.log('Grind hard on server port ' + port);
});