import { Hono } from "hono"
const app = new Hono()


app.post('/api/v1/signup', (c) => {
  return c.json({
    msg :"Sign Up Route"
  })
})


app.post('/api/v1/signin', (c) => {
  return c.json({
    msg :"Sign In Route"
  })
})


app.post('/api/v1/blog', (c) => {
  return c.json({
    msg :"Blog Route"
  })
})


app.put('/api/v1/blog', (c) => {
  return c.json({
    msg :"Blog Route"
  })
})


// app.get('/api/v1/:id', (c) => {
//   return c.json({
//     msg :"Get By id route"
//   })
// })



export default app

