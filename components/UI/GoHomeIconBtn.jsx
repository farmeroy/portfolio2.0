import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";

const GoHomeIconBtn = () => {
  return (
    <Button color="secondary">
      <Link href="/" passHref>
        <Image height={48} width={48} src="/R.svg" alt="go home button" />
      </Link>
    </Button>
  );
};

export default GoHomeIconBtn;
