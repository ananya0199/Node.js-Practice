import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { router } from './routes/auth';
const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json())

app.get('/hi', (req: Request, res: Response) => {

  res.send('Express + TypeScript Server');

});

(async () => {
  const sequelize = (await import('./db/seqCon')).sequelize;
  (await import('./db/db')).myDatabase.connectToDatabase(sequelize);
})();

app.use(router)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

