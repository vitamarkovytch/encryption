import { Response } from "express";

export const asyncHandler =
  (fn: any) =>
  (...args: any) => {
    const fnReturn = fn(...args);
    const next = args[args.length - 1];
    return Promise.resolve(fnReturn).catch(next);
  };

export const renderSuccess = (res: Response, obj: any) => {
  res.json({
    code: res.statusCode,
    message: "ok",
    data: obj,
  });
};
