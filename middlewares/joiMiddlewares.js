import { userJoiValidate, PostJoiValidate } from "../utils/JoiSchemas.js";

const validateUser = (req, res, next) => {
  const { error } = userJoiValidate.validate(req.body);
  if (error) {
    next(error);
  }
};

const validatePost = (req, res, next) => {
  const { error } = PostJoiValidate.validate(req.body);
  if (error) {
    next(error);
  }
};
export { validateUser, validatePost };
