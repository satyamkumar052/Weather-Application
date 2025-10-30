import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";

export default function InfoBox({ info }) {
    let image_url = "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000";
    
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600";
    const COLD_URL = "https://images.unsplash.com/photo-1641672222794-536ad524a929?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600";
    const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600";


    const HOT_ICON = SunnyIcon;
    const COLD_ICON = AcUnitIcon;
    const RAIN_ICON = ThunderstormIcon;

    return(
        <div className='InfoBox'>
            <h1>Weather Info</h1>
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 , height : "32rem"}}>
                <CardMedia style={{ height : "12rem" }}
                    sx={{ height: 140 }}
                    image={ info.humidity>80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL }
                    title="green iguana"
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}&nbsp;&nbsp;
                    { info.humidity > 80 ? <RAIN_ICON/> : info.temp>15 ? <HOT_ICON/> : <COLD_ICON/> }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <p>Temperature = {info.temp}&deg;C</p>
                    <p>Humidity = {info.humidity}</p>
                    <p>Min Temp = {info.temp_min}&deg;C</p>
                    <p>Max Temp = {info.temp_max}&deg;C</p>
                    <p>The Weather can be described as <b>{info.weather}</b> and feels like <b><i>{info.feels_like}&deg;C</i></b></p>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            </div>
        </div>
        
    )
}