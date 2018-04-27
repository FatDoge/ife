import san from 'san';
import "./style.css"
var MyApp=san.defineComponent({
    template:`
    <div>
        <button on-click="addListItem" class="addBtn">添加</button>
        <table border="1">
            <tr>
                <th>姓名</th>
                <th>审核状态</th>
                <th>操作</th>
            </tr>
            <tr s-for="listItem,index in list">
                <td>{{listItem.name}}</td>
                <td s-if="listItem.status===0">合格</td>
                <td s-elif="listItem.status===1">不合格</td>
                <td s-elif="listItem.status===2">待审核</td>
                <td s-if="listItem.op===0"><button on-click="deleteListItem(index)">删除</button></td>
                <td s-elif="listItem.op===1"><button on-click="judgeListItem(index)">审核</button></td>
            </tr>
        </table>
    </div>
    `,
    //初始数据
    initData:function(){
        return {
            list:[{
                name:'张三',
                status:0,
                op:0
            },
                {
                    name: '李四',
                    status: 1,
                    op: 0
                },
                {
                    name: '王五',
                    status: 2,
                    op: 1
                },
                {
                    name: '赵六',
                    status: 2,
                    op: 1
                },
                {
                    name: '孙七',
                    status: 2,
                    op: 1
                }]
        }
    },
    //数组操作方法
    addListItem:function(){
        this.data.push('list',{name:'new',status:2,op:1});
    },
    //利用索引删除数据
    deleteListItem:function(index){
        this.data.removeAt('list',index);
    },
    //利用索引更改数据，传入了index所以使用字符串模板
    judgeListItem:function(index){
        this.data.set(`list[${index}].op`,0);
        this.data.set(`list[${index}].status`,0);
    }
})
var myApp=new MyApp();
myApp.attach(document.body)