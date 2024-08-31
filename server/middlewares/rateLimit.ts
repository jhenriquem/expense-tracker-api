import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 30,
  message: 'Too many requests from this IP, please try again after 1 minute',
  headers: true,
})

export default limiter

