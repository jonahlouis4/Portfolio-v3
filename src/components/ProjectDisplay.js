import React from 'react'
import { Card } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faWordpress } from '@fortawesome/free-brands-svg-icons'

const { Meta } = Card;

const cardStyle = {
    width: 280,
    height: 260
    // boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
}

const ProjectDisplay = ({iconName, projectName, description}) => {
    
    function iconDisplay() {
        if (iconName === "faReact") {
            return <FontAwesomeIcon icon={faReact} size="6x" />
        } else if (iconName === "faWordpress") {
            return <FontAwesomeIcon icon={faWordpress} size="6x" />
        }
    }

    return (
        <Card
        hoverable
        style={cardStyle}
        
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
