import React from 'react'
import { Card } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faPhp } from '@fortawesome/free-brands-svg-icons'
import { GithubOutlined, ExportOutlined } from '@ant-design/icons';

const { Meta } = Card;

/**
 * Returns a formatted card for each individual project
 * @param {string} iconName - Icon name for Font Awesome, language/framework of project
 * @param {string} projectName - The title of the project
 * @param {string} description - The description of the project
 * @param {string} github - The github url of the project
 * @param {string} url - the direct url of the project
 */
const ProjectDisplay = ({iconName, projectName, description, github, url}) => {
    
    /** Returns the appropriate icon */
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
