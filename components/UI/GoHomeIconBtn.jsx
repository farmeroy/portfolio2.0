import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";

const GoHomeIconBtn = () => {
  return (
    <Button color="secondary" sx={{ padding: "1rem" }}>
      <Link href="/" passHref>
        <Image height={58} width={58} src="/R.svg" alt="go home button" />
      </Link>
    </Button>
  );
};

export default GoHomeIconBtn;
