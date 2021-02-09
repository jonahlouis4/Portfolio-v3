import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJsSquare, faAngular } from '@fortawesome/free-brands-svg-icons'
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
        style={{margin:'100px'}}
        >
            <div
            style={{textAlign:'center'}}
            >
                <Title style={sectionTitle}><span style={{fontWeight: '500'}}>Technologies</span> I've been working with</Title>
            </div>
            <div
            style={{paddingTop:'50px'}}
            >

            </div>
        </div>
    )
}

export default Technologies
