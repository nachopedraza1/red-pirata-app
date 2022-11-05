import '../Components/NewItem.scss';
import { Button, Card, Col, Row } from "react-bootstrap";

export const NewItem = ({ tittle, img }) => {

    return (
        <Card className="border-0" style={{ width: '100%', height: '150px' }}>
            <Row className="h-100">
                <Col xs={3}>
                    <Card.Img crossorigin="anonymous" variant="top" src="" />
                </Col>
                <Col xs={9}>
                    <Card.Body>
                        <Card.Text className='truncate'> {tittle} </Card.Text>
                        {/* <Button variant="primary">Ver Mas</Button> */}
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}
