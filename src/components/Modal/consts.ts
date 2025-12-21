import { motion } from 'framer-motion'
import type { ComponentProps } from 'react'

export const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.2 }
    }
}

export const modalVariants: ComponentProps<typeof motion.div>['variants'] = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        y: -20
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: 'spring',
            damping: 25,
            stiffness: 300,
            duration: 0.3
        }
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        y: 10,
        transition: { duration: 0.15 }
    }
}