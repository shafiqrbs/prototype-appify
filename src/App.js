import React, { useState } from "react";
import { Grid, MantineProvider, createTheme, Select } from "@mantine/core";
import "@mantine/core/styles.css";
import NavbarSegmented from "./views/components/SideNavbar/NavbarSegmented";
import ResponsivePhone from "./views/components/ResponsivePhone";
import { Drawer } from "@mantine/core";
import CategoryCustomize from "./views/components/Customize/CategoryCustomize";
import Index from "./views/components/AppBar/Index";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "cyan",
});

function App() {
  const [selectAppBar, setSelectAppBar] = useState(false);
  const [selectAppBar2, setSelectAppBar2] = useState(false);
  const [selectAppBar3, setSelectAppBar3] = useState(false);
  const [selectedAppBarItem, setSelectedAppBarItem] = useState(null);

  const [isCategoryCustomizeOpen, setIsCategoryCustomizeOpen] = useState(false);

  // Function to update the selected AppBar item in the state
  const onItemClick = (item) => {
    setSelectedAppBarItem(item);
    setSelectAppBar(true);
    setIsCategoryCustomizeOpen(true);
  };

  const [selectNavBar, setSelectNavBar] = useState(false);
  const [selectNavBar2, setSelectNavBar2] = useState(false);
  const [selectNavBar3, setSelectNavBar3] = useState(false);
  const [selectedNavBarItem, setSelectedNavBarItem] = useState(null);

  // Function to update the selected Navbar item in the state
  const onNavBarItemClick = (item) => {
    setSelectedNavBarItem(item);
  };

  return (
    <MantineProvider theme={theme}>
      <Grid>
        <Grid.Col span={5}>
          <NavbarSegmented
            selectAppBar={selectAppBar}
            setSelectAppBar={setSelectAppBar}
            selectAppBar2={selectAppBar2}
            setSelectAppBar2={setSelectAppBar2}
            selectAppBar3={selectAppBar3}
            setSelectAppBar3={setSelectAppBar3}
            onItemClick={onItemClick}
            selectNavBar={selectNavBar}
            setSelectNavBar={setSelectNavBar}
            selectNavBar2={selectNavBar2}
            setSelectNavBar2={setSelectNavBar2}
            selectNavBar3={selectNavBar3}
            setSelectNavBar3={setSelectNavBar3}
            onNavBarItemClick={onNavBarItemClick}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <Select
            m="xs"
            placeholder="Pick value"
            data={["React", "Angular", "Vue", "Svelte"]}
            // defaultValue="React"
            clearable
          />
          <ResponsivePhone
            selectedAppBarItem={selectedAppBarItem}
            selectedNavBarItem={selectedNavBarItem}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          {selectAppBar ? (
            <Drawer
              title="Customize"
              opened={isCategoryCustomizeOpen}
              onClose={() => setIsCategoryCustomizeOpen(false)}
              position="right"
              size={350}
              transitionProps={{
                transition: "fade",
                duration: 1000,
                timingFunction: "linear",
              }}
            >
              <CategoryCustomize />
            </Drawer>
          ) : null}
          {/* <Index /> */}
        </Grid.Col>
      </Grid>
    </MantineProvider>
  );
}

export default App;
