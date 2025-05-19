import ColorPick from "../tools/ColorPick"

// The following are my MUI imports 
import Grid from "@mui/material/Grid2"
import {Box, Typography} from "@mui/material"
import { Searcher } from "../components/Searcher"
import { ButtonGroup } from "../components/ButtonGroup"
import GymCard from "../components/GymCard"
import { useState, useEffect, use } from "react"

const Home = () => {

    const [mList, setMList] = useState([]);
    // TODO: update this once you know your backend format is good.
    useEffect(() => {
        // Fetch the data from the API
        fetch('http://127.0.0.1:5000/activities').then(
            res => res.json()
        ).then(
            data => {
                console.log(data);
                setMList(data);
            }
        ).catch(
            err => {
                console.log("ERROR:")
                console.log(err)
            }
        )
    }, []);
 
    
    const tempArr = [
        {name:"Wednesday, April 30", 
            expand:false,
            activities:[
            {color:"#E0E0E0", gym:"red gym", sport:"hockey", time:"12-1pm"},
            {color:"#E0E0E0", gym:"red gym", sport:"hockey", time:"12-1pm"},
            {color:"#E0E0E0", gym:"red gym", sport:"hockey", time:"12-1pm"},   
        ]
    },

    ] // update later
    const [val, setVal] = useState(true); // Change this later
    // Above is just dummy date


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
            {tempArr.map((a, key,index)=>(
                <GymCard day={a.name} ActList={a.activities} val={val} setVal={(t)=>(setVal(t))}/>
            ))}
            </Grid>

            {/* step 4 */}
            <h1>Test</h1>
            <Grid container direction={"column"} spacing={5} sx={{marginTop:2, marginBottom:4}}>
            {mList.map((a, key,index)=>(
                <>
                <GymCard day={a.name} ActList={a.activities} val={val} setVal={(t)=>(setVal(t))}/>
                <h1>Hello</h1>
                </>
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