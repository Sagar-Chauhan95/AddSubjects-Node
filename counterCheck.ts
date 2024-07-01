import { RequestHandler } from "express";
import { usersRouter } from "./user/router.user";

let counter = 0;
export const checkCounter: RequestHandler<unknown, unknown, unknown, unknown> = (req, res, next) => {

    counter++;
    console.log(counter);
    next();

};