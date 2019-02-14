## Project setup
#todolist

##项目描述

```
这是一个待办事项和已完成事项的demo。写这个demo的目的，是为了帮自己更好的理解数据的双向绑定。
```
##遇到的问题

 ```
  页面选中对应的待办事项以后，下一个元素也会被选中，这里我们用prevent来阻止点击事件的默认行为
  <div class="daiban-item">
      <input type="checkbox" @click.prevent="daibanClick(index)">
      <input type="text" :value="item">
  </div>
  ```
  
##注意事项

```
我们点击一个待办事项，就会有对应的已办事项出现，需要用到索引值，才能达到想要的效果
daibanClick(index) {
      //index是对应的数组的索引值
      let daibanSlice = this.daiban.slice(index, index + 1);
      this.yiban.unshift(daibanSlice);
      this.daiban.splice(index, 1);
},
```

##避免刷新后的数据丢失

```
为了达到刷新后数据不丢失，我们用sessionStorage来处理一下这个问题
```
