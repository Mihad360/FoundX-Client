import Link from "next/link";
import FXModal from "./FXModal";
import { Button } from "@heroui/button";

const AuthencationModal = () => {
  return (
    <FXModal
      buttonText="Claim Item"
      modalTitle="Claim Item request"
      variant="faded"
    >
      <h1>You need to login or register first</h1>
      <Link href={`/register?redirect=found-items`}>
        <Button variant="faded">Register</Button>
      </Link>
      <Link href={`/login?redirect=found-items`}>
        <Button variant="faded">Login</Button>
      </Link>
    </FXModal>
  );
};

export default AuthencationModal;
