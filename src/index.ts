import { AppDataSource } from "./data-source";
import * as express from "express";

const app = express();
const port = process.env.PORT || 4500;

AppDataSource.initialize()
  .then(async () => {
    app.use(express.json());

    app.get("/", (req: express.Request, res: express.Response) => {
      res.send("welcome to my api ");
    });

    app.get("*", (req: express.Request, res: express.Response) => {
      res.status(404).json({ code: 404, message: "url api not found" });
    });

    app.listen(port, () => {
      console.log(`server running on PORT : ${port}`);
    });
  })
  .catch((error) => console.log(error));
