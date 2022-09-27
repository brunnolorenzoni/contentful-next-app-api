import express, { Application } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet';
import routes from './routes'
import errorHandler from './middlewares/ErrorHandler';

class App {
  public app: Application;

  public constructor () {
    this.app = express()
    this.middlewares()
    this.routing()
    this.onError()
  }
  
  private middlewares (): void {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ limit: '5mb', extended: true }))
    this.app.use(cors())
    this.app.use(morgan('dev'))
    this.app.use(helmet());
  }


  private routing (): void {
    this.app.use(routes)
    this.app.get('/', (req, res) => res.redirect('/healths'));
    this.app.get('/healths', (req, res) => {
      res.status(200).send({
        server: 'UP'
      });
    });
  }

  private onError () : void {
    this.app.all('*', function(req, res){
      res.status(404).send('Not Found')
    });
    this.app.use(errorHandler)
  }
}

export default new App().app;