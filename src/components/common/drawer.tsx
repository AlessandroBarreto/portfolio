import * as React from "react";
import { useState } from "react";
import { IconButton, Box, Drawer } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

type Anchor = "top" | "left" | "bottom" | "right";

interface DrawerProps {
  anchor: Anchor;
  content: JSX.Element;
}

export default function TemporaryDrawer({ anchor, content }: DrawerProps) {
  const [state, setState] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      console.log(open);

      setState(open);
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {content}
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton>
          <MenuRoundedIcon fontSize="large" onClick={toggleDrawer(true)} />
        </IconButton>
        <Drawer anchor={anchor} open={state} onClose={toggleDrawer(false)}>
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
