var weatherTest = new Vue({
  el: "#weatherApp",
  data: {
    city: '',
    weatherList: []
  },
  methods: {
    resarch() {
      console.log(this.city);
      var that = this;
      axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city).then(function (rec) {
        console.log(rec.data.data.forecast);
        that.weatherList = rec.data.data.forecast;
      })
    },
    selectCity(city) {
      this.city = city;
      this.resarch();
    }
  },
})