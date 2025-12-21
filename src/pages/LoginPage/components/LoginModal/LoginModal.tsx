import { type FC } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Field, Input, Text, VStack, HStack, Icon } from '@chakra-ui/react'
import { FiLock } from 'react-icons/fi'
import type { LoginFormData, LoginModalProps } from './types'
import { Button, Modal, toaster } from '@/components'
import { defaultValues, FieldTypes, fieldTypeToMessageRecord, loginSchema } from './consts'

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onSuccess }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
        reset
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        mode: 'onChange',
        defaultValues
    })

    const onSubmit = async (data: LoginFormData) => {
        try {
            // TODO: заменить на реальный API запрос
            await new Promise(resolve => setTimeout(resolve, 1000));

            if (data.email === 'admin123@mail.ru' && data.password === 'admin123') {
                toaster.create({
                    title: 'Успешно!',
                    description: 'Доступ предоставлен',
                    type: 'success',
                    duration: 3000
                })
                onSuccess()
                reset()
            } else {
                toaster.create({
                    title: 'Ошибка',
                    description: 'Неверный логин или пароль',
                    type: 'error',
                    duration: 3000
                })
            }
        } catch (error) {
            console.error(error);
            toaster.create({
                title: 'Ошибка',
                description: 'Произошла ошибка при входе',
                type: 'error',
                duration: 3000
            })
        }
    }

    return <Modal
        isOpen={isOpen}
        header={
            <HStack gap='3' alignItems='center'>
                <Icon as={FiLock} boxSize='8' color='black.500' />
                <VStack gap='1' alignItems='flex-start'>
                    <Text fontWeight='bold' fontSize='md'>
                        Авторизация
                    </Text>
                    <Text color='gray.600' fontSize='xs'>
                        Введите электронную почту и пароль для входа
                    </Text>
                </VStack>
            </HStack>
        }
        body={
            <form onSubmit={handleSubmit(onSubmit)}>
                <VStack gap='4'>
                    <Field.Root invalid={!!errors.email}>
                        <Field.Label>Электронная почта</Field.Label>
                        <Input
                            px='4'
                            type={FieldTypes.Email}
                            placeholder={fieldTypeToMessageRecord[FieldTypes.Email]}
                            size='lg'
                            autoFocus
                            {...register(FieldTypes.Email)}
                        />
                        {errors.email && <Field.ErrorText>{errors.email.message}</Field.ErrorText>}
                    </Field.Root>

                    <Field.Root invalid={!!errors.password}>
                        <Field.Label>Пароль</Field.Label>
                        <Input
                            px='4'
                            type={FieldTypes.Password}
                            placeholder={fieldTypeToMessageRecord[FieldTypes.Password]}
                            size='lg'
                            {...register(FieldTypes.Password)}
                        />
                        {errors.password && <Field.ErrorText>{errors.password.message}</Field.ErrorText>}
                    </Field.Root>

                    <Button
                        variant='solid'
                        width='full'
                        size='lg'
                        mt='2'
                        type='submit'
                        loading={isSubmitting}
                        disabled={!isValid || isSubmitting}
                    >
                        Войти
                    </Button>
                </VStack>
            </form>
        }
    />
}