// MUI importsr
import { Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ButtonDesign from "../tools/ButtonDesign";
import { height, margin, width } from "@mui/system";

export function ButtonGroup({ expandClick, collapseClick }) {
  const style123 = [{height:50, width:150},
    ButtonDesign.getButtonStyle("#0D9488", "#0F766E", "white"),
  ];

  return (
    <>
      <Box width={"auto"} >
        <Grid
          container
          direction={"row"}
          
          justifyContent={"center"}
          alignItems={"center"}
          spacing={1}
          marginTop={2}
        >
          <Box>
          <Button onClick={expandClick} sx={style123}>
            Expand
          </Button>
          </Box>
          <Box>
          <Button onClick={collapseClick} sx={style123}>
            Collapse
          </Button>
          </Box>
        </Grid>
      </Box>
    </>
  );
}
