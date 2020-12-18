import React from "react";
import Box from "./component/Box/Box";
import Grid from "./component/Grid/Grid";

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item>
          <Box>Box1</Box>
        </Grid>

        <Grid item>
          <Box>Box2</Box>
        </Grid>

        <Grid item>
          <Box>Box3</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
