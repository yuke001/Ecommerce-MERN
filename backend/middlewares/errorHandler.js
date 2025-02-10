export const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Something went wrong!! Please try again later";
  
    if (process.env.NODE_ENV === "development") {
      return res.status(statusCode).json({
        status: "Failure",
        message,
        stack: err.stack,
        error: err,
      });
    }
  
    if (process.env.NODE_ENV === "production") {
      let error = { ...err };
  
      if (err.name === "ValidationError") {
        message = Object.values(err.errors).map((value) => value.message).join(", ");
        error = new Error(message);
      }
  
      if (err.name === "CastError") {
        message = `Resource not found with id ${err.value}`;
        error = new Error(message);
      }
  
      return res.status(statusCode).json({
        status: "Failure",
        message,
      });
    }
  };
  