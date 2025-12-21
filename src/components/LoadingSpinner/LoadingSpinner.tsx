import { Spinner, Center } from '@chakra-ui/react'
import { type FC } from 'react'

export const LoadingSpinner: FC = () => {
    return <Center h='100vh'>
        <Spinner size='xl' />
    </Center>
}