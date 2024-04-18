import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const CardTwo = () => {
  return (
    <Card className="max-w-[345px] m-auto mt-2">
      <CardActionArea>
        <CardMedia
          component="img"
          image="/img/chat-imgs.jpeg"
          className="h-[400px]"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Private Chat Room
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            voluptatem earum, rem commodi mollitia itaque quos, unde, illum
            minima odio expedita cumque. Eius molestias impedit hic consequuntur
            asperiores, iusto nulla.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardTwo;
