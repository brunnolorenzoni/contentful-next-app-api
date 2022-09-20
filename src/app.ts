import express, { Application } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet';
import routes from './routes'
import ErrorHandler from './middlewares/ErrorHandler';

class App {
  public app: Application;

  public constructor () {
    this.app = express()
    this.middlewares()
    this.routing()
  }
  
  private middlewares (): void {
    this.app.use(cors())
    this.app.use(morgan('tiny'))
    this.app.use(express.json())
    this.app.use(helmet());
    this.app.use(ErrorHandler)
  }


  private routing (): void {
    this.app.use(routes)
    this.app.get('/', (req, res) => res.redirect('/healths'));
    this.app.get('/healths', (req, res) => {
      res.status(200).send({
        server: 'UP'
      });
    });
    this.app.all('*', function(req, res){
      res.status(404).send('Not Found')
    });
  }
}

export default new App().app;