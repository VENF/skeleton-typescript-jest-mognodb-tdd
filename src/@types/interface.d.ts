//declaration all interfaces

interface IServer {
  settings(): void;
  middlewares(): void;
  routes(): void;
  listen(): void;
  testing(): any; //Application;
}
interface ISetupTest {
  server: IServer;
  app: any; //Application;
  database(databaseName: string): void;
  removeAllCollections(): void;
  dropAllCollections(): void;
  inicialize(dbName: string): void;
}

interface ISettignsData {
  uri: string;
  options: any; //ConnectionOptions in mongoose;
}
