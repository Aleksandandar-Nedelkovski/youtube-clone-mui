import * as React from "react";
import PropTypes from "prop-types";
// import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { Avatar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const data = [
  {
    src:
      "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
    title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
    channel: "Don Diablo",
    views: "396k views",
    createdAt: "a week ago",
    avatar:
      "https://yt3.googleusercontent.com/etahisVx5iMKt2fjQON42yoTjKozyKzTddAN-UDY3Birqyu2uxwSca8X6zlWWLVAeHbqS9YMLg=s176-c-k-c0x00ffffff-no-rj-mo"
  },
  {
    src:
      "https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA",
    title: "Queen - Greatest Hits",
    channel: "Queen Official",
    views: "40M views",
    createdAt: "3 years ago",
    avatar:
      "https://yt3.googleusercontent.com/cd9orbsbTitlW-3z4Y_vCqS207DHj-YM5hjoFXmIjsEaok5h_wqc6JSVqTr8uG6P-uJIwdjC2w=s176-c-k-c0x00ffffff-no-rj-mo"
  },
  {
    src:
      "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
    title: "Calvin Harris, Sam Smith - Promises (Official Video)",
    channel: "Calvin Harris",
    views: "130M views",
    createdAt: "10 months ago",
    avatar:
      "https://yt3.googleusercontent.com/JJjT1CoNzVNbtv1Qt63VbtG46z-COxOgGio6kIoTle6UyjtV49SKudZIpsRBEBpBrI9Rf5Wu4A=s176-c-k-c0x00ffffff-no-rj-mo"
  }
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

function Media(props) {
  const { loading = false } = props;

  return (
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index} sx={{ width: 350, marginRight: 0.5, my: 5 }}>
          {item ? (
            <img
              style={{ width: 350, height: 200 }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}

          {item ? (
            <Grid container spacing={2}>
              <Grid xs={2}>
                <Avatar
                  sx={{ width: 36, height: 36 }}
                  alt={item.title}
                  src={item.avatar}
                />
              </Grid>
              <Grid xs={10}>
                <Box sx={{ pr: 2 }}>
                  <Typography gutterBottom variant="body2">
                    {item.title}
                  </Typography>
                  <Typography
                    display="block"
                    variant="caption"
                    color="text.secondary"
                  >
                    {item.channel}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {`${item.views} • ${item.createdAt}`}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool
};

export default function YouTube() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media />
    </Box>
  );
}
