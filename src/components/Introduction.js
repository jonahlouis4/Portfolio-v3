import React from 'react'
import Typography from 'antd/lib/typography'
import Button from 'antd/lib/button'
import Avatar from 'antd/lib/avatar'
import Space from 'antd/lib/space'
import user from '../images/jonah-2-min.jpg'

const { Title } = Typography;

// Styles
const subHeaderTitle = {
    fontWeight: '400',
    marginBottom: '18px'
}

/** Introduction component - contains the introduction */
const Introduction = () => {
    return (
        <div
        className="introduction-container section-container"   
        >
            {/* Header */}
            <Title className="intro-header">Front-end web developer.</Title>
            {/* SubHeader */}
            <Title 
            level={3} 
            style={subHeaderTitle} 
            type="secondary"
            >
                I specialize in creating beautiful things for the web, & just love what I do.
            </Title>
            {/* Call to Action */}
            <div
            >
                <Space 
                size="middle"
                >
                <Button href="mailto:jonah_louis@outlook.com" size="large" >Get In Touch</Button>   
                </Space>
            </div>
            {/* Picture/Avatar */}
            <div 
            className="intro-avatar-container"
            >
                <Avatar
                    size={{ xs: 230, sm: 230, md: 230, lg: 230, xl: 230, xxl: 250 }}
                    src={user}
                    id="intro-avatar"
                />
            </div>
        </div>
    )
}

export default Introduction
