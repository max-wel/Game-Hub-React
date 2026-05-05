import type { IconType } from "react-icons";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";

export const platformIconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: BsNintendoSwitch,
};

export const platformIdMap: { [key: string]: number } = {
  pc: 6,
  playstation: 48,
  xbox: 49,
  nintendo: 130,
};
