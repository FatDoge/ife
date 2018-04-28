import san from 'san';
import './style.css'
var MyApp=san.defineComponent({
    template:`
    <div class="{{toggle?'change':'old'}}" on-click="changeStyle"></div>
    `,
    initData(){
        return {
            toggle:false
        }
    },
    changeStyle:function(){
        console.log('更改样式');
        let toggle=this.data.get('toggle');
        this.data.set('toggle',!toggle);
    }
})
var myApp=new MyApp();
myApp.attach(document.body);