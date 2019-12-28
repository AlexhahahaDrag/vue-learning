# vue-learning
a fish learn vue
announcements:
当使用vue的axios的时候，当需要给数据赋值的时候，我们不能直接用this.属性，去给属性赋值，我们需要做如下处理
var app = new Vue({
            el: '#app',
            data: {
                jokes: ['哈哈哈'],
                joke:''
            },
            methods:{
                findJoke:function(){
                    var that = this;
                    axios.get("https://autumnfish.cn/api/joke").then(function(res){
                        console.log(res.data);
                        that.joke = res.data;
                        that.jokes.push(res.data);
                    }, function(error){
                        console.log(error)
                    })
                }
            }
        })
