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
### 事件
| 回调方法 | 返回参数 | 参数类型 | 触发说明 | 返回说明 |
|-------|-------|---------|-------|-------|
| `@page-change` | `(page,type)` | `(int,string)` | 点击左or右的分页页数 | (页数,left or right) |
| `@select-input-search` | `(selectVal,inputVal,type)` | `(any,string,string)` | 输入框输入及下拉选择(左or右) | (下拉选中值,输入框值,left or right) |
| `@data-change` | `(val,type)` | `([],string)` | 选中数据左移或右移 | (选中的数据,left-to-right or right-to-left) |
### 参数
| 参数名 | 参数类型 | 说明及注意事项 |
|-------|-------|-----------------------------|
| `columnDate` | `[]` | 表头渲染数据(1.fixed为true是当前列不能滑动，2.custom表示是否能自定义 3.custom为true时(角色为例)，可在QTransfer中写入template（注意slot="roleName"的roleName要与columnDate中的prop的值一致）) |
| `rTotalPage` | `number` | 右边表数据的总数(1.不需要分页时则传当前数据的长度即可) |
| `lTotalPage` | `number` | 左边表数据的总数(1.不需要分页时则传当前数据的长度即可) |
| `leftData` | `[]` | 左边表数据(1.字段需要与columnDate中prop的值一致) |
| `rightData` | `[]` | 右边表数据(1.字段需要与columnDate中prop的值一致) |
| `selectData` | `[]` | 左右下拉框的数据 |
| `pageSize` | `number` | 每一页的页数大小(1.默认100。2.不需要分页时传10000) |
### 图片
![Alt text](https://github.com/QinHongYang/transfer/blob/master/WechatIMG26.png?raw=true)
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
