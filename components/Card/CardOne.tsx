import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";

const CardOne = () => {
  return (
    <Card className="max-w-[345px]  md:h-[425px] mt-5">
      <CardMedia
        component="img"
        image="/img/chat-gif.gif"
        className="h-[200px] border-b"
      />
      <CardContent>
        <h1>Open Chat Room</h1> Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Molestiae sequi enim, reiciendis dicta distinctio
        labore illum sunt reprehenderit ab cum eum atque deserunt velit porro?
        Porro consequatur expedita quam iure?
      </CardContent>
    </Card>
  );
};

export default CardOne;
