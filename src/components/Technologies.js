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
        {id:1,name:"CSS"},
        {id:1,name:"PHP"},
        {id:1,name:"Java"},
        {id:1,name:"C/C++"},
    ])

    /** Holds all the frameworks */
    const [frameworks] = useState([
        {id:1, name:"Angular"},
        {id:1, name:"Gatsby"},
        {id:2,name:"Ionic"},
        {id:3,name:"Java FX"},
        {id:4,name:"Java Swing"},
    ])

    /**
     * Returns the appropriate logo
     * @param {string} name - name of technology being returned
     */
    const logoDisplay = (name) => {
        if (name === technologies[0].name) {
            return <FontAwesomeIcon icon={faJsSquare} size="6x" style={{color:"#434343"}}/>
        } else if (name === technologies[1].name) {
            return <FontAwesomeIcon icon={faReact} size="6x" style={{color:"#434343"}}/>
        } else if (name === technologies[2].name) {
            return <FontAwesomeIcon icon={faWordpress} size="6x" style={{color:"#434343"}}/>
        } else if (name === technologies[3].name) {
            return <FontAwesomeIcon icon={faBootstrap} size="6x" style={{color:"#434343"}}/>
        }
    }

    /** Displays all 'top' technologies */
    const topTechDisplay = technologies.map(tech => { return (
        <div 
        key={tech.id}
        >
            <Col>
                {logoDisplay(tech.name)}
                <Title level={5}>{ tech.name }</Title>
            </Col>
        </div>
    )})
    
    /** Displays all frameworks */
    const frameworkDisplay = frameworks.map(framework => { return (
        <div
        key={framework.id}
        >
            <CaretRightOutlined />
            <Text>{ framework.name }</Text><br />
        </div>
 
    )})

    /** Displays all languages */
    const languageDisplay = languages.map(language => { return (
        <div
        key={language.id}
        >
            <CaretRightOutlined />
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
                style={{marginTop:'50px'}}
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
