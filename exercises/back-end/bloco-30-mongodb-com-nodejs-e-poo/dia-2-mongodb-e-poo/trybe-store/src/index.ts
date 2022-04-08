import RecordStoreController from './controllers/RecordStore';
  import Frame from './Interfaces/Frame';
  import App from './server';

  const server = new App();


  const RecordRoute = new RecordStoreController();



  server.get(router);
  server.addRouter(frameRouter.router);

  server.startServer();