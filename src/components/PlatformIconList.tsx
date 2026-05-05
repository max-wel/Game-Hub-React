import { HStack, Icon } from "@chakra-ui/react";
// import { MdPhoneIphone } from "react-icons/md";
import type { Platform } from "../hooks/useGames";
import { platformIconMap } from "../services/platformIconMap";

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
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
        <Icon key={g} as={platformIconMap[g]} color="gray.500" />
      ))}
    </HStack>
  );
}

export default PlatformIconList;
