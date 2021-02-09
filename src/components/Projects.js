import React, { useState } from 'react'
import ProjectDisplay from './ProjectDisplay'

import { Typography, Col, Row } from 'antd';

const { Title } = Typography;

const sectionTitle = {
    fontSize: '30px',
    fontWeight: '100',
    color: 'white',
    margin: '0',
    padding: '0'
}

const Projects = () => {
    /** Usestate of all projects - contains all project information */
    const [projects] = useState([
        {iconName: "faReact", projectName: "StudyBuddy", 
            description: "A simple flash card web application designed for studying.", 
            github: "https://github.com/jonahlouis4/StudyBuddy", url:"https://jonahlouis4.github.io/StudyBuddy/" },
        {iconName: "faPhp", projectName: "Portfolio v2", 
            description: "The second version of my personal portfolio.",
            github: "https://github.com/jonahlouis4/Portfolio-v2", url:"https://jonahlouis.ca/"  },
    ])

    /** Card format for each project */
    const cardDisplay = projects.map(project => { return (
        <Col 
        xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:10}} xl={{span:12}}>
            <ProjectDisplay 
            iconName={project.iconName} 
            projectName={project.projectName}
            description={project.description}
            github={project.github}
            url={project.url}
            />
        </Col>
    )})

    return (
        <div
        style={{padding:'100px 0'}}
        >
            <div
            style={{textAlign: 'center'}}
            >
                <Title style={sectionTitle}>Some <span style={{fontWeight: '500'}}>Projects</span> I accomplished</Title>
            </div>
           <div
           style={{paddingTop: '50px'}}
           >
               <Row 
               justify="center"
               gutter={[64, 32]}
               className="projects-row"
               >
                   {/* Display all cards */}
                  {cardDisplay}
               </Row>
           </div>
        </div>
    )
}

export default Projects
