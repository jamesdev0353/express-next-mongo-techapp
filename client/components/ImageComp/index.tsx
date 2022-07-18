import Image from "next/image";

interface IProps {
  src: string | StaticImageData;
  height?: string;
  width?: string;
  alt?: string;
  cardImg?: string;
  onClick?: any;
}

const ImageComp = (props: IProps): JSX.Element => {
  return (
    <Image
      className={props.cardImg}
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  );
};
export default ImageComp;
