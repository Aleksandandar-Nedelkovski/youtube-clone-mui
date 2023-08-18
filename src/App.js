import "./styles.css";
import PrimarySearchAppBar from "./appbar";
import { Button, IconButton, Tooltip } from "@mui/material";
import YouTube from "./skeletonYouTube";
import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";

export default function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <section>
        <Tooltip title="Previous">
          <IconButton>
            <ChevronLeftOutlined />
          </IconButton>
        </Tooltip>
        <Button>All</Button>
        <Button variant="text">Ipsum</Button>
        <Button variant="text">Lorem</Button>
        <Button variant="text">Ipsum</Button>
        <Button variant="text">Lorem</Button>
        <Button variant="text">Ipsum</Button>
        <Button variant="text">Lorem</Button>
        <Button variant="text">Ipsum</Button>
        <Button variant="text">Lorem</Button>
        <Button variant="text">Ipsum</Button>
        <Tooltip title="Next">
          <IconButton>
            <ChevronRightOutlined />
          </IconButton>
        </Tooltip>
      </section>
      <section>
        <YouTube />
      </section>
    </div>
  );
}
