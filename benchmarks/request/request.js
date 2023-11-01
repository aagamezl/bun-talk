import { WEATHER_API_KEY } from '../config.js'
const URL = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=Malmo`

console.log(URL)

for (let i = 0; i < 5; i++) {
  fetch(URL).then((res) => res.json().then(data => {
    const { condition, temp_c, temp_f } = data.current;
    console.log(`You're getting ${condition.text}, at ${temp_c}C / ${temp_f}`);
  }))
}
