import { Hono } from "hono";
import { userRoute } from "../Routes/userRoutes";
import { blogRoute } from "../Routes/blogRoute";

const app = new Hono()


// app.use(createMiddleware(async (c, next) => {
//   // c.req = prisma;
//   next()
// }))

app.route("/api/v1/user",userRoute);
app.route("/api/v1/blog",blogRoute);


export default app

