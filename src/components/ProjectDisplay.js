import React from 'react'
import { Card } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faPhp } from '@fortawesome/free-brands-svg-icons'
import { GithubOutlined, ExportOutlined } from '@ant-design/icons';

const { Meta } = Card;

const ProjectDisplay = ({iconName, projectName, description, github, url}) => {
    
    function iconDisplay() {
        if (iconName === "faReact") {
            // Color = #00d8ff
            return <FontAwesomeIcon icon={faReact} size="4x"/>
        } else if (iconName === "faPhp") {
            // Color = #8993be
            return <FontAwesomeIcon icon={faPhp} size="4x"/>
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
            style={{textAlign:'center', paddingBottom:'20px', color:'#434343'}}
            >
                {iconDisplay()}
            </div>
            <Meta title={projectName} description={description} />  
      </Card>
    )
}

export default ProjectDisplay
