import { Box } from "@mui/material"
import ColorPick from "../tools/ColorPick"


const Home = () => {
    return <Box sx={{
        height:200,
        bgcolor: ColorPick.getSecondary()
    }}><h1>Hello from home</h1></Box>
}

export default Home
// I think this is how we do it

// Useful article on Box 
// https://mui.com/material-ui/react-box/?srsltid=AfmBOoq6lVkp410XmepUTrSB6ZMHQ6b-7_JVHiGst57I4P1kRnH2goLn