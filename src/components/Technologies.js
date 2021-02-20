import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

import Typography from 'antd/lib/typography';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import Card from 'antd/lib/card';
import { motion } from 'framer-motion'
import { useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons/faJsSquare'
import { faWordpress } from '@fortawesome/free-brands-svg-icons/faWordpress'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons/faBootstrap'
import { CaretRightOutlined } from '@ant-design/icons'

const { Title,Text } = Typography;

// Styles
const sectionTitle = {
    fontSize: '30px',
    fontWeight: '100',
    margin: '0',
    padding: '0'
}

const logoColorDefault = {
    color:'#434343'
}

const carretColor = {
    color: '#1890ff'
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
    /** Contains all top tech. names */
    const [technologies] = useState([
        {id: 1, name: "JavaScript"},
        {id: 2, name: "React JS"},
        {id: 3, name: "Wordpress"},
        {id: 4, name: "Boostrap"}
    ])

    /** Holds all the languages */
    const [languages] = useState([
        {id:1,name:"HTML"},
        {id:2,name:"CSS"},
        {id:3,name:"PHP"},
        {id:4,name:"Java"},
        {id:5,name:"C/C++"},
    ])

    /** Holds all the frameworks */
    const [frameworks] = useState([
        {id:1, name:"Angular"},
        {id:2, name:"Gatsby"},
        {id:3,name:"Ionic"},
        {id:4,name:"Java FX"},
        {id:5,name:"Java Swing"},
    ])

    /**
     * Returns the appropriate logo
     * @param {string} name - name of technology being returned
     */
    const logoDisplay = (name) => {
        if (name === technologies[0].name) {
            return <FontAwesomeIcon icon={faJsSquare} size="5x" style={logoColorDefault}/>
        } else if (name === technologies[1].name) {
            return <FontAwesomeIcon icon={faReact} size="5x" style={logoColorDefault}/>
        } else if (name === technologies[2].name) {
            return <FontAwesomeIcon icon={faWordpress} size="5x" style={logoColorDefault}/>
        } else if (name === technologies[3].name) {
            return <FontAwesomeIcon icon={faBootstrap} size="5x" style={logoColorDefault}/>
        }
    }

    /** Displays all 'top' technologies */
    const topTechDisplay = technologies.map(tech => { return (
        <Col
        span={6}
        key={tech.id}
        >
            <motion.div
            variants={logoVariant}
            >
                {logoDisplay(tech.name)}
                <Title level={5}>{ tech.name }</Title>
            </motion.div>
        </Col>
    )})
    
    /** Displays all frameworks */
    const frameworkDisplay = frameworks.map(framework => { return (
        <div
        key={framework.id}
        >
            <CaretRightOutlined style={carretColor}/>
            <Text>{ framework.name }</Text><br />
        </div>
 
    )})

    /** Displays all languages */
    const languageDisplay = languages.map(language => { return (
        <div
        key={language.id}
        >
            <CaretRightOutlined style={carretColor}/>
            <Text>{ language.name }</Text><br />
        </div>
 
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
        style={{margin:'125px 0'}}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={contVariant}
        >
            <motion.div
            style={{textAlign:'center'}}
            variants={titleVariant}
            >
                <Title style={sectionTitle}><span style={{fontWeight: '500'}}>Technologies</span> I've been working with.</Title>
            </motion.div>
            <div
            style={{paddingTop:'75px'}}
            >
                {/* Top 4 technologies I use */}
                <Row
                justify="space-between"
                style={{textAlign:'center'}}
                >
                    { topTechDisplay }
                </Row>
                {/* Other technologies and libraries/framework  */}
                <motion.div
                variants={elementVariant}
                >
                    <Card
                    style={{marginTop:'50px', cursor:'default'}}
                    >
                        <Card.Grid className='gridStyle'>
                            <Title level={5}>Other languages</Title>
                            { languageDisplay }
                        </Card.Grid>
                        <Card.Grid className='gridStyle'>
                            <Title level={5}>Other frameworks</Title>
                            { frameworkDisplay } 
                        </Card.Grid>        
                    </Card>
                </motion.div>

            </div>
        </motion.div>
    )
}

export default Technologies
