import React from 'react'
import Layout from 'antd/lib/layout';
import Typography from 'antd/lib/typography';
import Button from 'antd/lib/button';
import { Link } from 'react-router-dom'
import logo from '../images/_Logo.svg'
import background from '../images/_Intro-bg.svg'
import notFoundImg from '../images/_404.svg'

const { Header, Content } = Layout;
const { Title } = Typography;

const contentContainer = {
    textAlign: 'center',
    height: '100%',
    backgroundImage: `url(${background})`
}

const image = {
    width: '100%',
    maxWidth: '650px',
    height: 'auto',
    margin: '0 auto'
}

const messageHeader = {
    marginTop:'1.5rem',
    fontWeight: '100'
}

const PageNotFound = () => {
    return (
        <>
            <Layout style={{height:"100vh"}} >
                <Header>
                    <div
                    className="container"
                    >
                        <Link to="/">
                            <img src={logo} width='40' alt="Jonah's logo"/>
                        </Link>
                    </div>
                </Header>
                <Content>
                    <div
                    className="section-container notFound-content bg-container-0"
                    style={contentContainer}
                    >
                        <img src={notFoundImg} alt="404" style={image}/>
                        <Title
                        style={messageHeader}
                        >
                            Ooops! The page you're looking for doesn't exists.
                        </Title>
                        <Link to="/">
                            <Button size="large" type="primary">
                                Return Home
                            </Button>
                        </Link>
                    </div>
                </Content>
            </Layout>
        </>
    )
}

export default PageNotFound
