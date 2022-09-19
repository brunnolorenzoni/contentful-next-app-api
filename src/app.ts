import express, { Application } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet';
import ErrorHandler from './middleware/ErrorHandler';

class App {
  public app: Application;

  public constructor () {
    this.app = express()
    this.middlewares()
    this.routing()
    this.onError()
  }

  private middlewares (): void {
    this.app.use(cors())
    this.app.use(morgan('tiny'))
    this.app.use(express.json())
    this.app.use(helmet());
  }


  private routing (): void {
    this.app.get('/', (req, res) => res.redirect('/healths'));
    this.app.route('/healths').get((req, res) => {
      res.status(200).send({
        server: 'UP'
      });
    });
    this.app.all('*', function(req, res){
      res.status(404).send('Not Found')
    });
  }

  private onError(): void {
    this.app.use(ErrorHandler)
  }

}

export default new App().app;