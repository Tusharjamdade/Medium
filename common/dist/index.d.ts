import zod from "zod";
export declare const signupValidation: zod.ZodObject<{
    email: zod.ZodString;
    name: zod.ZodOptional<zod.ZodString>;
    password: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    email: string;
    password: string;
    name?: string | undefined;
}, {
    email: string;
    password: string;
    name?: string | undefined;
}>;
export type signupValidationInfer = zod.infer<typeof signupValidation>;
export declare const signinValidation: zod.ZodObject<{
    email: zod.ZodString;
    password: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type signinValidationInfer = zod.infer<typeof signinValidation>;
export declare const postValidation: zod.ZodObject<{
    title: zod.ZodString;
    content: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export type postValidationInfer = zod.infer<typeof postValidation>;
export declare const postUpdateValidation: zod.ZodObject<{
    id: zod.ZodNumber;
    title: zod.ZodString;
    content: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    title: string;
    content: string;
    id: number;
}, {
    title: string;
    content: string;
    id: number;
}>;
export type postUpdateValidationInfer = zod.infer<typeof postUpdateValidation>;
