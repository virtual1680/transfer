<template>
    <div id="app">
      <el-button type="primary" @click="dialogVisible=true">主要按钮</el-button>

      <el-dialog :close-on-click-modal="false" width="70%" title="添加人员" :visible.sync="dialogVisible">
        <HighLevelTransfer
          @page-change="listenerPageChange"
          @select-input-search="listenerSelectInputSearch"
          @data-change="listenerDataChange"
          :columnDate="columnDate"
          :rTotalPage="rTotalPage"
          :lTotalPage="lTotalPage"
          :leftData="leftData"
          :rightData="rightData"
          :selectData="options"/>
      </el-dialog>
    </div>
</template>

<script>
  import HighLevelTransfer from './lib'
export default {
  name: 'app',
  components: {
    HighLevelTransfer
  },
  data(){
    return {
      dialogVisible: false,
      tableData: [],
      rTotalPage:0,
      lTotalPage:0,
      leftData:[{id:'1',realName:'11111',phoneNo:'1234567809',roleName:'和借款方达还是靠',duty:'发电机房间'}],
      rightData:[{id:'1',realName:'11111',phoneNo:'1234567809',roleName:'和借款方达还是靠',duty:'发电机房间'}],
      columnDate:[
        {fixed:true,prop:'realName',label:'姓名',width:70},
        {fixed:false,prop:'phoneNo',label:'电话',width:100},
        {fixed:false,prop:'roleName',label:'角色',width:100},
        {fixed:false,prop:'duty',label:'职务',width:100}
      ]
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
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
