import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";

const GoHomeIconBtn = () => {
  return (
    <Button color="secondary">
      <Link href="/" passHref>
        <Image
          src="/R.svg"
          alt="Raffaele Cataldo Logo"
          width={140}
          height={32}
        />
      </Link>
    </Button>
  );
};

export default GoHomeIconBtn;
