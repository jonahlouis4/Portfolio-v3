import React from 'react'

import { motion } from 'framer-motion'
import Typography from 'antd/lib/typography'
import Button from 'antd/lib/button'
import Avatar from 'antd/lib/avatar'
import Space from 'antd/lib/space'
import user from '../images/jonah.jpg'

const { Title } = Typography;

// Styles
const headerTitle = {
    fontSize: '56px',
    fontWeight: '500',
    marginBottom: '18px'
}
const subHeaderTitle = {
    fontWeight: '400',
    marginBottom: '18px'
}
const colorFont = {
    color: '#2f54eb',
    fontWeight: '500'
}

// Variants
const contVariant = {
    visible: { opacity: 1,
        transition: { delay:1, when:"beforeChildren", staggerChildren: 0.2 },
    },
    hidden: { opacity: 0 }
}

const elementVariant = {
    visible: { opacity: 1, x: 0,
        transition: { duration: 0.5 },
    },
    hidden: { x: -40, opacity: 0 }
}

/** Introduction component - contains the introduction */
const Introduction = () => {
    return (
        <motion.div
        className="introduction-container"
        initial="hidden"
        animate="visible"
        variants={contVariant}        
        >
            {/* Header */}
            <motion.div 
            variants={elementVariant}
            >
                <Title className="intro-header">Front-end web developer.</Title>
            </motion.div>
            {/* SubHeader */}
            <motion.div 
            variants={elementVariant}
            >
                <Title 
                level={3} 
                style={subHeaderTitle} 
                type="secondary"
                >
                    I specialize in creating beautiful things for the web, & just love what I do.
                </Title>
            </motion.div>
            {/* Call to Action */}
            <div
            >
                <Space 
                size="middle"
                >
                    <motion.div 
                    variants={elementVariant}
                    >
                        <Button href="mailto:jonah_louis@outlook.com" size="large" >Get In Touch</Button>   
                    </motion.div>
                </Space>
            </div>
            {/* Picture/Avatar */}
            <motion.div 
            variants={elementVariant}
            className="intro-avatar-container"
            >
                <Avatar
                    size={{ xs: 230, sm: 230, md: 230, lg: 230, xl: 230, xxl: 250 }}
                    src={user}
                    id="intro-avatar"
                />
            </motion.div>
        </motion.div>
    )
}

export default Introduction
