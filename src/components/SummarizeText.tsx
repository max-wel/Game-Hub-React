import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  maxChars: number;
}

const SummarizeText = ({ children, maxChars }: Props) => {
  const [isSummarized, setSummarized] = useState(true);
  const text = isSummarized
    ? children.substring(0, maxChars) + "..."
    : children;

  if (!children) return null;

  if (children.length < maxChars) return <Text>{children}</Text>;

  return (
    <>
      <Text>
        {text}
        <Button
          size="xs"
          marginInlineStart={3}
          colorPalette="yellow"
          fontWeight="bold"
          onClick={() => setSummarized(!isSummarized)}
        >
          {isSummarized ? "Show More" : "Show Less"}
        </Button>
      </Text>
    </>
  );
};

export default SummarizeText;
