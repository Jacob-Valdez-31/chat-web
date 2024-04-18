import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";

const CardOne = () => {
  return (
    <Card className="max-w-[345px]  m-auto mt-2">
      <CardActionArea>
        <CardMedia
          component="img"
          image="/img/chat-gif.gif"
          className="h-[400px] border-b"
        />
        <CardContent>
          <h1>Open Chat Room</h1> Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Molestiae sequi enim, reiciendis dicta distinctio
          labore illum sunt reprehenderit ab cum eum atque deserunt velit porro?
          Porro consequatur expedita quam iure?
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
};

export default CardOne;
