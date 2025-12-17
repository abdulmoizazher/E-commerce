// ExampleCarouselImage.tsx
interface Props {
  text: string;
}

const CarouselImage = ({ text }: Props) => {
  return (
    <div style={{
      backgroundColor: '#34495e',
      color: 'white',
      height: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      width: '100%'
    }}>
      <img src={text} alt="" />
    </div>
  );
};

export default CarouselImage;