import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'
import { useAnimation } from 'framer-motion';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col'
import Typography from 'antd/lib/typography';
import Button from 'antd/lib/button';
import Showcase from '../images/showcase-caremada.png'

const { Title } = Typography;

// Styles
const subHeader = {
    fontWeight: '100',
    textDecoration: 'underline',
    color: 'white',
    margin: '0',
    padding: '0'
}

const showcaseText = {
    color: 'white',
    fontWeight: '100',
    fontSize: '20px'
}

const Contribution = () => {
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

    // Variants
    const contVariant = {
        visible: { opacity:1, 
            transition: { when: "beforeChildren", staggerChildren: 0.3 }
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
        hidden: { opacity:0, scale: 0.9 }
    }

    return (
        <motion.div
        className="section-container"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={contVariant}
        >
            <motion.div
            style={{textAlign: 'center'}}
            variants={titleVariant}
            >
                <Title className="section-header" id="contribution-header">
                    My <span style={{fontWeight: '500'}}>Contributions</span>
                </Title>
            </motion.div>
            <div
            style={{marginTop: '75px'}}
            className="contri-showcase-container"
            >
                <Row
                align="middle"
                justify="center"
                style={{marginTop: '2rem'}}
                >
                    <Col
                    xl={14}
                    >
                        <motion.div
                        variants={elementVariant}
                        >
                            <img src={Showcase} className="contri-image" alt="Caremade - Task List Manager by It Compiles"/>
                        </motion.div>
                    </Col>
                    <Col
                    xl={12}
                    style={{textAlign:'center'}}
                    >
                        <motion.div
                        variants={elementVariant}
                        >
                            <Title
                            style={subHeader}
                            level={3}
                            >
                            Caramada - Task List Manager
                            </Title>
                        </motion.div>
                        <motion.p
                        style={showcaseText}
                        variants={elementVariant}
                        >
                            A task list manager and activity feed for the Caremada mobile application to aid 
                            local caregivers and their clients in managing, and viewing their appointments. 
                        </motion.p>  
                        <motion.div
                        variants={elementVariant}
                        >
                            <Button>
                                <a 
                                href="https://www.algonquincollege.com/arie/2021/03/caremada-task-list-and-activity-feed/"
                                target="_blank"
                                rel="noreferrer"
                                >
                                    Read More
                                </a>
                            </Button>
                        </motion.div>
       
                    </Col>
                </Row>
            </div>
        </motion.div>
    )
}

export default Contribution
