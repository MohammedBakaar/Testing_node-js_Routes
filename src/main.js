import express from "express";
import { PORT } from "./config/configservece.js";
import { connect } from "./db/connection.js";
import { userRouter , postRouter , commentRouter } from "./modules/index.js";
import globalErrorHandler from "./common/globalErrorHandler.js";

const app = express();

await connect();

app.use(express.json());

app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
