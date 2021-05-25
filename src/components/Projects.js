import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'; 
import { motion } from 'framer-motion'
import { useAnimation } from 'framer-motion';

import Button from 'antd/lib/button';
import Typography from 'antd/lib/typography';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import GithubFilled from '@ant-design/icons/GithubFilled'
import SelectOutlined from '@ant-design/icons/SelectOutlined'
import demo_1 from '../images/project_2.png'
import demo_2 from '../images/project_1.png'

const { Title } = Typography;

// Styles
const sectionTitle = {
    fontSize: '30px',
    fontWeight: '100',
    margin: '0',
    padding: '0'
}

const projectBtn = {
    textAlign: 'center',
    marginTop: '2rem'
}

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

/** Contains all project information */
const Projects = () => {
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

    /** Usestate of all projects - contains all project information */
    const [projects] = useState([
        {id: 1, projectName: "StudyBuddy", 
            description: "A simple flash card web application designed for studying. Ability to add an extensive range of questions and includes a randomized order for each quiz.", 
            github: "https://github.com/jonahlouis4/StudyBuddy", url:"https://jonahlouis4.github.io/StudyBuddy/"},
        {id: 2, projectName: "COVID-19 Tracker", 
            description: "Global scale covid tracker of deaths, cases, and recoveries using a COVID API. Includes sorted charts, and summaries from a wide variety of Countries.",
            github: "https://github.com/jonahlouis4/COVID19-Tracker", url:"https://covid19-tracker2021.herokuapp.com/"},
    ])

    /** Project format for each individual project */
    const ProjectDisplay = props => (
        <div>
            <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            >
                <motion.img 
                src={props.demo} 
                alt={props.description} 
                className="project-image"
                whileHover={{scale: 1.1}}
                />
            </a>
            <div
            style={{textAlign:'center'}}
            >
                <Title
                level={4}
                style={{marginTop: '1.5rem'}}
                >
                    { props.name }
                </Title>
                <p
                style={{fontSize:'20px', marginBottom: '3px'}}
                >
                    {props.description}
                </p>
                <a
                href={props.github}
                target="_blank"
                rel="noreferrer"
                >
                    <Button type="link" style={{marginRight:'0.5rem'}} icon={<GithubFilled/>} >Github </Button>
                </a>
                <a
                href={props.url}
                target="_blank"
                rel="noreferrer"
                >
                    <Button type="link" style={{marginRight:'0.5rem'}} icon={<SelectOutlined />} >Website </Button>
                </a>

            </div>
        </div>
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
            style={{textAlign: 'center'}}
            variants={titleVariant}
            >
                <Title style={sectionTitle}>Featured <span style={{fontWeight: '500'}}>Projects</span></Title>
            </motion.div>
            {/* Projects */}
            <div
            style={{paddingTop: '75px'}}
            >
                <Row 
                justify="center"
                gutter={[48, 48]}
                >
                    <Col
                    md={24} lg={12} xl={12}
                    >
                        {/* Project 1 (Study Buddy) */}
                        <motion.div
                        variants={elementVariant}
                        >
                            <ProjectDisplay 
                                demo={ demo_1 }
                                link={ projects[0].url }
                                name={ projects[0].projectName }
                                description={ projects[0].description }
                                github={ projects[0].github }
                                url={ projects[0].url }
                            />
                        </motion.div>
                    </Col>
                    <Col
                    md={24} lg={12} xl={12}
                    >
                        {/* Project 2 (COVID Tracker) */}
                        <motion.div
                        variants={elementVariant}
                        >
                            <ProjectDisplay 
                                demo={ demo_2 }
                                link={ projects[1].url }
                                name={ projects[1].projectName }
                                description={ projects[1].description }
                                github={ projects[1].github }
                                url={ projects[1].url }
                            />
                        </motion.div>
                    </Col>
                </Row>
                <motion.div
                variants={elementVariant}
                style={projectBtn}
                >
                    <Button>
                      <a 
                      href="https://github.com/jonahlouis4?tab=repositories"
                      target="_blank"
                      rel="noreferrer"
                      >
                          View All
                      </a>
                    </Button>  
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Projects
