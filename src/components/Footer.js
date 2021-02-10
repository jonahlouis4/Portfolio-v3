import React from 'react'
import { Typography } from 'antd'

const { Text } = Typography

const footerContainer = {
    padding: '25px'
}

const footerTitle = {
    padding: '0',
    color: 'white'
}

const Footer = () => {
    return (
        <div
        style={footerContainer}
        >
            <Text level={5} style={footerTitle}>Made by Jonah Louis &#169; with Ant Design + React</Text>
        </div>
    )
}

export default Footer
