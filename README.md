# transfer

## Project setup
基于element-ui,自定义穿梭框，带下拉，输入框搜索分页

<HighLevelTransfer ```
    @page-change="listenerPageChange" ```
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
```
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
