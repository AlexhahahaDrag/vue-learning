var app = new Vue({
    el: '#wrap',
    data: {
        singer:'',
        songs:[]
    },
    methods:{
        findSongBySinger:function() {
            axios.get('https://autumnfish.cn/search?keywords=' + this.singer).then(function(res){
                console.log(res);
            }, function(error){})
        }
    }
})