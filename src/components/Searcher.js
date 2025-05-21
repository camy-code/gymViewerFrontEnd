import { Box } from "@mui/material";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import ButtonDesign from "../tools/ButtonDesign";

const mForm = () => {
  return (
    <>
      <FormControl fullWidth sx={{ backgroundColor: "white", borderRadius: 2 }}>
        <InputLabel id="demo-simple-select-label">Sport</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={0}
          label="Age"
          onChange={() => console.log("change")}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export function Searcher({searchFunc}) {
  return (
    <>
      <Box sx={{
        backgroundColor: "#bbe5ed",
        paddingLeft:15,
        paddingRight:15,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 2,
      }}>
        <Grid
          container
          direction={"row"}
          sx={{
            width: 600,
          }}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box sx={{ width: 200 }}>{mForm()}</Box>
          <Button sx={ButtonDesign.getButtonStyle("#228891", "#196970", "white")} onClick={()=>searchFunc()}>
            Search
          </Button>
        </Grid>
      </Box>
    </>
  );
}
// TODO: make these colors in ColorPick or something so you can change look easily