// MUI imports
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

// Helper functions
import ColorPick from "../tools/ColorPick";
import HelperPages from "../tools/HelperPages";

import { useNavigate } from "react-router-dom";

const FootButton = ({location, name}) => {
  const navigate = useNavigate();
  return <Button onClick={()=>navigate( location)}><Typography color="black">{name}</Typography></Button>
  
}

const Footer = () => {
  const padVar = 1;

  // The box here is what allows us to make sure the footer slides all the way down
  return (
    <Box sx={{ backgroundColor:"white" }}>
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
        <Typography>My dummy website</Typography>
        <Grid
          container
          direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {HelperPages.getPublicPages().map( (page) => (
            <FootButton location={page.path} name={page.name}/>
            
          ))}
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

// TODO: work on this
