const sendResponse = async (res, obj = {}, status = 200) => {
  if (!res.headersSent) return res.status(status).json(obj);
};

const sendResponseMessage = async (res, message, success = true, status = 200) => {
  if (!res.headersSent) return res.status(status).json({message,success});
};


export {
    sendResponse,
    sendResponseMessage
}