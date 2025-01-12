import { Box, Flex, darkTheme } from "@webstudio-is/design-system";
import { type Publish } from "~/shared/pubsub";
import { Breadcrumbs } from "./breadcrumbs";

export const Footer = ({ publish }: { publish: Publish }) => {
  return (
    <Flex
      className={darkTheme}
      as="footer"
      align="center"
      css={{
        gridArea: "footer",
        height: "$spacing$11",
        background: "$loContrast",
        boxShadow: "inset 0 1px 0 0 $colors$panelOutline",
      }}
    >
      <Box css={{ height: "100%", p: "$spacing$3" }}>
        <Breadcrumbs publish={publish} />
      </Box>
    </Flex>
  );
};
