import React, { useState } from 'react'

import { Typography, Col, Row, Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJsSquare, faWordpress, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { CaretRightOutlined } from '@ant-design/icons'

const { Title,Text } = Typography;

const sectionTitle = {
    fontSize: '30px',
    fontWeight: '100',
    margin: '0',
    padding: '0'
}

const logoColorDefault = {
    color:'#434343'
}

const carretColor = {
    color: '#1890ff'
}

const Technologies = () => {
    /** Contains all top tech. names */
    const [technologies] = useState([
        {id: 1, name: "JavaScript"},
        {id: 2, name: "React JS"},
        {id: 3, name: "Wordpress"},
        {id: 4, name: "Boostrap"}
    ])

    /** Holds all the languages */
    const [languages] = useState([
        {id:1,name:"HTML"},
        {id:2,name:"CSS"},
        {id:3,name:"PHP"},
        {id:4,name:"Java"},
        {id:5,name:"C/C++"},
    ])

    /** Holds all the frameworks */
    const [frameworks] = useState([
        {id:1, name:"Angular"},
        {id:2, name:"Gatsby"},
        {id:3,name:"Ionic"},
        {id:4,name:"Java FX"},
        {id:5,name:"Java Swing"},
    ])

    /**
     * Returns the appropriate logo
     * @param {string} name - name of technology being returned
     */
    const logoDisplay = (name) => {
        if (name === technologies[0].name) {
            return <FontAwesomeIcon icon={faJsSquare} size="6x" style={logoColorDefault}/>
        } else if (name === technologies[1].name) {
            return <FontAwesomeIcon icon={faReact} size="6x" style={logoColorDefault}/>
        } else if (name === technologies[2].name) {
            return <FontAwesomeIcon icon={faWordpress} size="6x" style={logoColorDefault}/>
        } else if (name === technologies[3].name) {
            return <FontAwesomeIcon icon={faBootstrap} size="6x" style={logoColorDefault}/>
        }
    }

    /** Displays all 'top' technologies */
    const topTechDisplay = technologies.map(tech => { return (
        <Col
        xs={{span:12}} sm={{span:12}} md={{span:6}} lg={{span:6}} xl={{span:6}}
        key={tech.id}
        >
            {logoDisplay(tech.name)}
            <Title level={5}>{ tech.name }</Title>
        </Col>
    )})
    
    /** Displays all frameworks */
    const frameworkDisplay = frameworks.map(framework => { return (
        <div
        key={framework.id}
        >
            <CaretRightOutlined style={carretColor}/>
            <Text>{ framework.name }</Text><br />
        </div>
 
    )})

    /** Displays all languages */
    const languageDisplay = languages.map(language => { return (
        <div
        key={language.id}
        >
            <CaretRightOutlined style={carretColor}/>
            <Text>{ language.name }</Text><br />
        </div>
 
    )})

    return (
        <div
        style={{margin:'125px 0'}}
        >
            <div
            style={{textAlign:'center'}}
            >
                <Title style={sectionTitle}><span style={{fontWeight: '500'}}>Technologies</span> I've been working with</Title>
            </div>
            <div
            style={{paddingTop:'75px'}}
            >
                {/* Top 4 technologies I use */}
                <Row
                justify="space-between"
                style={{textAlign:'center'}}
                >
                    { topTechDisplay }
                </Row>
                {/* Other technologies and libraries/framework  */}
                <Card
                style={{marginTop:'50px', cursor:'default'}}
                >
                    <Card.Grid className='gridStyle'>
                        <Title level={5}>Other languages</Title>
                        { languageDisplay }
                    </Card.Grid>
                    <Card.Grid className='gridStyle'>
                        <Title level={5}>Other frameworks</Title>
                        { frameworkDisplay } 
                    </Card.Grid>        
                </Card>
            </div>
        </div>
    )
}

export default Technologies
