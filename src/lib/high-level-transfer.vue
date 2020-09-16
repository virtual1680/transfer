<template>
  <div class="content">
    <div class="left-content">
      <div class="left-box-card">
        <div class="left-title">
          <span>待选列表</span>
          <span style="float: right;color: #bbbbbb;">{{leftDataIng.length}}/{{leftData1.length}}项</span>
        </div>
        <div class="left-middle">
          <div style="padding:0 10px 10px 10px">
            <el-row>
              <el-col :style="selectData.length>0?'padding-right: 10px':''" :span="selectData.length>0?16:24">
                <el-input @input="leftInputSearch" size="small" placeholder="请输入姓名" v-model="leftSearchValue" clearable></el-input>
              </el-col>
              <el-col v-if="selectData.length>0" :span="8">
                <el-select @change="leftSelectChange" size="small" v-model="leftSelectValue" placeholder="请选择" :value="leftSelectValue">
                  <el-option v-for="item in selectData" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-col>
            </el-row>
          </div>
          <div style="padding: 0 10px">
            <el-table
              ref="lMultipleTable"
              @row-click="lToggleSelection"
              @selection-change="leftSelectionChange" size="small" :data="leftData1" style="width: 100%" height="400">
              <el-table-column type="selection" width="45"></el-table-column>
              <el-table-column v-for="item in columnDate" v-bind:key="item.id" :fixed="item.fixed" :prop="item.prop" :label="item.label" :width="item.width">
                <template slot-scope="scope">
                  <slot :name="item.prop" v-if="item.custom" :data="scope['row']"></slot>
                  <div v-else>{{scope.row[''+item.prop]}}</div>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div style="padding: 10px 10px 0 10px">
            <el-pagination
              small
              @current-change="leftCurrentChangeHandle"
              layout="prev, pager, next"
              :page-size="pageSize"
              :total="lTotalPage">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
    <div class="center-content">
      <div style="margin-right: 3px"><el-button icon="el-icon-arrow-left" @click="rightToLeft" circle></el-button></div>
      <div style="margin-left: 3px"><el-button icon="el-icon-arrow-right" @click="leftToRight" circle></el-button></div>
    </div>
    <div class="right-content">
      <div class="right-box-card">
        <div class="right-title">
          <span>已选列表</span>
          <span style="float: right;color: #bbbbbb;">{{rightDataIng.length}}/{{rightData1.length}}项</span>
        </div>
        <div class="right-middle">
          <div style="padding:0 10px 10px 10px">
            <el-row>
              <el-col :style="selectData.length>0?'padding-right: 10px':''" :span="selectData.length>0?16:24">
                <el-input @input="rightInputSearch" size="small" placeholder="请输入姓名" v-model="rightSearchValue" clearable></el-input>
              </el-col>
              <el-col v-if="selectData.length>0" :span="8">
                <el-select @change="rightSelectChange" size="small" v-model="rightSelectValue" placeholder="请选择" :value="rightSelectValue">
                  <el-option v-for="item in selectData" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-col>
            </el-row>
          </div>
          <div style="padding: 0 10px">
            <el-table
              ref="rMultipleTable"
              @row-click="rToggleSelection"
              @selection-change="rightSelectionChange" size="small" :data="rightData1" style="width: 100%" height="400">
              <el-table-column type="selection" width="45"></el-table-column>
              <el-table-column v-for="item in columnDate" v-bind:key="item.id" :fixed="item.fixed" :prop="item.prop" :label="item.label" :width="item.width">
                <template slot-scope="scope">
                  <slot :name="item.prop" v-if="item.custom" :data="scope['row']"></slot>
                  <div v-else>{{scope.row[''+item.prop]}}</div>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div style="padding: 10px 10px 0 10px">
            <el-pagination small :page-size="pageSize" @current-change="rightCurrentChangeHandle" layout="prev, pager, next" :total="rTotalPage"></el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'transfer-index',
    props:{
      columnDate:{type:Array},//表数据列的渲染
      leftData:{type:Array},//接收左边数据
      rightData:{type:Array},//接收左边数据
      selectData:{type:Array},//接收select数据
      rTotalPage:{type:Number},//接收总数据
      lTotalPage:{type:Number},//接收总数据
      pageSize:{type:Number,default:100}
    },
    watch: {
      leftData: {
          handler(newValue){
             this.leftData1 = newValue
          },
          deep:true
      },
      rightData: {
        handler(newValue){

          this.rightData1 = newValue
        },
        deep:true
      },
      rTotalPage: {
        handler(newValue){
          console.log(newValue)
          this.rTotalPage = newValue
        },
        deep:true
      },
      lTotalPage: {
        handler(newValue){
          console.log(newValue)
          this.lTotalPage = newValue
        },
        deep:true
      },
      pageSize: {
        handler(newValue){
          this.pageSize = newValue
        },
        deep:true
      }
    },
    data(){
      return {
        leftData1:[],//左边数据
        rightData1:[],//右边数据
        leftDataIng:[],//左边已选数据
        rightDataIng:[],//右边已选数据
        rightSearchValue:'',
        leftSearchValue:'',
        leftSelectValue:'',
        rightSelectValue:'',
      }
    },
    mounted(){
      this.leftData1 = this.leftData
      this.rightData1 = this.rightData
    },
    methods:{
      //分页事件
      leftCurrentChangeHandle(val){
        this.$emit('page-change', val,'left');
      },
      //分页事件
      rightCurrentChangeHandle(val){
        this.$emit('page-change', val,'right');
      },
      //左边表格数据选择
      leftSelectionChange(val){
        this.leftDataIng  = val
      },
      //左边点击某行选中数据
      lToggleSelection(rows) {
        if (rows) {
          this.$refs.lMultipleTable.toggleRowSelection(rows);
        } else {
          this.$refs.lMultipleTable.clearSelection();
        }
      },
      //右边表格数据选择
      rightSelectionChange(val){
        this.rightDataIng  = val
      },
      //右边点击某行选中数据
      rToggleSelection(rows) {
        if (rows) {
          this.$refs.rMultipleTable.toggleRowSelection(rows);
        } else {
          this.$refs.rMultipleTable.clearSelection();
        }
      },
      //从右到左事件
      rightToLeft(){
        let rIng = this.rightDataIng;
        this.$emit('data-change',rIng,'right-to-left')
      },
      //从左到右事件
      leftToRight(){
        let lIng = this.leftDataIng;
        this.$emit('data-change',lIng,'left-to-right')
      },
      //左边下拉框选择事件
      leftSelectChange (val) {
        this.$emit('select-input-search',val,this.leftSearchValue,'left')
      },
      //右边下拉框选择事件
      rightSelectChange (val) {
        this.$emit('select-input-search',val,this.rightSearchValue,'right')
      },
      //左边输入框change事件
      leftInputSearch (val) {
        this.$emit('select-input-search',this.leftSelectValue,val,'left')
      },
      //右边输入框change事件
      rightInputSearch (val) {
        this.$emit('select-input-search',this.rightSelectValue,val,'right')
      }
    }
  }
</script>

<style scoped>
  .content{
    display: flex;
    width: 100%;
    margin: 0 auto;
    justify-content: space-around;
  }
  .left-content,.right-content{
    width: 44%;
    display: inline-block;
  }
  .left-box-card,.right-box-card{
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border-radius: 4px;
    border: 1px solid #e6e9f0;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: .3s;
  }
  .left-title,.right-title{
    font-size: 13px;
    padding: 0 15px;
    height: 40px;
    line-height: 40px;
    background: #e5e5e5;
    border-bottom: 1px solid #d9d9d9;
  }
  .left-middle,.right-middle{
    padding: 10px;
  }
  /*center-content*/
  .center-content{
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

  }
</style>
