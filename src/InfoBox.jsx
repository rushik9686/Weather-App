import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./Weather.css"

export default function InfoBox({info}) {

    const IMG_URL = "https://freepngimg.com/thumb/weather/76815-forecasting-weather-forecast-icon-free-photo-png.png"
    const RAIN_URL = "https://th.bing.com/th/id/OIP.V5NRUPu_tkRJFp_Rl-FnyAHaHa?rs=1&pid=ImgDetMain";
    const WINT_URL = "https://getwallpapers.com/wallpaper/full/6/a/9/1173035-cold-weather-wallpaper-1920x1200-1080p.jpg";
    const SUM_URL = "https://th.bing.com/th/id/OIP.Se897JrgFbevCSci7iIbqgHaE6?rs=1&pid=ImgDetMain";

    return (
        <div className="InfoBox">
            <h3>Weather For Cast</h3>
            <div className="Info">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image= {info.humidity > 80 ? RAIN_URL : info.temp > 15 ? SUM_URL : WINT_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <h3>{info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}</h3> 
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Weather: {info.weather}</p>
                            <p>Temperature: {info.temp} &deg;C</p>
                            <p>Max Temperature: {info.tempMax} &deg;C</p>
                            <p>Min Temperature: {info.tempMin} &deg;C</p>
                            <p>Feels Like: {info.feelsLike} &deg;C</p>
                            <p>Humidity: {info.humidity}</p>
                            <p>Wind Speed: {info.windSpeed}</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}