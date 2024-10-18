import { sendResponse } from "../../utils/helpers.js";
// import { createUser } from "./authService.js";
const info = async (req, res, next) => {
  res.send("SALAM this info API for Auth");
};

const create = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const data = { name, email, password };
    // const user = await createUser(data);
    // console.log("user", user);
    sendResponse(
      res,
      {
        success: true,
        data,
      },
      201
    );
  } catch (error) {
    next(error);
  }
};

export { info, create };
