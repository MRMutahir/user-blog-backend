import { sendResponse } from "../../utils/helpers.js";

const info = async (req, res, next) => {
  res.send("SALAM this info API for Auth");
};

const create = async (req, res, next) => {
  sendResponse(
    res,
    {
      success: true,
      data: "user create API",
    },
    201
  );
};

export { info, create };
