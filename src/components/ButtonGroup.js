// MUI importsr
import { Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ButtonDesign from "../tools/ButtonDesign";
import { margin } from "@mui/system";

export function ButtonGroup({ expandClick, collapseClick }) {
  const style123 = [{scale:0.8, marginRight:-1},
    ButtonDesign.getButtonStyle("purple", "blue", "white"),
  ];

  return (
    <>
      <Box width={"auto"} sx={{  width:825 }}>
        <Grid
          container
          direction={"row"}
          
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
        >
          <Button onClick={expandClick} sx={style123}>
            Expand
          </Button>
          <Button onClick={collapseClick} sx={style123}>
            Collapse
          </Button>
        </Grid>
      </Box>
    </>
  );
}
