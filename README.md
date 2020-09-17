# q-transfer

### Project setup
基于element-ui,自定义穿梭框，带下拉，输入框搜索分页

###安装
npm https://www.npmjs.com/package/q-transfer
```
npm install element-ui
npm install q-transfer
```
###使用
```
main.js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import QTransfer from 'q-transfer';
Vue.use(ElementUI);
Vue.use(QTransfer);

//简单使用
<q-transfer
    @page-change="listenerPageChange"
    @select-input-search="listenerSelectInputSearch"
    @data-change="listenerDataChange"
    :columnDate="columnDate"
    :rTotalPage="rTotalPage"
    :lTotalPage="lTotalPage"
    :leftData="leftData"
    :rightData="rightData"
    :selectData="options"
    :pageSize="50"
  ></q-transfer>

//自定义使用
  <q-transfer
      @page-change="listenerPageChange"
      @select-input-search="listenerSelectInputSearch"
      @data-change="listenerDataChange"
      :columnDate="columnDate"
      :rTotalPage="rTotalPage"
      :lTotalPage="lTotalPage"
      :leftData="leftData"
      :rightData="rightData"
      :selectData="options"
      :pageSize="50">
      <template slot="roleName" slot-scope="scope">
        <div>
          {{scope.data.roleName=='1'?'高手':'低手'}}
        </div>
      </template>
    </q-transfer>
--------------start----------
  fun listenerPageChange(page,type)
      params:
        1.page is current change page;
        2.type is left or right

  fun listenerSelectInputSearch(selectVal,inputVal,type)
      params:
        1.selectVal is select value
        2.inputVal is input value
        3.type is left or left

  fun listenerDataChange(selectVal,inputVal,type)
      params:
        1.selectVal is select value
        2.inputVal is input value
        3.type is left or left
  pageSize：paging query page num size
  columnDate：表头列的数据key
      1.如果需要自定义某一列，将 columnDate 中 custom 字段设置为true（列如：角色）
        a.然后在QTransfer中写入template（注意slot="roleName"的roleName要与columnDate中的prop的值一致）
      2.fixed 属性将该列定位（效果：不能左右滚动）
  selectData：传[]则不显示下拉选择框
-----------end-------------
  data(){
    return {
        rTotalPage:0,//右边数据的总条数
        lTotalPage:0,//左边数据的总条数
        leftData:[{id:'1',realName:'11111',phoneNo:'1234567809',roleName:'和借款方达还是靠',duty:'发电机房间'}],//左边数据
        rightData:[{id:'1',realName:'11111',phoneNo:'1234567809',roleName:'和借款方达还是靠',duty:'发电机房间'}],//右边数据
        columnDate:[
            {fixed:true,prop:'realName',label:'姓名',width:70,custom:false},
            {fixed:false,prop:'phoneNo',label:'电话',width:100,custom:false},
            {fixed:false,prop:'roleName',label:'角色',width:100,custom:true},
            {fixed:false,prop:'duty',label:'职务',width:100,custom:false}
        ],//表头
        options:[{value: '',label: '全部' }, {value: '1',label: '参会嘉宾'}, {value: '2',label: '服务志愿者'}]//下拉框数据
    }
  },
  methods:{
      //分页事件
      listenerPageChange (val,type) {
        console.log(val,'我是返回的page数据',type)
      },
      //下拉框选择搜索事件,输入框搜索事件
      listenerSelectInputSearch (selectValue,inputValue,type) {
        console.log(selectValue,'====',inputValue,'我是返回的select/input数据',type)
      },
      //数据交换
      listenerDataChange (val,type) {
        console.log(val,'我是返回的data change数据',type)
      },
    }
```
### 图片
![Alt text](https://github.com/QinHongYang/transfer/blob/master/WechatIMG26.png?raw=true)
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
