const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Logs the error stack for debugging

  const statusCode = err.statusCode || 500; // Default status code 500 if not set
  const message = err.message || "Internal Server Error"; // Default message

  res.status(statusCode).json({
    success: false,
    message: message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

export default errorHandler;
