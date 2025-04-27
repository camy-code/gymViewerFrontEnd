import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";


const myImage = () => {
    return <Box
    component="img"
    src="https://easydrawingart.com/wp-content/uploads/2022/09/how-to-draw-steve-from-minecraft-easy1.jpg"
    alt="Descriptive text"
    sx={{
      width: '500px',
        height: '500px',
      borderRadius: 30,
      border:"2px solid black",
    }}
  />
}

const About = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  const fillerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  

  return (
    <>
      <Box sx={{ padding: "25px" }}>
        {/* <BackButton onClick={handleBack} /> */}
      </Box>

      
        <Grid
          container
          direction="row"
          spacing={2}
          justifyContent={"center"}
         
          sx={{ height: "70vh" }}
        >
          
          <Grid container direction={"column"} sx={{width:"30%"}}>
          <Typography variant="h4">Hello!</Typography>
          <Typography variant="body" fontSize={25} sx={{lineHeight:1.5}}>{fillerText}</Typography>
            {/* Maybe add some links later */}
          </Grid>
        {myImage()}
        </Grid>
      
    </>
  );
};

export default About;
// I think this is how we do it