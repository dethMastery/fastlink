import liveServer from "live-server";
import path from "path";
import type { NextFunction, Request, Response } from "express";
import "dotenv/config";

const PORT = Number(process.env.PORT) || 3000;

const options = {
  port: PORT,
  root: path.join(__dirname, "./static"),
  open: false,
  // middleware: [
  //   function (req: Request, res: Response, next: NextFunction) {
  //     next();
  //   },
  // ],
};

liveServer.start(options);
