import { ComponentProps, type FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogBody,
    DialogCloseTrigger,
    DialogBackdrop,
    DialogPositioner,
    Icon
} from '@chakra-ui/react'
import { RiCloseFill } from 'react-icons/ri'
import { ModalProps } from './types'
import { backdropVariants, modalVariants } from './consts'

export const Modal: FC<ModalProps> = ({ isOpen, onClose, header, body }) => {
    const handleOpenChange: ComponentProps<typeof Dialog.Root>['onOpenChange'] = open => {
        if (!open && !!onClose) onClose();
    }

    return <Dialog.Root open={isOpen} onOpenChange={handleOpenChange} modal={true} size='sm'>
        <AnimatePresence mode='wait'>
            {isOpen && <>
                    <DialogBackdrop asChild>
                        <motion.div
                            variants={backdropVariants}
                            initial='hidden'
                            animate='visible'
                            exit='hidden'
                            style={{
                                position: 'fixed',
                                inset: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                backdropFilter: 'blur(4px)'
                            }}
                        />
                    </DialogBackdrop>

                    <DialogPositioner alignItems='center'>
                        <DialogContent asChild>
                            <motion.div
                                variants={modalVariants}
                                initial='hidden'
                                animate='visible'
                                exit='exit'
                                style={{
                                    background: 'white',
                                    borderRadius: '16px',
                                    padding: 0,
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                    maxWidth: '400px',
                                    width: '100%'
                                }}
                            >
                                {!!header && <DialogHeader p='24px 24px 16px'>{header}</DialogHeader>}

                                {!!onClose && (
                                    <DialogCloseTrigger
                                        position='absolute'
                                        borderRadius='50%'
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='center'
                                        p='1'
                                        _hover={{ bg: 'black', color: 'white' }}
                                        onClick={onClose}
                                    >
                                        <Icon as={RiCloseFill} boxSize='3' color='black.500' />
                                    </DialogCloseTrigger>
                                )}

                                {!!body && <DialogBody p='16px 24px 24px'>{body}</DialogBody>}
                            </motion.div>
                        </DialogContent>
                    </DialogPositioner>
                </>
            }
        </AnimatePresence>
    </Dialog.Root>
}