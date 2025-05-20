// the goal of this function is to be loading when we are fetching data
// We want this to be in the center of the page and blinking with a fade 
// in and out transtion.

// My MUI imports
import  Grid  from "@mui/material/Grid2";
import { Typography,Box } from "@mui/material";
const Loading = () => {
return <Box
sx={{
    animation: 'fadeBlink 2s ease-in-out infinite',
    '@keyframes fadeBlink': {
      '0%': { opacity: 1 },
      '50%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
}}
>
<Grid container justifyContent={"center"}>
 <Typography marginTop={5} variant="h3">Loading...</Typography>
</Grid>

</Box>

}
export default Loading;