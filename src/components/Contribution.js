import React from 'react'

import Row from 'antd/lib/row';
import Col from 'antd/lib/col'
import Typography from 'antd/lib/typography';
import Button from 'antd/lib/button';
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
                <Row
                align="middle"
                justify="center"
                style={{marginTop: '2rem'}}
                >
                    <Col
                    xl={14}
                    >
                        <img src={Showcase} className="contri-image"/>
                    </Col>
                    <Col
                    xl={12}
                    style={{textAlign:'center'}}
                    >
                        <Title
                        style={subHeader}
                        level={3}
                        >
                        Caramada - Task List Manager
                        </Title>
                        <p
                        style={showcaseText}
                        >
                            A task list manager and activity feed for the Caremada mobile application to aid 
                            local caregivers and their clients in managing, and viewing their appointments. 
                        </p>  
                        <Button>
                            <a 
                            href="https://www.algonquincollege.com/arie/2021/03/caremada-task-list-and-activity-feed/"
                            target="_blank"
                            >
                                Read More
                            </a>
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Contribution
