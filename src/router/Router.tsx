import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Layout } from '@/layouts/Layout'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { Routes as RoutePaths } from './consts'

// const AdminDashboardPage = lazy(() => import('@/pages/AdminDashboardPage'))
const LoginPage = lazy(() => import('@/pages/LoginPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

export const Router = () => <Suspense fallback={<LoadingSpinner />}>
    <Routes>
        <Route path={RoutePaths.Main} element={<Layout />}>
            <Route index element={<LoadingSpinner />} />
            {/*<Route path={RoutePaths.Admin} element={<AdminDashboardPage />} />*/}
            <Route path={RoutePaths.Login} element={<LoginPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Route>
    </Routes>
</Suspense>