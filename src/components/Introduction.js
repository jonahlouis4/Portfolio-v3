import React from 'react'

import { motion } from 'framer-motion'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Typography from 'antd/lib/typography'
import Button from 'antd/lib/button'
import Avatar from 'antd/lib/avatar'
import Space from 'antd/lib/space'
import GithubOutlined from '@ant-design/icons/GithubOutlined'
import LinkedinOutlined from '@ant-design/icons/LinkedinOutlined'
import user from '../images/jonah.jpg'

const { Title } = Typography;

// Styles
const headerTitle = {
    fontSize: '56px',
    fontWeight: '500',
    margin: '0',
    padding: '0'
}

const subHeaderTitle = {
    fontWeight: '400',
    margin: '0',
    padding: '0'
}

const colorFont = {
    color: '#1890ff',
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
        style={{margin: '200px 0'}}
        className="introduction-container"
        initial="hidden"
        animate="visible"
        variants={contVariant}
        >
            <Row>
                <Col 
                xl={18} 
                style={{ margin:'auto'}}
                id="intro-left"
                >
                    <motion.div variants={elementVariant}>
                        <Title style={headerTitle}>I'm Jonah,</Title>
                    </motion.div>
                    <motion.div variants={elementVariant}>
                        <Title level={3} style={subHeaderTitle} type="secondary">
                            I love to <span style={colorFont}>learn</span> and <span style={colorFont}>build</span> things for the web.
                        </Title>
                    </motion.div>
                    <div
                    style={{marginTop: '10px'}}
                    >
                        <Space size="small">
                            <motion.div variants={elementVariant}>
                                <Button href="mailto:jonah_louis@outlook.com">Contact me</Button>   
                            </motion.div>
                            <motion.a 
                            href="https://github.com/jonahlouis4" 
                            target="_blank"
                            variants={elementVariant}
                            >
                                <Button shape="circle" icon={<GithubOutlined />} />
                            </motion.a>
                            <motion.a 
                            href="https://www.linkedin.com/in/jonah-louis-3b71791b8/" 
                            target="_blank"
                            variants={elementVariant}
                            >
                                <Button shape="circle" icon={<LinkedinOutlined /> } />
                            </motion.a>
                        </Space>
                    </div>
                </Col>
                <Col 
                xl={6} 
                style={{ margin:'auto'}}
                className="intro-picture"
                >
                    <motion.div variants={elementVariant}>
                        <Avatar
                            size={{ xs: 180, sm: 180, md: 180, lg: 180, xl: 220, xxl: 250 }}
                            src={user}
                        />
                    </motion.div>
                </Col>
            </Row> 
        </motion.div>
    )
}

export default Introduction
