import { HStack, Icon } from "@chakra-ui/react";
import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa";
// import { MdPhoneIphone } from "react-icons/md";
import { BsNintendoSwitch } from "react-icons/bs";
import type { Platform } from "../hooks/useGames";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
  };
  const platformGroupMap: { [key: number]: string } = {
    // PC
    6: "pc",

    // PlayStation
    48: "playstation",
    167: "playstation",
    9: "playstation",

    // Xbox
    49: "xbox",
    169: "xbox",
    12: "xbox",

    // Nintendo
    130: "nintendo",
    137: "nintendo",
    41: "nintendo",
  };
  const uniqueGroups = [
    ...new Set(platforms.map(({ id }) => platformGroupMap[id]).filter(Boolean)),
  ];

  return (
    <HStack>
      {uniqueGroups.map((g) => (
        <Icon key={g} as={iconMap[g]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
