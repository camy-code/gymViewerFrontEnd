// The following is my card imports
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, Collapse } from '@mui/material';

const GymCard = ({val, setVal})=> {

  

return <Card sx={{width:600, boxShadow:1}}>
    <CardActionArea onClick={()=>{setVal(!val)}}>
    <CardContent>
      <h2>Monday</h2>
      <p>Time: 5:00 PM - 7:00 PM</p>
      <p>Location: Gym A</p>
      <p>Sport: Basketball</p>
   {val}
   <Collapse in={val} timeout="auto" unmountOnExit>
   <h1>EXPAND!</h1>
   </Collapse>
    </CardContent>
    </CardActionArea>
</Card>
}
export default GymCard;