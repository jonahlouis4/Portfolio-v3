import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJsSquare, faWordpress, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { Typography, Col, Row } from 'antd';

const { Title } = Typography;

const sectionTitle = {
    fontSize: '30px',
    fontWeight: '100',
    margin: '0',
    padding: '0'
}

const Technologies = () => {
    return (
        <div
        style={{margin:'150px 0'}}
        >
            <div
            style={{textAlign:'center'}}
            >
                <Title style={sectionTitle}><span style={{fontWeight: '500'}}>Technologies</span> I've been working with</Title>
            </div>
            <div
            style={{paddingTop:'50px', border: '1px solid red'}}
            >
                {/* Top 4 technologies */}
                <Row
                justify="space-between"
                style={{textAlign:'center'}}
                >
                    <Col>
                        <FontAwesomeIcon icon={faJsSquare} size="6x" style={{color:"#434343"}}/>
                        <Title level={5}>JavaScript</Title>
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faReact} size="6x" style={{color:"#434343"}}/>
                        <Title level={5}>React JS</Title>
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faWordpress} size="6x" style={{color:"#434343"}}/>
                        <Title level={5}>Wordpress</Title>
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faBootstrap} size="6x" style={{color:"#434343"}}/>
                        <Title level={5}>Boostrap</Title>
                    </Col>
                </Row>
                {/* Other technologies and libraries/framework  */}
                <Row>
                    
                </Row>
            </div>
        </div>
    )
}

export default Technologies
