import z from "zod";

export const singnupInput=z.object({
    username:z.string().email(),
    password:z.string().min(6),
    name:z.string().optional()
})
//type inference in zod
export type SignupInput=z.infer<typeof singnupInput>

export const singninInput=z.object({
    username:z.string().email(),
    password:z.string().min(6),
    name:z.string().optional()
})
//type inference in zod
export type SigninInput=z.infer<typeof singninInput>

export const create_bloginput=z.object({
    title:z.string(),
    content:z.string()
})
//type inference in zod
export type CreateBloginput=z.infer<typeof create_bloginput>

export const update_bloginput=z.object({
    title:z.string(),
    content:z.string(),
    id:z.string()
})
//type inference in zod
export type UpdateBloginput=z.infer<typeof update_bloginput>