import React, { useState } from 'react'
import { motion } from 'framer-motion'
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

/** Contains all project information */
const Projects = () => {
    /** Usestate of all projects - contains all project information */
    const [projects] = useState([
        {id: 1, projectName: "StudyBuddy", 
            description: "A simple flash card web application designed for studying. Ability to add an extensive range of questions into an account and includes a randomized order for each quiz.", 
            github: "https://github.com/jonahlouis4/StudyBuddy", url:"https://jonahlouis4.github.io/StudyBuddy/"},
        {id: 2, projectName: "COVID-19 Tracker", 
            description: "Global scale covid tracker of deaths, cases, and recoveries using a COVID API. Includes sorted charts and summaries from a wide variety of Countries.",
            github: "https://github.com/jonahlouis4/COVID19-Tracker", url:"https://covid19-tracker2021.herokuapp.com/"},
    ])

    /** Project format for each individual project */
    const ProjectDisplay = props => (
        <div>
            <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
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
        <div
        className="section-container"
        >
            <div
            style={{textAlign: 'center'}}
            >
                <Title style={sectionTitle}>Featured <span style={{fontWeight: '500'}}>Projects</span></Title>
            </div>
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
                        <ProjectDisplay 
                            demo={ demo_1 }
                            link={ projects[0].url }
                            name={ projects[0].projectName }
                            description={ projects[0].description }
                            github={ projects[0].github }
                            url={ projects[0].url }
                        />
                    </Col>
                    <Col
                    md={24} lg={12} xl={12}
                    >
                        {/* Project 2 (COVID Tracker) */}
                        <ProjectDisplay 
                            demo={ demo_2 }
                            link={ projects[1].url }
                            name={ projects[1].projectName }
                            description={ projects[1].description }
                            github={ projects[1].github }
                            url={ projects[1].url }
                        />
                    </Col>
                </Row>
                <div
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
                </div>
            </div>
        </div>
    )
}

export default Projects
