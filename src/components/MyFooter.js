import React from 'react'
import HeartFilled from '@ant-design/icons/HeartFilled'
import Typography from 'antd/lib/typography'

const { Text } = Typography

const footerTitle = {
    padding: '0',
    color: 'white'
}

const heartColor = {
    color: '#ff7875'
}

/** Footer component of the website */
const MyFooter = () => {
    return (
        <div
        className="footer-container"
        >
            <Text level={5} style={footerTitle}>Made with <HeartFilled style={heartColor}/> by Jonah Louis</Text>
        </div>
    )
}

export default MyFooter
