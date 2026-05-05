import type { IconType } from "react-icons";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";

export const platformIconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: BsNintendoSwitch,
};
