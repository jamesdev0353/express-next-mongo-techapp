import Image from "next/image";

interface IProps {
  src: string | StaticImageData;
  height: string;
  width: string;
  alt: string;
}

const ImageComp = (props: IProps): JSX.Element => {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  );
};
export default ImageComp;
