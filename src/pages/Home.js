import ColorPick from "../tools/ColorPick"

// The following are my MUI imports 
import Grid from "@mui/material/Grid2"
import {Box, Typography} from "@mui/material"
import { Searcher } from "../components/Searcher"
import { ButtonGroup } from "../components/ButtonGroup"
import GymCard from "../components/GymCard"

const Home = () => {

    // TODO: define constants and shit here so you dont fall into same
    // trap of 481
    const tempArr = [{name:"Monday"},{name:"Tuesday"}] // update later

    return <>
    <Box>
        <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
            <Typography variant="h4" fontSize={40} sx={{marginTop:5}}>Open Gym Times</Typography>
            {/* step 1 */}
            <Searcher/>

            {/* step 2 */}
            <ButtonGroup/>

            {/* step 3 */}
            {tempArr.map((key,index)=>(
                <GymCard/>
            ))}

        </Grid>
        </Box>
    </>
        
}

export default Home;
// I think this is how we do it

// Useful article on Box 
// https://mui.com/material-ui/react-box/?srsltid=AfmBOoq6lVkp410XmepUTrSB6ZMHQ6b-7_JVHiGst57I4P1kRnH2goLn