import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { Divider } from "@mui/material";
import { useState } from "react";
import YouTubeLogo from "./logo";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryIcon from "@mui/icons-material/History";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

const data = [
  { name: "Home", icon: <HomeOutlinedIcon /> },
  { name: "Shorts", icon: <SubscriptionsOutlinedIcon /> },
  { name: "Subscription", icon: <SubscriptionsOutlinedIcon /> },

  { name: "Library", icon: <VideoLibraryOutlinedIcon /> },
  { name: "History", icon: <HistoryIcon /> },
  { name: "Watch later", icon: <WatchLaterOutlinedIcon /> },
  { name: "Liked videos", icon: <ThumbUpOffAltIcon /> }
];

function ResponsiveDrawer() {
  const [open, setOpen] = useState(false);

  const getList = () => (
    <div style={{ width: 250 }} onClick={() => setOpen(false)}>
      {data.map((item, index) => (
        <ListItem button key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );
  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        <YouTubeLogo />
        {getList()}
        <Divider />
      </Drawer>
    </div>
  );
}

export default ResponsiveDrawer;
