import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

import Typography from 'antd/lib/typography';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import Divider from 'antd/lib/divider';
import { motion } from 'framer-motion'
import { useAnimation } from 'framer-motion';
import RightOutlined from '@ant-design/icons/RightOutlined'

const { Title, Text } = Typography;

// Styles
const sectionTitle = {
    fontSize: '30px',
    fontWeight: '100',
    margin: '0',
    padding: '0'
}

const subTitle = {
    textAlign: 'center',
    marginBottom: '2rem'
}

const mainText = {
    fontSize: '20px',
    margin: '0.8rem 0',
    paddingLeft: '5px',
    display: 'inline'
}

const carret = {
    fontSize: '15px',
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

const elementVariant = {
    visible: { opacity: 1, scale: 1,
        transition: { duration: 0.5 }
    },
    hidden: { opacity:0, scale: 0.5 }
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

    const TechDisplay = props => (
        <motion.div
        style={{display:'block'}}
        variants={elementVariant}
        >
            <RightOutlined 
            style={carret}
            />
            <p
            style={mainText}
            >
                { props.tech }
            </p>
            <Divider />
        </motion.div>
    )

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
                gutter={16}
                >
                    <Col 
                    xs={{ span:24 }} lg={{ span:10 }}
                    >
                        <Title level={3} style={subTitle}>Languages</Title>
                        <TechDisplay tech="HTML"/>
                        <TechDisplay tech="CSS"/>
                        <TechDisplay tech="JavaScript"/>
                        <TechDisplay tech="PHP"/>
                        <TechDisplay tech="Java"/>
                        <TechDisplay tech="C"/>
                        <TechDisplay tech="C++"/>
                    </Col>
                    <Col 
                    xs={{ span:24 }} lg={{ span:10 }}
                    >
                        <Title level={3} style={subTitle}>Frameworks & Libraries</Title>
                        <TechDisplay tech="React JS"/>
                        <TechDisplay tech="React Native"/>
                        <TechDisplay tech="Angular"/>
                        <TechDisplay tech="Gatsby"/>
                        <TechDisplay tech="Ionic"/>
                        <TechDisplay tech="Bootstrap"/>
                        <TechDisplay tech="Ant Design"/>
                    </Col>
                </Row>
            </div>
        </motion.div>
    )
}

export default Technologies
