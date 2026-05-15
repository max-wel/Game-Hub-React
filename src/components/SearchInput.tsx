import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store/gameQueryStore";
import { useNavigate } from "react-router";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (ref) {
          setSearchText(ref.current?.value);
          navigate("/");
        }
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="subtle"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
