import React from "react";
import { Card, CardTitle, CardText, CardActions, Button } from "react-mdl";

const cardBlock = () => {
  return (
    <>
      <Card shadow={0} style={{ width: "auto", height: "320px", margin: "auto" }}>
        <CardTitle expand style={{ color: "#fff", background: "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC" }}>
          Update
        </CardTitle>
        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.</CardText>
        <CardActions border>
          <Button colored>View Updates</Button>
          <Button colored>View Updates</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default cardBlock;
