import React from "react";
import Box from "./component/Box/Box";
import Grid from "./component/Grid/Grid";

function App() {
  return (
    <div className="App" style={{margin: "26px"}}>
      <Grid container spacing="sm">
        <Grid item cols={6}>
          <Box>Box1</Box>
        </Grid>

        <Grid item cols={6}>
          <Box>Box2</Box>
        </Grid>

        <Grid item cols={6}>
          <Box>Box3</Box>
        </Grid>

        <Grid item cols={6}>
          <Box>Box4</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
