// The following is my card imports
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, Collapse } from '@mui/material';

// Other MUI imports here
import Grid from "@mui/material/Grid2"
import {Box, Typography} from "@mui/material"

// Icons
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// This will get the block for a schedule item
  // TODO: change so then the height can adjust for time?
const getBlock = (color, gym, sport, time) => {
return <Box sx={{width:"90%",height:"auto", backgroundColor:color, borderRadius:2, padding:2, marginTop:2}}>
<Grid container direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
  <Typography>{gym}</Typography>
  <Typography>{sport}</Typography>
  <Typography>{time}</Typography>

</Grid>
</Box>
}

const GymCard = ({day,ActList,val, setVal})=> {

return <Card sx={{width:600, boxShadow:1}}>
    <CardActionArea onClick={()=>{setVal(!val)}}>
    <CardContent>
      <Grid container direction={"row"} justifyContent={"space-between"}>
        <Typography variant='h4'>{day}</Typography>
        <Box sx={{scale:2, marginTop:1}}>{val ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}</Box>

      </Grid>


   {val}
   <Collapse in={val} timeout="auto" unmountOnExit>
  <Grid direction={"column"} justifyContent={"flex-start"} alignItems={"center"} sx={{marginTop:2}}>
  
  {ActList.map((a, key,index)=>(
    getBlock(a.color, a.gym, a.sport, a.time)
  ))}

  {/* Make sure to map these later */}

  </Grid>
   </Collapse>
    </CardContent>
    </CardActionArea>
</Card>
}
export default GymCard;