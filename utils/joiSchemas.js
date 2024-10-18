import Joi from "joi";

const userJoiValidate = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const PostJoiValidate = Joi.object({
  title: Joi.string().min(100).required(),
  description: Joi.string().min(500).required(),
  usersID: Joi.string().hex().length(24).required(),
});

export { userJoiValidate, PostJoiValidate };
