# transfer

## Project setup
基于element-ui,自定义穿梭框，带下拉，输入框搜索分页
```
<HighLevelTransfer
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
  />

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
  pageSize:paging query page num size


  data(){
    return {
        rTotalPage:0,//右边数据的总条数
        lTotalPage:0,//左边数据的总条数
        leftData:[{id:'1',realName:'11111',phoneNo:'1234567809',roleName:'和借款方达还是靠',duty:'发电机房间'}],//左边数据
        rightData:[{id:'1',realName:'11111',phoneNo:'1234567809',roleName:'和借款方达还是靠',duty:'发电机房间'}],//右边数据
        columnDate:[
            {fixed:true,prop:'realName',label:'姓名',width:70},
            {fixed:false,prop:'phoneNo',label:'电话',width:100},
            {fixed:false,prop:'roleName',label:'角色',width:100},
            {fixed:false,prop:'duty',label:'职务',width:100}
            ],//表头
        options:[{value: '',label: '全部' }, {value: '1',label: '参会嘉宾'}, {value: '2',label: '服务志愿者'}]//下拉框数据
    }
  },

```
https://github.com/QinHongYang/transfer/blob/master/WeChat425f555c9c4114b679e07c56dcdabbed.png?raw=true
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
