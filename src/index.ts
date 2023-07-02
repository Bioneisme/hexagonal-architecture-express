import "reflect-metadata";
import { Bootstrap } from "./bootstrap/base.bootstrap";
import ServerBootstrap from "./bootstrap/server.bootstrap";
import DatabaseBootstrap from "./bootstrap/database.bootstrap";
import Application from "./app";

const serverBootstrap: Bootstrap = new ServerBootstrap(Application);
const databaseBootstrap: Bootstrap = new DatabaseBootstrap();

async function bootstrap() {
  await databaseBootstrap.init();
  await serverBootstrap.init();
}

bootstrap().catch((e) => {
  console.log(e);
});
