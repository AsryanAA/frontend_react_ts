import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'
import { FC } from 'react'

export const Layout: FC = () => {
    return <>
        <Helmet>
            <title>Enki</title>
            <meta name="description" content="Enki" />
        </Helmet>
        <Box minH="100vh" minW="100vw" display="flex" flexDirection="column">
            <Box h="full" w="full" as="main" flex="1">
                <Outlet />
            </Box>
        </Box>
    </>
}