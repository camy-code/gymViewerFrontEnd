// The following is my card imports
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

const GymCard = ()=> {
return <Card sx={{width:600, boxShadow:1}}>
    <CardActionArea>
    <CardContent>
      <h2>Monday</h2>
      <p>Time: 5:00 PM - 7:00 PM</p>
      <p>Location: Gym A</p>
      <p>Sport: Basketball</p>
    </CardContent>
    </CardActionArea>
</Card>
}
export default GymCard;