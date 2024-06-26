import mongoose, { ConnectOptions } from "mongoose";
import { DB_URL, PORT } from "./env";
import { app } from "./app";
import http from "http";

const httpServer = http.createServer(app);

const clientOptions: ConnectOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

const bootstrap = async () => {
  try {
    await mongoose.connect(DB_URL, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    httpServer.listen(PORT, () => {
      console.log(`[server]: listening at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(`Failed to connect to database, ${err}`);
  }
};

bootstrap();
