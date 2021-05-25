import React from 'react'
import Typography from 'antd/lib/typography';

const { Title } = Typography;

// Styles
const sectionTitle = {
    fontSize: '30px',
    fontWeight: '100',
    color: 'white',
    margin: '0',
    padding: '0'
}

const Contribution = () => {
    return (
        <div>
            <div
            style={{textAlign: 'center'}}
            >
                <Title style={sectionTitle}>Some <span style={{fontWeight: '500'}}>Projects</span> I accomplished.</Title>
            </div>
        </div>
    )
}

export default Contribution
