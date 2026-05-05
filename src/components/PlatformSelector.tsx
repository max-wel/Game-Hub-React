import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { platformIdMap } from "../services/platformIconMap";
import { useState } from "react";

interface Props {
  onSelectPlatform: (id: number) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const [platform, setPlatform] = useState<string | null>(null);
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {platform
            ? platform[0]?.toUpperCase() + platform.substring(1)
            : "Platforms"}{" "}
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {Object.keys(platformIdMap).map((platform) => (
              <Menu.Item
                key={platform}
                value={platform}
                onSelect={() => {
                  setPlatform(platform);
                  onSelectPlatform(platformIdMap[platform]);
                }}
              >
                {platform}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
