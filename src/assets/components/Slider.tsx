import { Carousel } from "react-bootstrap"
import CarouselImage from "./CaurouselImageg"

interface imageI {
    image : string,
    caption : string
}

interface imagesI {
    images : imageI[];
}

const Slider = ({images } : imagesI) => {
  return (

    
    <Carousel className="slider" interval={1200}>
        {
            images.map((image)=>(
                <Carousel.Item >
        <CarouselImage text= {image.image} />
        <Carousel.Caption>
            <h3>{image.caption}</h3>
         
            </Carousel.Caption>
            </Carousel.Item>
            ))
        }


      {/* <Carousel.Item >
        <CarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
         
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item >
        <CarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
         
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  )
}

export default Slider
