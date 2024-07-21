import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { signinValidation, signupValidation } from "../zod/zodVerification";
import { jwt_password } from "../zod/jwtPassword";
import { sign } from "hono/jwt";

const userRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

userRoute.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  let jwt_token;

  const body = signupValidation.safeParse(await c.req.json());
  if (body.success) {
    try {
      const result = await prisma.user.create({
        data: body.data,
      });
      jwt_token = await sign({ id: result.id }, jwt_password);
      console.log(jwt_token);
      console.log(result);
    } catch (err) {
      return c.json({
        msg: "User Already Exist/Invalid input",
      });
    }
  } else {
    return c.json({
      msg: "User Already Exist/Invalid input",
    });
  }

  return c.json({
    token: jwt_token,
  });
});
userRoute.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = signinValidation.safeParse(await c.req.json());
  if (!body.success) {
    return c.json({
      msg : "Invalid Inputs"
    })
  }
  const result = await prisma.user.findFirst({
    where: {
      email: body.data.email,
      password: body.data.password,
    }
  });
  if(!result){
    return c.json({
      msg : "user Doesnot Exist"
    })
  }
  const jwt_token = await sign({ id: result.id }, jwt_password);
  console.log(jwt_token);
  return c.json({
    token: jwt_token,
  });
});



export { userRoute };
