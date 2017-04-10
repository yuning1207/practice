[TOC]

# HTML教程

### 一、HTML简介

- HTML指的是超文本**标记语言**，由一套**标记标签**来描述语言。 
- 标记标签用来描述文档的**结构**，例如：标题、段落、链接等等。
- HTML文档包含**两种信息**：一个是页面本身的**文本**，另一个是表示文档结构的**标签**。
- 在HTML中也可以加入渲染页面的**css代码**和增加页面行为的**javascript代码**。

------

### 二、HTML中的标签

#### 1.标签的表现与概括

- 表现特征：

  - 通常为成对出现的。例如：`<p></p>`
  - 也有自闭合的。例如：`</br>`
  - 上述成对出现的例子中，第一个为段落的**开始标签**，第二个为段落的**结束标签**。
  - 标签名字的大小写无要求，有些标签内可以无内容。

- 概括：

  - `<html>` 与` </html>` 标签限定了文档的开始点和结束点，在它们之间是文档的头部和主体。正如您所了解的那样，文档的头部由`<head>`标签定义，而主体由`<body>`定义，这三个是每个html文件必须包含的。

    ```html
    <html>
      <head>
        ....这里定义文件的头部
      </head>
      <body>
        ....这里定义文件的内容
      </body>
    </html>
    ```

  - 大多数的标签都可拥有属性。标签中的属性有交集的，比如：id、class、style等等。也有不同的，比如：`<meta charset="UTF-8">`表示的是html文件以UTF-8编码来保存。

------

#### 2.HTML中常用的标签

1. 网页标题标签：title   `<title>example</title>`表示html文件用浏览器打开时，浏览器的标题栏将显示：example

2. 文本内容

   1. 标题：`<h1>`....`<h6>`   `<h1>`表示最大的标题即一级标题，`<h6>`表示最小的标题即六级标题。
   2. 段落：`<p>this is a paragraph</p>`网页将显示*this is a paragraph*这句话。**浏览器会自动在段落的前后添加空行。**
   3. 文本格式：`<b>`定义粗体，`<em>`定义着重文字，`<i>`定义斜体字等等。
   4. 注释：`<!--这是注释-->`注释语句不会显示在浏览器中，只能保存在html文档中。

3. 链接：`<a href="www.baidu.com">bai du</a>`在网页中将会有一个显示为“bai du”的链接，点击后将跳转至百度首页。标签a中重点的属性为：**href属性**，它的值表示跳转的地址。**name属性**，用来创建html页面中的书签。**target属性**，可以用来定义文档在何处显示。

4. 图片：`<img src="boat.gif" alt="big boat">`  img标签中的重点属性为：**src属性**，它的值为图片的存储位置。**alt属性**，它的值是为图片定义的可替代的文本，当浏览器无法载入图片时，将显示这句文字。**img标签没有结束标签。**

5. 列表：

   - 无序列表：

     - 用`<ul>`和`</ul>`包含。

     - 每个列表项用`<li>`和`</li>`包含。

     - 显示为：在每一个列表项前面有个粗体圆点。

       ```html
       <ul>
         <li>第一项</li>
         <li>第二项</li>
       </ul>
       ```

   - 有序列表：

     * 用`<ol>`和`</ol>`包含。
     * 每个列表项用`<li>`和`</li>`包含。
     * type属性：`<ol type="A">`表示为大写字母列表，type也可以为：a*（小写字母列表）*、I *(大写罗马字母列表)*、i *（小写罗马字母列表）*
     * start属性：`<ol start="50">`表示用50代替默认的1开始进行列表标记。

   - 定义列表：

     * 用`<dl>`和`</dl>`包含。

     * 用`<dt>`和`</dt>`来包含列表项。

     * 用`<dd>`和`</dd>`来包含对列表项的定义内容。

       ```html
       <dl>
         <dt>计算机</dt>
         <dd>用来计算的仪器</dd>
         <dt>显示器</dt>
         <dd>以视觉方式显示信息的装置</dd>
       </dl>
       ```

       显示为：计算机

       ​                          用来计算的仪器

       ​                显示器

       ​                          以视觉方式显示信息的装置

6. 表格：

   * 用`<table>`和`</table>`包含。

   * 用`<th>`和`</th>`包含表头。

   * 用`<tr>`和`</tr>`包含每一行的内容。

   * 用`<td>`和`</td>`包含每行中每列的内容。

   * border属性可定义边框的大小，为0或不定义时则没有边框。

   * td中无内容时也要包含&nbsp，表示空格。

     ```html
     <table border="1">
       <th>heading1</th><th>heading2</th>
       <tr><td>1</td><td>2</td></tr>
       <tr><td>3</td><td>4</td></tr>
     </table>
     ```

7. 表单：

   * 用`<form>`和`</form>`包含。

   * 表单包含不同类型的input元素、复选框、单选按钮、提交按钮等表单元素。

   * `<input>`

     - **type属性**来表现出不同的形态：text*（定义文本输入）*、password*（定义密码字段）、*radio*（定义单选按钮，可用checked来设置欲选项）*、checkbox*（定义复选按钮）*、submit*（定义提交按钮，即提交表单）*。
     - **value属性**它的值表示为input中显示的初始内容，如果忽略，则会空白或者默认。
     - **readonly属性**规定输入字段为只读。
     - **disabled 属性**规定输入字段是禁用（不可用不可点击不会被提交）的。
     - **size属性**规定输入字段的尺寸。
     - **maxlength属性**规定输入字段允许的最大长度。
     - **input没有结束标签。**

   * `<select>`和`</select>`包含一个下拉列表。其中`<option>`和`</option>`包含每个下拉列表项。**其中第一项为欲选项，也可以用“selected”来设置欲选项。**

   * `<button>`表示一个按钮。中包含的是显示在按钮上的内容。

   * `<textarea>`通过属性rows、cols定义多行文本输入框。

   * action属性定义在提交表单时执行的动作，如果省略，则action会被设置为当前页面。

   * method属性规定在提交表单时所使用的HTTP方法：GET*(可见的。默认方法)*、POST*（不可见，例如密码）*。

   * name属性，如果要正确的被提交，则在输入字段中必须设置。

   * `<fieldset>`和`</fieldset>`组合表单中的所有数据，表现为，将表单中的所有内容框起来。

   * `<legend>`和`</legend>`为`<fieldset>`元素定义标题。

     ```html
     <form action="action_page.php" method="GET">
     	<fieldset>
     		<legend>Personal information:</legend>
     		First name:<br>
     		<input type="text" name="firstname" value="Mickey"></br>
     		Last name:<br>
     		<input type="text" name="lastname" value="Mouse"></br>
       		<input type="radio" name="lala" value="male" checked>male</br>
       		<input type="radio" name="hehe" value="female">female</br>
       		<select name="cars">
         		<option value="vv">vv</option>
         		<option value="uu" selected>uu</option>
       		</select>
     		<textarea name="message" rows="10" cols="30">
               my name is yuning.
               </textarea>
     		<input type="submit" value="Submit">
     	</fieldset>
     </form>
     ```

8. 类div ：对html进行分类，可以方便为之后用css设置样式。用`<div>`和`</div>`包含一个类。

9. 样式：

   - 外部样式表：另写一个渲染页面样式的.css文件，在html头部加入一行：`<link rel="stylesheet type="text/css hred="style1.css">`
   - 内部样式表：在头部用`<style type="text/css">`和`</style>`包含样式
     - .classname{}
     - \#idname{}
     - tagname{}
   - 内联样式：在标签内部用style属性设置。`<p style="color=red">`
   - 样式可以设置color*（字体颜色）*、background-color*（背景颜色）*、border*（四个边框的属性）*、margin*（顺时针的四个边距值）*、font*（所有的字体属性）*、text-align*（排列文本）*等等。

------

### 三、学习的网站

- [w3school网站](http://www.w3school.com.cn/)
- [菜鸟教程](http://www.runoob.com/html/html-tutorial.html)

------

### 四、接下来改学习什么呢？

- XHTML：是新的HTML，是更严格更纯净的HTML版本。
- CSS：用来渲染页面，即可以写一个.css文件作为外部样式表添加到html文件中。
- HTML5：是下一代的HTML，在HTML的基础上，添加和更改了新的内容。
- JavaScript：是脚本语言，是用来表达网页的行为的，向HTML页面添加的交互性。