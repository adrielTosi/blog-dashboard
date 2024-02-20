import { Box, Group } from "@mantine/core";
import { Navbar } from "../Navbar/navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Group align="flex-start">
      <Navbar />
      <Box flex="1">
        <Outlet />
      </Box>
    </Group>
  );
};
