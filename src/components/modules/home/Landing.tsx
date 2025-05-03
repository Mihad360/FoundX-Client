import { Input } from "@heroui/input";
import { SearchIcon } from "../../icons";

const Landing = () => {
  return (
    <div className="h-screen bg-cover bg-center bg-[url('/glass.jpg')]">
      <h1>Found X</h1>
      <form action="">
        <Input
          className="w-96 mx-auto"
          placeholder="Search..."
          classNames={{ inputWrapper: "bg-default-100" }}
          endContent={<SearchIcon />}
        ></Input>
      </form>
    </div>
  );
};

export default Landing;
