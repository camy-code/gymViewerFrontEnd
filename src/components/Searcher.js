import { Box } from "@mui/material";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import ButtonDesign from "../tools/ButtonDesign";

const mForm = ({sportList, value, setVal}) => {
  return (
    <>
      <FormControl fullWidth sx={{ backgroundColor: "white", borderRadius: 2 }}>
        <InputLabel id="demo-simple-select-label">Sport</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={(SelectChangeEvent) => setVal(SelectChangeEvent.target.value)}
        >
          
          {sportList.map((sport, index) => (
            <MenuItem key={index} value={index}>
              {sport}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export function Searcher({searchFunc, sportList, value, setVal}) {
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
          <Box sx={{ width: 200 }}>{mForm({sportList, value, setVal})}</Box>
          <Button sx={ButtonDesign.getButtonStyle("#228891", "#196970", "white")} onClick={()=>searchFunc()}>
            Search
          </Button>
        </Grid>
      </Box>
    </>
  );
}
// TODO: make these colors in ColorPick or something so you can change look easily