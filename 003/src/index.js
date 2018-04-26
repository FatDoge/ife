import san,{ DataTypes } from 'san';
require('./style.css')
//年龄初始值为0，隐藏的判断
var MyApp = san.defineComponent({
    template:` 
    <div>
        <input type="text" value="{= info.name =}" placeholder="姓名">
        <input type="text" value="{= Number(info.age)?Number(info.age):'' =}" placeholder="年龄">
        <input type="text" value="{= info.des =}" placeholder="简介">
        <div>
            信息:<button on-click="cleanInfo">移除信息</button>
        </div>
        <ul>
            <li>姓名:<span>{{info.name}}</span></li>
            <li>年龄:<span>{{Number(info.age)?Number(info.age):''}}</span></li>
            <li>简介:<span>{{info.des}}</span></li>
        </ul>  
    </div>

    `,
// info对象三个属性赋初值
    initData: function () {
        return {
            info:{
                name: '',
                age: 0,
                des: ''
            },
        };
    },
// 移除事件
    cleanInfo:function(){
        this.data.set('info.name','');
        this.data.set('info.age', 0);
        this.data.set('info.des', '');
    },
//数据校验    
    dataTypes: {
        name: DataTypes.string,
        age: DataTypes.number,
        des: DataTypes.string
    },
});


var myApp = new MyApp();
myApp.attach(document.body);