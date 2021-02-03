import React from 'react'
import { Card } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faPhp } from '@fortawesome/free-brands-svg-icons'
import { GithubOutlined, ExportOutlined } from '@ant-design/icons';

const { Meta } = Card;

const ProjectDisplay = ({iconName, projectName, description}) => {
    
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
            <GithubOutlined key="github" />,
            <ExportOutlined key="url" />
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
