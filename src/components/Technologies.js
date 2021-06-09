import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

import Typography from 'antd/lib/typography';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import Card from 'antd/lib/card';
import { motion } from 'framer-motion'
import { useAnimation } from 'framer-motion';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons/faJsSquare'
import { faWordpress } from '@fortawesome/free-brands-svg-icons/faWordpress'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons/faBootstrap'
import { CaretRightOutlined } from '@ant-design/icons'

const { Title, Text } = Typography;

// Styles
const sectionTitle = {
    fontSize: '30px',
    fontWeight: '100',
    margin: '0',
    padding: '0'
}

const subTitle = {
    textAlign: 'center'
}

const logoColorDefault = {
    color:'#434343'
}

const carretColor = {
    color: '#2f54eb'
}

// Variants
const contVariant = {
    visible: { opacity:1, 
        transition: { when: "beforeChildren", staggerChildren: 0.2 }
    },
    hidden: { opacity:0 }
}

const titleVariant = {
    visible: { opacity:1,
        transition: { duration: 1 }
    },
    hidden: { opacity:0 }
}

const logoVariant = {
    visible: { opacity: 1, scale: 1,
        transition: { duration: 0.5 }
    },
    hidden: { opacity:0, scale: 0 }
}

const elementVariant = {
    visible: { opacity: 1, scale: 1,
        transition: { duration: 0.5 }
    },
    hidden: { opacity:0, scale: 0.9 }
}

/** Returns formatted display of technologies */
const Technologies = () => {
    /** Framer motion animateControl */
    const controls = useAnimation();
    /** useInView - determines when a componenent is in view */
    const [ref, inView] = useInView({threshold: 0.5});
    
    /** Set the variant to 'visible' if it's in view */
    useEffect(() => {
        if (inView) {
        controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
        className="section-container"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={contVariant}
        >
            <motion.div
            style={{textAlign:'center'}}
            variants={titleVariant}
            >
                <Title style={sectionTitle}>My Latest <span style={{fontWeight: '500'}}>Technologies</span></Title>
            </motion.div>
            <div
            style={{paddingTop:'75px'}}
            >
                <Row
                justify="center"
                >
                    <Col 
                    xs={{ span:24 }} lg={{ span:12 }}
                    >
                        <Title level={3} style={subTitle}>Languages</Title>
                    </Col>
                    <Col 
                    xs={{ span:24 }} lg={{ span:12 }}
                    >
                        <Title level={3} style={subTitle}>Frameworks</Title>
                    </Col>
                </Row>
            </div>
        </motion.div>
    )
}

export default Technologies
