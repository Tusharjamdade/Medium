import { Hono } from "hono";
import { verify } from "hono/jwt";
import { jwt_password } from "../zod/jwtPassword";

const blogRoute = new Hono<{
    Bindings:{
        DATABASE_URL :string
    }
}>()

// blogRoute.use("/*",async(c,next)=>{
//     // const header = c.req.header("Authorization");
//     // console.log(header)
//     // const verified  = verify(header,jwt_password);
//     // console.log(header)
    
//     next()
// })



blogRoute.post("/",async(c)=>{
    console.log(await c.req.json())
    return c.json({
        msg : "This is blog post route"
    })
})
blogRoute.put("/",(c)=>{
    return c.json({
        msg : "This is blog put route"
    })
})

blogRoute.get("/bulk",(c)=>{
    return c.json({
        msg : "This is blog bulk get route"
    })
})

blogRoute.get("/:id",(c)=>{
    const id = c.req.param('id')
	console.log(id);
    return c.json({
        msg : "This is blog get route"
    })
})

export {
    blogRoute
}