import React from 'react'

import Card from 'antd/lib/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact'
import { GithubOutlined, ExportOutlined } from '@ant-design/icons';

const { Meta } = Card;

/**
 * Returns a formatted card for each individual project
 * @param {string} iconName - Icon name for Font Awesome, language/framework of project
 * @param {string} projectName - The title of the project
 * @param {string} description - The description of the project
 * @param {string} github - The github url of the project
 * @param {string} url - the direct url of the project
 * @param {boolean} disabled - disables the url link if equal to false
 */
const ProjectDisplay = ({iconName, projectName, description, github, url, disabled}) => {
    
    /** Returns the appropriate icon */
    function iconDisplay() {
        if (iconName === "faReact") {
            // Color = #00d8ff
            return <FontAwesomeIcon icon={faReact} size="4x"/>
        } 
        // else if (iconName === "faPhp") {
        //     // Color = #8993be
        //     return <FontAwesomeIcon icon={faPhp} size="4x"/>
        // }
    }

    /** Returns an active or disabled URL link depending on the disabled parameter*/
    function urlActive() {
        if (!disabled) {
            return <a href={url} target="_blank" rel="noreferrer"><ExportOutlined key="url" /></a>
        } else {
            return <ExportOutlined key="url" style={{cursor: 'not-allowed', fontSize: '14px'}}/>
        }
    }

    return (
        <Card
        hoverable
        actions={[
            <a href={github} target="_blank" rel="noreferrer"><GithubOutlined key="github" /></a>,
            urlActive()
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
