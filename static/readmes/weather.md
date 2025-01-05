# Weather Dashboard

An interactive weather dashboard with real-time updates and forecast visualization.

## Features

- Current weather conditions
- 5-day forecast
- Interactive weather maps
- Temperature graphs
- Wind speed and direction
- Precipitation forecast
- Location search
- Favorite locations
- Weather alerts
- Mobile responsive

## Tech Stack

- React
- OpenWeather API
- ChartJS for visualizations
- TailwindCSS
- Redux for state management
- Axios for API calls
- Geolocation API

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your OpenWeather API key to .env

# Start development server
npm start

# Build for production
npm run build
```

## Configuration

```javascript
// config.js
export default {
  apiKey: process.env.WEATHER_API_KEY,
  baseUrl: 'https://api.openweathermap.org/data/2.5',
  units: 'metric'
}
```

## License

MIT
