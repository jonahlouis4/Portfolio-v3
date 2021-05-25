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
        <div
        className="section-container"
        >
            <div
            style={{textAlign: 'center'}}
            >
                <Title className="section-header" id="contribution-header">My <span style={{fontWeight: '500'}}>Contributions</span></Title>
            </div>
        </div>
    )
}

export default Contribution
