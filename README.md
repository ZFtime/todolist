#todolist

##项目描述

```
这是一个待办事项和已完成事项的demo。写这个demo的目的，是为了帮自己更好的理解数据的双向绑定。
```
##注意事项

 ```
  页面选中对应的待办事项以后，下一个元素也会被选中，这里我们用prevent来阻止点击事件的默认行为
  <div class="daiban-item">
      <input type="checkbox" @click.prevent="daibanClick(index)">
      <input type="text" :value="item">
  </div>
  ```
  
  
