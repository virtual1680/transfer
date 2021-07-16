<template>
  <div>
    <el-button type="primary" @click="dialogVisible=true">主要按钮</el-button>
    <q-transfer
      @page-change="listenerPageChange"
      @select-input-search="listenerSelectInputSearch"
      @data-change="listenerDataChange"
      :columnDate="columnDate"
      :rTotalPage="tableData.rTotalPage"
      :lTotalPage="tableData.lTotalPage"
      :leftData="tableData.leftData"
      :rightData="tableData.rightData"
      :selectData="options">
      <template v-slot:roleName="scope">
        <div>
          {{scope.data.roleName=='1'?'高手':'低手'}}
        </div>
      </template>
    </q-transfer>
  </div>
</template>

<script>

  import {reactive} from 'vue'

  export default {
    name: 'App',
    setup() {
      console.log("开始加载了---");

      //数据交换
      const tableData = reactive({
        rTotalPage: 0,
        lTotalPage: 0,
        leftData: [
          {id: '1', realName: '11111', phoneNo: '1234567809', roleName: '1', duty: '发电机房间'},
          {id: '2', realName: '22222', phoneNo: '1234567809', roleName: '2', duty: '发电机房间'},
          {id: '3', realName: '33333', phoneNo: '1234567809', roleName: '1', duty: '发电机房间'}
          ],
        rightData: [
          {id: '4', realName: '444444', phoneNo: '1234567809', roleName: '2', duty: '发电机房间'},
          {id: '5', realName: '555555', phoneNo: '1234567809', roleName: '1', duty: '发电机房间'},
          {id: '6', realName: '666666', phoneNo: '1234567809', roleName: '2', duty: '发电机房间'}
          ]
      });

      //分页事件
      const listenerPageChange = (val, type) => {
        /** 获取到选中的值，就可以进行你想要的操作了 */
        console.log(val, '我是返回的page数据', type)
      };
      //下拉框选择搜索事件,输入框搜索事件
      const listenerSelectInputSearch = (selectValue, inputValue, type) => {
        /** 获取到选中的值，就可以进行你想要的操作了 */
        console.log(selectValue, '====', inputValue, '我是返回的select/input数据', type);
        // 还可以根据selectValue 进行查询
        if (type === 'left') {
          //模拟查询
          let arr = [];
          tableData.leftData.forEach(item => {
            if (item.realName.includes(inputValue)) {
              arr.push(item)
            }
          });
          tableData.leftData = arr
        } else if (type === 'right') {
          //模拟查询
          let arr = [];
          tableData.rightData.forEach(item => {
            if (item.realName.includes(inputValue)) {
              arr.push(item)
            }
          });
          tableData.rightData = arr
        }
      };

      const listenerDataChange = (val, type) => {
        /** 获取到选中的值，就可以进行你想要的操作了 */
        console.log(val, '我是返回的data change数据', type);
        if (type === 'left-to-right') {
          //TODO 写自己的业务
          tableData.rightData = tableData.rightData.concat(val)
        } else if (type === 'right-to-left') {
          //TODO 写自己的业务
          tableData.leftData = tableData.leftData.concat(val)
        }
      };

      return {
        listenerDataChange,
        listenerSelectInputSearch,
        listenerPageChange,
        dialogVisible: false,
        options: [{label: '覃宏扬', value: '111'}],
        tableData,
        columnDate: [
          {fixed: true, prop: 'realName', label: '姓名', width: 70, custom: false},
          {fixed: false, prop: 'phoneNo', label: '电话', width: 100, custom: false},
          {fixed: false, prop: 'roleName', label: '角色', width: 100, custom: true},
          {fixed: false, prop: 'duty', label: '职务', width: 'auto', custom: false}
        ]
      }
    },


  }
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
