import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { jwt_password } from "../jwt_password/jwtPassword";
import { postUpdateValidation, postValidation } from "@tusharjamdade/common";

const blogRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  },
  Variables:{
    userId:number
  }
}>();

blogRoute.use("/*",async(c,next)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());


    const header = c.req.header("Authorization") || "";
    console.log(header)
    try {
        const verified  = await verify(header,jwt_password);
    console.log(verified.id)
    if(verified){
        // @ts-ignore
        c.set("userId",verified.id);
        await next()
    }else{
        console.log("Error Occured")
        return c.json({
            msg : " Invalid Token"
        })
    }
    } catch (error) {
        return c.json({
            msg : "Invalid Token"
        })
    }
    


    next()
})

blogRoute.post("/", async (c) => {
  const body = await c.req.json();
  const parseBody = postValidation.safeParse(body);
  if(!parseBody.success){
    return c.json({
        msg : "Invalid Inputs"
    })
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const result = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: c.get("userId"),
    },
  });
  return c.json({
    id: result.id,
  });
});

blogRoute.put("/", async (c) => {
  const body = await c.req.json();
  const parseBody = postUpdateValidation.safeParse(body)
  if(!parseBody.success){
    return c.json({
        msg : "Invalid Inputs"
    })
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const result = await prisma.post.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return c.json({
    id: result.id,
    msg: "post updated sucessfully",
  });
});

blogRoute.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const result = await prisma.post.findMany({
      where: {},
    });
    return c.json({
      result,
    });
  } catch (error) {
    return c.json({
      msg: "Post Doesnot exist",
    });
  }
});

blogRoute.get("/:id", async (c) => {
  const header = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const result = await prisma.post.findFirst({
      where: {
        id: parseInt(header),
      },
    });
    if(!result){
        return c.json({
            msg : "Post Doesnot exist"
        })
    }
    return c.json({
      result,
    });
  } catch (error) {
    return c.json({
      msg: "Post Doesnot exist",
    });
  }
});

export { blogRoute };
