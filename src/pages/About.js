import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";


const myImage = () => {

    

    return <Box
    component="img"
    src="https://i.ibb.co/0jP8RPHT/Screenshot-2025-05-21-at-6-32-15-PM.png"
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
  const text = "My name is Cam and I am going into my fifth year of CPSC at the UofC this September. I only use the gym facilities at UofC for one thing only and it is my favourite thing in the whole world… FLOOR HOCKEY! Unfortunately, the open gym viewer is just a spreadsheet that is hard to navigate for me. Whenever I find a row I want and look horizontally to other columns I always go one column up or down! In lieu of this, I made a schedule viewer that reads that website and puts it into a more readable format. If I were to work on this furtherly I would add more advance search features but that is not for today."

  return (
    <>
     <Box sx={{   animation: 'fadeIn 1s ease-in forwards',
        '@keyframes fadeIn': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },}}>
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
          <Typography variant="body" fontSize={25} sx={{lineHeight:1.5}}>{text}</Typography>
            {/* Maybe add some links later */}
          </Grid>
        {myImage()}
        </Grid>
        </Box>
    </>
  );
};

export default About;
// I think this is how we do it