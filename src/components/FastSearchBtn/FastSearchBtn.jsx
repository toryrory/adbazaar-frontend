import Image from 'next/image';
import NewImg from '../../../public/fast-search/new.png'
import { Button } from './FastSearchBtn.styled';
export default function FastSearchBtn({icon, text, alt}) {
  return (
    <Button>
      {/* <Image
        src={NewImg}
        alt={alt}
        style={{
          backgroundColor: "var(--main-background)",
          width: 24,
          height: 24
        }}
      /> */}
      {text}
    </Button>
  );
}
