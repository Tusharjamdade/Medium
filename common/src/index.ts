import zod, { string } from "zod";

export const signupValidation = zod.object({
    email : zod.string().email(),
    name : zod.string().optional(),
    password : zod.string().min(6)
})
export type signupValidationInfer = zod.infer<typeof signupValidation>;
export const signinValidation = zod.object({
    email : zod.string().email(),
    password : zod.string()
})
export type signinValidationInfer = zod.infer<typeof signinValidation>;

export const postValidation = zod.object({
    title: zod.string().min(1),
    content: zod.string().min(1),
})
export type postValidationInfer = zod.infer<typeof postValidation>;

export const postUpdateValidation = zod.object({
    id:zod.number(),
    title: zod.string().min(1),
    content: zod.string().min(1),
})
export type postUpdateValidationInfer = zod.infer<typeof postUpdateValidation>;
