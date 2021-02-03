import React from 'react'
import { Card } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faPhp } from '@fortawesome/free-brands-svg-icons'
import { GithubOutlined, ExportOutlined } from '@ant-design/icons';

const { Meta } = Card;

const ProjectDisplay = ({iconName, projectName, description, github, url}) => {
    
    function iconDisplay() {
        if (iconName === "faReact") {
            return <FontAwesomeIcon icon={faReact} size="6x" />
        } else if (iconName === "faPhp") {
            return <FontAwesomeIcon icon={faPhp} size="6x" />
        }
    }

    return (
        <Card
        hoverable
        actions={[
            <a href={github} target="_blank"><GithubOutlined key="github" /></a>,
            <a href={url} target="_blank"><ExportOutlined key="url" /></a>
            ]}
        >
            <div 
            style={{textAlign: 'center', paddingBottom: '20px'}}
            >
                {iconDisplay()}
            </div>
            <Meta title={projectName} description={description} />  
      </Card>
    )
}

export default ProjectDisplay
