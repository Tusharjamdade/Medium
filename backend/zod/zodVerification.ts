import zod, { string } from "zod";

export const signupValidation = zod.object({
    email : zod.string().email(),
    name : zod.string(),
    password : zod.string()
})

export const signinValidation = zod.object({
    email : zod.string().email(),
    password : zod.string()
})