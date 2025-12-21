import { z } from 'zod'

export enum FieldTypes {
    Email = 'email',
    Password = 'password'
}

export const fieldTypeToMessageRecord: Record<FieldTypes, string> = {
    [FieldTypes.Email]: 'Введите вашу электронную почту',
    [FieldTypes.Password]: 'Введите ваш пароль'
}

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, 'Email обязателен для входа')
        .email('Введите корректный email адрес')
        .max(100, 'Email слишком длинный'),

    password: z
        .string()
        .min(1, 'Пароль обязателен для входа')
        .min(6, 'Пароль должен содержать минимум 6 символов')
        .max(50, 'Пароль слишком длинный')
})

export const defaultValues = {
    email: '',
    password: ''
}