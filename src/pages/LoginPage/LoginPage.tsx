import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Routes } from '@/router'
import { LoginModal } from './components'

export const LoginPage: FC = () => {
    // TODO: определять вошли ли уже и открывать/закрывать по умолчанию?
    // TODO: редирект если вошли
    const [isModalOpen, setIsModalOpen] = useState(true);
    const navigate = useNavigate()

    const handleSuccess = () => {
        setIsModalOpen(false)
        // TODO: редирект на сохраненную страницу до авторизации (? плюс к метрикам)
        navigate(Routes.Main)
    }

    return <>
        <Helmet>
            <title>Авторизация | ASCorp</title>
            <meta name='description' content='Страница авторизации' />
        </Helmet>

        <LoginModal isOpen={isModalOpen} onSuccess={handleSuccess} />
    </>
}