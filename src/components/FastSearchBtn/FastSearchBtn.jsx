import Image from 'next/image';
import { Button } from './FastSearchBtn.styled';
import Link from 'next/link';

export default function FastSearchBtn({ icon, text, alt }) {

  return (
    <Link href={`/categories/${alt}`}>
    <Button>
      <Image
        src={icon}
        alt={alt}
        style={{
          backgroundColor: "var(--main-background)",
          width: 24,
          height: 24
        }}
      />
      {text}
      </Button>
     </Link>
  );
}
