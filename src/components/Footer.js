// MUI imports
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

// Helper functions
import ColorPick from "../tools/ColorPick";
import HelperPages from "../tools/HelperPages";

const Footer = () => {
    const padVar = 1;

  return (
    <Box sx={{ backgroundColor: ColorPick.getPrimary(), flex: "auto" }}>
      <Grid
        container
        direction="column"
        sx={{
          justifyContent: "flex-start",
          alignItems: "center",
        }}
        paddingBottom={padVar}
        paddingTop={padVar}
      >
        <Typography>Hello</Typography>
        <Typography>Hello</Typography>
        <Typography>Hello</Typography>
        
      </Grid>
    </Box>
  );
};

export default Footer;

// TODO: work on this
