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
        {iconName: "faReact", projectName: "StudyBuddy", 
            description: "A simple flash card web application designed for studying." },
        {iconName: "faPhp", projectName: "Portfolio v2", 
            description: "The second version of my personal portfolio."  },
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
               <Row 
               justify="center"
               gutter={[16, { sm: 0, md: 16, lg: 32, xl: 32 }]}
               className="projects-row"
               >
                   {/* Card 1 */}
                    <Col 
                    xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:8}} xl={{span:8}}>
                        <ProjectDisplay 
                        iconName={projects[0].iconName} 
                        projectName={projects[0].projectName}
                        description={projects[0].description}
                        />
                    </Col>
                    {/* ProjectDisplay 2 */}
                    <Col 
                    xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:8}} xl={{span:8}}>
                        <ProjectDisplay 
                        iconName={projects[1].iconName}
                        projectName={projects[1].projectName}
                        description={projects[1].description}
                        />
                    </Col>
               </Row>
           </div>
        </div>
    )
}

export default Projects
