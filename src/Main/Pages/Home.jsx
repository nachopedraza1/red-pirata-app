import { Col, Container, Row } from 'react-bootstrap'
import { CarouselHome, NewsContainer, TwitterContainer } from '../Components'

export const Home = () => {

    return (
        <>
            <CarouselHome />
            <Container fluid="xxl">
                <Row className='justify-content-center gap-3 mt-3'>
                    <Col xs={12} md={7} className="bg-white rounded">
                        <NewsContainer />
                    </Col>
                    <Col xs={12} md={3} className="bg-white rounded">
                        <TwitterContainer />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
