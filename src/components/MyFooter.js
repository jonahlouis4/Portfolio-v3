import React from 'react'

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button'
import Typography from 'antd/lib/typography'
import HeartFilled from '@ant-design/icons/HeartFilled'
import GithubFilled from '@ant-design/icons/GithubFilled'
import LinkedinFilled from '@ant-design/icons/LinkedinFilled'

const { Text } = Typography

const footerTitle = {
    padding: '0',
    color: 'hsla(0,0%,100%,.9)'
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
            <Row
            align="middle"
            gutter={[8, 12]}
            >
                <Col
                xs={24} sm={24} md={12}
                >
                    <Text level={5} style={footerTitle}>
                        Made with <HeartFilled style={heartColor}/> by Jonah Louis
                    </Text>
                </Col>
                <Col
                xs={24} sm={24} md={12}
                className="footer-icons"
                >
                    <a
                    href="https://github.com/jonahlouis4"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <Button type="link" className="footer-link" style={{marginRight:'0.5rem'}} icon={<GithubFilled/>} >Github </Button>
                    </a>
                    <a
                    href="https://www.linkedin.com/in/jonah-louis-3b71791b8/"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <Button type="link" className="footer-link" icon={<LinkedinFilled/>} >LinkedIn</Button>
                    </a>
                </Col>
            </Row>
            
        </div>
    )
}

export default MyFooter
