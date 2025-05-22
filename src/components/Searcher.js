import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import ButtonDesign from "../tools/ButtonDesign";
import { useEffect } from "react";

const mForm = ({sportList, value, setVal}) => {
  return (
    <>
      <FormControl fullWidth  sx={{ backgroundColor: "white", borderRadius: 2, border:"1px solid black"  }}
      >
        <InputLabel id="demo-simple-select-label" sx={{display:"none"}}>input</InputLabel>
        <Select
          
          id="demo-simple-select"
          value={value}
          
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
  useEffect(() => {searchFunc()}, [value]);

  return (
    <>
      <Box sx={{
        backgroundColor: "#374151",
        paddingLeft:15,
        paddingRight:15,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 2,
      }}>
        <Grid
          container
          direction={"column"}
          sx={{
            width: 600,
            
          }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant="h5" color="white">Activity: </Typography>
          <Box sx={{ width: "50%" }}>{mForm({sportList, value, setVal})}</Box>
          {/* <Button sx={ButtonDesign.getButtonStyle("#228891", "#196970", "white")} onClick={()=>searchFunc()}>
            Search
          </Button> */}
        </Grid>
      </Box>
    </>
  );
}
// TODO: make these colors in ColorPick or something so you can change look easily