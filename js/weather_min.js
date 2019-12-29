var app = new Vue({
    el:'#app',
    data:{
        cities:['北京', '上海', '深圳', '广州'],
        city:'',
        weather:[]
    },
    methods: {
        searchWeather:function(p){
            var that = this;
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+p).then(function(response){
                that.weather = response.data.data.forecast;
            }, function(error){})
        }
    }
})