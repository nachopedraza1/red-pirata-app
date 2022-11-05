import Carousel from 'react-bootstrap/Carousel';

export const CarouselHome = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="assets\Banner-1shadow.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="assets\Banner-2shadow.png"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="assets\Banner-3shadow.png"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}