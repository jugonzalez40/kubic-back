
import { createExpressServer } from "routing-controllers";
import RouterControllers from './routerControllers';

import * as morgan from 'morgan';

//app.use(morgan('combined'))

export default class KubicServer {
  private app: any;
  private server: any;

  constructor() {
    this.app = createExpressServer({
      routePrefix: "/api",
      controllers: RouterControllers
    });
    this.setMiddlewares();
  }

  setMiddlewares() {
    this.app.use(morgan('dev'));
  }

  public start(): void {
    this.server = this.app.listen(process.env.KS_SERVER_PORT, this.onStart);
  }

  onStart() {
    console.log('Listening')
  }

  stop() {
    if (this.server)
      this.server.close()
    else
      console.log('No se pudo detener el servidor ya que está detenido')
  }

  restart() {

  }


}
