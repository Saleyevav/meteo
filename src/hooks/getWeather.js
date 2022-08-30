import { ref, watch } from "vue";

export function getWeather(city) {
  const data = ref({ weather: "облачно" });
  const cityName = ref(city);

  watch(city, (newValue, oldValue) => {
    alert("hook!!");
    console.log("Новое значение cityName: " + cityName.value);
  });

  return {
    data,
  };
}
