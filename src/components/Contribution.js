import React from 'react'

import Row from 'antd/lib/row';
import Col from 'antd/lib/col'
import Typography from 'antd/lib/typography';
import Showcase from '../images/showcase-caremada.png'

const { Title } = Typography;

// Styles
const subHeader = {
    fontWeight: '100',
    textDecoration: 'underline',
    color: 'white',
    margin: '0',
    padding: '0'
}

const showcaseText = {
    color: 'white',
    fontWeight: '100',
    fontSize: '20px'
}

const Contribution = () => {
    return (
        <div
        className="section-container"
        >
            <div
            style={{textAlign: 'center'}}
            >
                <Title className="section-header" id="contribution-header">
                    My <span style={{fontWeight: '500'}}>Contributions</span>
                </Title>
            </div>
            <div
            style={{marginTop: '75px'}}
            className="contri-showcase-container"
            >
                <Title
                style={subHeader}
                level={3}
                >
                    Caramada - Task List Manager
                </Title>
                <Row
                align="middle"
                justify="center"
                style={{marginTop: '2rem'}}
                >
                    <Col
                    // style={{border:'1px solid orange'}}
                    xl={12}
                    >
                        <img src={Showcase} className="contri-image"/>
                    </Col>
                    <Col
                    // style={{border:'1px solid orange'}}
                    xl={6}
                    >
                        <p
                        style={showcaseText}
                        >
                            A task list manager and activity feed for the Caremada mobile application to aid 
                            local caregivers and their clients in managing, and viewing their appointments. 
                        </p>  
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Contribution
