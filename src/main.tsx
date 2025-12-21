import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProviders } from '@/providers/AppProviders'
import { Router } from '@/router/Router'
import { Toaster } from './components'
import '@/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
       <AppProviders>
            <Toaster />
            <Router />
        </AppProviders>
    </React.StrictMode>
)