import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import ProjectDisplay from './ProjectDisplay'
import { motion } from 'framer-motion'
import { useAnimation } from 'framer-motion';

import Button from 'antd/lib/button';
import Typography from 'antd/lib/typography';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';

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
    marginTop: '1.5rem'
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
    /** Usestate of all projects - contains all project information */
    const [projects] = useState([
        {id: 1, iconName: "faReact", projectName: "StudyBuddy", 
            description: "A simple flash card web application designed for studying.", 
            github: "https://github.com/jonahlouis4/StudyBuddy", url:"https://jonahlouis4.github.io/StudyBuddy/",
            disabled: false },
        {id: 2, iconName: "faReact", projectName: "COVID-19 Tracker", 
            description: "Global scale covid tracker of deaths, cases, and recoveries.",
            github: "https://github.com/jonahlouis4/COVID19-Tracker", url:"https://covid19-tracker2021.herokuapp.com/", disabled: false },
    ])

    /** Card format for each project */
    const cardDisplay = projects.map(project => { return (
        <Col 
        xs={{span:24}} sm={{span:24}} md={{span:11}} lg={{span:11}} xl={{span:7}}
        key={project.id}
        >
            <ProjectDisplay 
            iconName={project.iconName} 
            projectName={project.projectName}
            description={project.description}
            github={project.github}
            url={project.url}
            disabled={project.disabled}
            />
        </Col>
    )})

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
            style={{textAlign: 'center'}}
            variants={titleVariant}
            >
                <Title style={sectionTitle}>My <span style={{fontWeight: '500'}}>Projects</span></Title>
            </motion.div>
            <motion.div
            style={{paddingTop: '75px'}}
            variants={elementVariant}
            >
                <Row 
                justify="center"
                gutter={[48, 48]}
                >
                    {/* Display all cards */}
                    {cardDisplay}
                </Row>
                <motion.div
                variants={elementVariant}
                style={projectBtn}
                >
                    <Button>
                      <a 
                      href="https://github.com/jonahlouis4?tab=repositories"
                      target="_blank"
                      >
                          View All
                      </a>
                    </Button>  
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Projects
