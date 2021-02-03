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
    const [projects] = useState([
        {iconName: "faReact", projectName: "StudyBuddy", description: "A simple flash card web application designed for studying." },
        {iconName: "faReact", projectName: "Portfolio v2", description: "The second version of my personal portfolio made in order to demonstrate my personal projects."  },
        {iconName: "faWordpress", projectName: "Overhaul.design", description: "Develop & maintan websites for our web agency business." }
    ])

    return (
        <div
        style={{color: 'white', padding: '100px 0'}}
        >
            <div
            style={{textAlign: 'center'}}
            >
                <Title style={sectionTitle}>Some <span style={{fontWeight: '500'}}>Projects</span> I accomplished</Title>
            </div>
           <div
           style={{paddingTop: '50px'}}
           >
               <Row glutter={14}>
                   {/* Card 1 */}
                    <Col span={8}>
                        <ProjectDisplay 
                        iconName={projects[0].iconName} 
                        projectName={projects[0].projectName}
                        description={projects[0].description}
                        />
                    </Col>
                    {/* ProjectDisplay 2 */}
                    <Col span={8}>
                        <ProjectDisplay 
                        iconName={projects[1].iconName}
                        projectName={projects[1].projectName}
                        description={projects[1].description}
                        />
                    </Col>
                    {/* ProjectDisplay 3 */}
                    <Col span={8}>
                        <ProjectDisplay 
                        iconName={projects[2].iconName}
                        projectName={projects[2].projectName}
                        description={projects[2].description}
                        />
                    </Col>
               </Row>
           </div>
        </div>
    )
}

export default Projects
