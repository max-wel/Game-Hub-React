import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { type Platform } from "../hooks/useGames";
import type { ReactNode } from "react";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: ReactNode } = {
    pc: <FaWindows />,
    playstation: <FaPlaystation />,
    xbox: <FaXbox />,
    nintendo: <BsNintendoSwitch />,
    mac: <FaApple />,
    linux: <FaLinux />,
    android: <FaAndroid />,
    ios: <MdPhoneIphone />,
    web: <BsGlobe />,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} color="gray.500">
          {iconMap[platform?.slug] ?? <></>}
        </Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
