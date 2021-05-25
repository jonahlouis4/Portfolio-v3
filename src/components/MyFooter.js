import React from 'react'

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Divider from 'antd/lib/divider';
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
            <Row>
                <Col
                xs={24} sm={24} md={12}
                style={{border:'1px solid red'}}
                >
                    <Text level={5} style={footerTitle}>
                        Made with <HeartFilled style={heartColor}/> by Jonah Louis
                    </Text>
                </Col>
                <Col
                xs={24} sm={24} md={12}
                style={{border:'1px solid red'}}
                className="footer-icons"
                >
                    <Text level={5} style={footerTitle}>
                        Made with <HeartFilled style={heartColor}/> by Jonah Louis
                    </Text>
                </Col>
            </Row>
            
        </div>
    )
}

export default MyFooter
