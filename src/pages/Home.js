import ColorPick from "../tools/ColorPick"

// The following are my MUI imports 
import Grid from "@mui/material/Grid2"
import {Box, Typography} from "@mui/material"
import { Searcher } from "../components/Searcher"
import { ButtonGroup } from "../components/ButtonGroup"
import GymCard from "../components/GymCard"
import { useState } from "react"

const Home = () => {

    // TODO: define constants and shit here so you dont fall into same
    // trap of 481
    // const tempArr = [{name:"Monday"},{name:"Tuesday"},{name:"Tuesday"}] // update later
    const tempArr = [{name:"Monday"}] // update later

    const [val, setVal] = useState(false);


    return <>
    <Box>
        <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} >
            <Typography variant="h4" fontSize={40} sx={{marginTop:5}}>Open Gym Times</Typography>
            {/* step 1 */}
            <Box sx={{marginTop:3}}>
            <Searcher/>
            </Box>
            {/* step 2 */}
            <ButtonGroup/>

            {/* step 3 */}
            <Grid container direction={"column"} spacing={5} sx={{marginTop:2, marginBottom:4}}>
            {tempArr.map((key,index)=>(
                <GymCard val={val} setVal={(t)=>(setVal(t))}/>
            ))}
            </Grid>

        </Grid>
        </Box>
    </>
        
}

export default Home;
// I think this is how we do it

// Useful article on Box 
// https://mui.com/material-ui/react-box/?srsltid=AfmBOoq6lVkp410XmepUTrSB6ZMHQ6b-7_JVHiGst57I4P1kRnH2goLn