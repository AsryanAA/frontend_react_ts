import { Container, Text, VStack } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'
import { LinkButton, Typography } from '@/components'
import { Routes } from '@/router'

export const NotFoundPage = () => <>
    <Helmet>
        <title>Страница не найдена | Enki</title>
    </Helmet>

    <Container w='full' h='full' display='flex' alignItems='center'>
        <VStack
            w='full'
            h='100vh'
            gap='6'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
        >
            <Typography as='h1' variant='accent-2xl' color='gray.400'>
                404
            </Typography>
            <Typography as='h2' variant='accent-md'>
                Страница не найдена
            </Typography>
            <Text fontSize='lg' color='gray.600'>
                Запрашиваемая страница не существует или была перемещена
            </Text>

            <LinkButton
                to={Routes.Main}
                variant='accent-solid'
                size='lg'
                mt='4'
                rounded='full'
                useTypography
            >
                Вернуться на главную
            </LinkButton>
        </VStack>
    </Container>
</>