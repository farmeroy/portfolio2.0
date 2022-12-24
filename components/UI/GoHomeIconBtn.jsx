import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";

const GoHomeIconBtn = () => {
  return (
    <Button color="secondary" edge="start">
      <Link href="/" passHref>
        <Image
          color="primary"
          src="/R.svg"
          alt="Raffaele Cataldo Logo"
          width={64}
          height={64}
        />
      </Link>
    </Button>
  );
};

export default GoHomeIconBtn;
