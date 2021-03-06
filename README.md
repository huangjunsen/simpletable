# SimpleTable

一个基于 Jquery 的 Html5 表格插件。  
这是一个简易的表格样式，具有如下特点：  
* 轻量：js文件4kb，css文件10kb。  
* 使用简单：采用js生成方式仅需一行代码（当然，必要的table Dom还是需要的）。  
* 可以采用非JS方式：所有实现结果都是通过CSS实现，因此可以通过非js生成。  

### 版本
V1.0  

### 依赖
* jquery1.11+  

### 浏览器支持
* IE9+  
* Firefox (latest)  
* Safari (latest)  
* Chrome (latest)  
* Opera (latest)  
* IE9 不支持CSS变形和动画，此插件的功能都能用，不过，拥有较差的用户体验。  

### 1. 使用方法：
1.1. 添加CSS及JS文件  
```html
<link href="dist/simpletable.min.css" rel="stylesheet" type="text/css" />
<script src="dist/jquery.min.js" type="text/javascript"></script>
<script src="dist/simpletable.min.js" type="text/javascript"></script>
```

1.2. 书写 Table Dom   
```html
<table id="SimpleTable">
  <thead>
    <tr><th>...</th></tr>
  </thead
  <tbody>
    <tr><td>...</td></tr>
    <tr><td>...</td></tr>
  </tbody>
  <tfoot>
    <tr><th>...</th></tr>
  </tfoot>
</table>
```

1.3. 采用js方式生成：  
```javascript
$('#SimpleTable').SimpleTable(options);
```

  
### 2. 非js方式生成：
2.1 朴素 SimpleTable ： 为 table 添加 .simpletable 类即可。  
2.2 激活状态： 为 tr 添加 .tr-active 类即可产生改行的激活状态。  
2.3 禁用状态： 为 tr 添加 .tr-disable 类即可产生改行的禁用状态。  
2.4 6种主题： 为 .simpletable 类添加 .tab-* 即可产生5种色彩主题（*可以为primary/success/info/warning/danger）。  
2.5 无边框样式：为 .simpletable 类添加 .noborder 类可以产生无边框的表格效果。  
2.6 极其简单的Dom： table 中可以仅仅含有 tr th td 等元素而不必含有 thead tbody tfoot 等元素（尽管推荐使用这些标签）。  
2.7 对齐状态：为 .simpletable 类添加 .text-* 即可不同的对齐状态（*可以为left/center/right）。  
2.8 响应式表格：为表格外层添加一个div，并附上 .table-responsive 类，可以达到响应式的效果（依赖bootstrap）。  
示例：  
![](https://github.com/huangjunse/simpletable/raw/master/snapshot/01_nojs.jpg)  
Code:   
```html
<table class="simpletable tab-primary">
  <tr class=""><th>表头1</th><th>表头2</th><th>表头3</th></tr>
  <tr><td>这是</td><td>一行</td><td>普通行</td></tr>
  <tr class="tr-disable"><td>这是</td><td>一行</td><td>禁用状态的行</td></tr>
  <tr class="tr-active"><td>这是</td><td>一行</td><td>激活状态的行</td></tr>
</table>
```

  
### 3.js方法：
采用纯粹 Html 方式虽然能展现出效果不错的表格，但是一些需要js支持的功能却无法使用，这是一种遗憾。  
因此在插件中添加几个较为有用的方法，提供使用：  
#### addHover
```javascript
.SimpleTable('addHover');
```
为表格添加鼠标经过样式  

#### addColumn
```javascript
.SimpleTable('addColumn',options);
```
批量为表添加列，参数options介绍（以下为默认值）：
```javascript
{
  colCount:1, //需要添加的列数
  contents: [], //嵌套数组，用于存放需要添加的内容
  hasID: false, //是否需要为每个单元格添加id属性
  headIDPrefix: 'H', //th的id前缀
  lineIDPrefix: 'L', //td的id前缀
  startID: 0 //id的起始序号
}
```

#### rowspan
```javascript
.SimpleTable('rowspan','all');
.SimpleTable('rowspan',0);
```
合并内容相同的单元格为跨行单元格：'all'/行号(起始为0)  

#### colspan
```javascript
.SimpleTable('colspan','all');
.SimpleTable('colspan',0);
```
合并内容相同的单元格为跨行单元格：'all'/列号(起始为0)  

#### rowactive
```javascript
.SimpleTable('rowactive','all');
.SimpleTable('rowactive',0);
```
将全部行/制定行置为禁用状态：'all'/行号(起始为0)   
>>注意，对标题行不能生效。  

#### rowdisable
```javascript
.SimpleTable('rowdisable','all');
.SimpleTable('rowdisable',0);
```
将全部行/制定行置为禁用状态：'all'/行号(起始为0)  

  
### 4. 参数(options)：
#### hover
>默认： false   
是否产生鼠标经过效果：false/true  

#### padding
>默认： false   
是否产生紧缩的表格样式：false/'no'/'tiny'/'tight'  

#### border
>默认： true   
是否有边框：true/false  

#### color
>默认： ''   
颜色主题：''/'primary'/'success'/'info'/'warning'/'danger'  

#### algin
>默认： 'center'   
对齐状态：'left'/'center'/'right'  

一些示例截图：（更多示例请看demo）  
![](https://github.com/huangjunse/simpletable/raw/master/snapshot/02_color.jpg)  
![](https://github.com/huangjunse/simpletable/raw/master/snapshot/03_padding.jpg)  
