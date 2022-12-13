import express from 'express';
import bodyParser from 'body-parser';
import { AppRouter } from './appRouter';
import cookieSession from 'cookie-session';

import './controllers/LoginController';
import './controllers/RootController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['ssadas'] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Server running...');
});
