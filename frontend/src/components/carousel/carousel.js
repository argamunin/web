import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageComponent from "../shared/image/Image";
// import CarouselItem from "./carouselItem/carouselItem";

const CarouselComponent = ({ images }) => {
  /*
    <CarouselItem imageSrc={image} />
  */
  return (
    <div style={{ paddingTop: "40px" }}>
      <Carousel showThumbs={false}>
        {images ? (
          images.map((image, index) => {
            return (
              <div key={index}>
                <ImageComponent imageName={image} />
              </div>
            );
          })
        ) : (
          <div />
        )}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
