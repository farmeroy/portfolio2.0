import Link from "next/link";
import { Button } from "@mui/material";

const GoHomeIconBtn = () => {
  return (
    <Button color="secondary">
      <Link href="/" passHref>
        <img src="/R.svg" alt="go home button" className="padding: 2rem;" />
      </Link>
    </Button>
  );
};

export default GoHomeIconBtn;
