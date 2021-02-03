import React from 'react'
import { Row, Col, Typography, Button, Avatar } from 'antd'
import user from '../images/jonah.jpg'

const { Title, Text } = Typography;

const headerTitle = {
    fontSize: '56px',
    fontWeight: '500',
    margin: '0',
    padding: '0'
}

const subHeaderTitle = {
    fontWeight: '400',
    margin: '0',
    padding: '0'
}

const Introduction = () => {
    return (
        <div
        style={{margin: '200px 0'}}
        className="introduction-container"
        >
            <Row>
                <Col 
                xl={18} 
                style={{ margin:'auto'}}
                >
                    <Title style={headerTitle}>I'm Jonah.</Title>
                    <Title level={3} style={subHeaderTitle} type="secondary">Lorem ipsum dolor sit amet, consectetur.</Title>
                    <Button style={{marginTop: '10px'}} >Start a project</Button>
                </Col>
                <Col 
                xl={6} 
                style={{ margin:'auto'}}
                className="intro-picture"
                >
                    <Avatar
                        size={{ xs: 180, sm: 180, md: 180, lg: 180, xl: 220, xxl: 250 }}
                        src={user}
                    />,
                </Col>
            </Row> 
        </div>
    )
}

export default Introduction
