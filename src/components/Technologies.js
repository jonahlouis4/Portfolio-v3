import React from 'react'
import Typography from 'antd/lib/typography';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import Divider from 'antd/lib/divider';
import { motion } from 'framer-motion'
import RightOutlined from '@ant-design/icons/RightOutlined'

const { Title } = Typography;

// Styles
const sectionTitle = {
    fontSize: '30px',
    fontWeight: '100',
    margin: '0',
    padding: '0'
}

const subTitle = {
    textAlign: 'center',
    marginBottom: '2rem'
}

const mainText = {
    fontSize: '20px',
    margin: '0.8rem 0',
    paddingLeft: '5px',
    display: 'inline'
}

const carret = {
    fontSize: '15px',
    color: '#2f54eb'
}

/** Returns formatted display of technologies */
const Technologies = () => {
    const TechDisplay = props => (
        <div
        style={{display:'block'}}
        >
            <RightOutlined 
            style={carret}
            />
            <p
            style={mainText}
            >
                { props.tech }
            </p>
            <Divider />
        </div>
    )

    return (
        <div
        className="section-container"
        >
            <div
            style={{textAlign:'center'}}
            >
                <Title style={sectionTitle}>
                    My Latest <span style={{fontWeight: '500'}}>Technologies</span>
                </Title>
            </div>
            <div
            style={{paddingTop:'75px'}}
            >
                <Row
                justify="center"
                gutter={[16, 48]}
                >
                    <Col 
                    xs={{ span:24 }} lg={{ span:10 }}
                    >
                        <Title level={3} style={subTitle}>Languages</Title>
                        <TechDisplay tech="HTML"/>
                        <TechDisplay tech="CSS"/>
                        <TechDisplay tech="JavaScript"/>
                        <TechDisplay tech="PHP"/>
                        <TechDisplay tech="Java"/>
                        <TechDisplay tech="C"/>
                        <TechDisplay tech="C++"/>
                    </Col>
                    <Col 
                    xs={{ span:24 }} lg={{ span:10 }}
                    >
                        <Title level={3} style={subTitle}>Frameworks & Libraries</Title>
                        <TechDisplay tech="React JS"/>
                        <TechDisplay tech="React Native"/>
                        <TechDisplay tech="Angular"/>
                        <TechDisplay tech="Gatsby"/>
                        <TechDisplay tech="Ionic"/>
                        <TechDisplay tech="Bootstrap"/>
                        <TechDisplay tech="Ant Design"/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Technologies
