import React from 'react'

import { Row, Col, Typography, Button, Avatar, Space } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import user from '../images/jonah.jpg'

const { Title } = Typography;

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

const colorFont = {
    color: '#1890ff',
    fontWeight: '500'
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
                    <Title style={headerTitle}>I'm Jonah,</Title>
                    <Title level={3} style={subHeaderTitle} type="secondary">
                        I love to <span style={colorFont}>learn</span> and <span style={colorFont}>build</span> things for the web.
                    </Title>
                    <div
                    style={{marginTop: '10px'}}
                    >
                        <Space size="small">
                            <Button href="mailto:jonah_louis@outlook.com">Contact me</Button>
                            <a href="https://github.com/jonahlouis4" target="_blank">
                                <Button shape="circle" icon={<GithubOutlined />} />
                            </a>
                        </Space>
                        
                    </div>
                    
                </Col>
                <Col 
                xl={6} 
                style={{ margin:'auto'}}
                className="intro-picture"
                >
                    <Avatar
                        size={{ xs: 180, sm: 180, md: 180, lg: 180, xl: 220, xxl: 250 }}
                        src={user}
                    />
                </Col>
            </Row> 
        </div>
    )
}

export default Introduction
