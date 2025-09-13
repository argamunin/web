const CarouselItem = ({ imageSrc }) => {
  return (
    <div>
      <img src={require(imageSrc)} alt="" />
    </div>
  );
};

export default CarouselItem;
