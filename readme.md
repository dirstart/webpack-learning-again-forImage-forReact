###### 前言又一次的配置react，由于上次的版本对于图片的解析没有配置，也没有配置public路径，这一次再一次地学习，再一次地重新，配置，希望够用。

> PS:所有的webpack配置过程都会跟git过程相同，前提是在这个 `react-imooc-new`项目里面。

*  *  *

### 引入的模块顺序的记录
1.为了webpack的运行，首当其冲的两个module:  `webpack和webpack-dev-server`
2.为了能够直接用js生成html，plugin模块： `html-webpack-plugin`
3.为了能够运行react，安装的模块：`babel-core,babel-loader,react,react-dom`
4.然而还是不能运行，还是需要`babel-preset-react和babel-preset-es2015`,此后如果只是使用react和reactdom挂载简单的组件已经是可行的了。
5.然后我们开始引入css，这个时候我们引入了这样的两个loader，`style-loader`和`css-loader`。
> 我们安装style-loader是为了在html中以style的方式嵌入css，至于css-loader，那是因为node本身只认识css而已，大家各司其职。

6.接下来我们安装`less-loader`使我们能够进行less语法的编译。安装完了之后我们配置一下webpack,再次运行的时候我发现我装了`less-loader`但是没有安装`less`本身导致运行不了，于是继续安装一下less.至此我们的less配置成功。
*  *  *

#### 1.htmlwebpackplugin配置完毕，配置刚开始的框架结束
> 知识的记录：
在这里，我们只是写了一个test_sub和test_index，这里只要我们引入这个html-webpack-plugin并且在我们plugin中写入一个new HtmlWebpackPlugin就能够自动生成一个index.html在我们的build里面。而如果我们想要用我们自己原有的模板来构造出index.html，我们可以通过在htmlwebpack的配置项中的template来设置原始的模板。至此第一阶段的记录结束。因为一两周没有再碰webpack，都在学习底层的知识，这一次再来接触，又能够学到很多以前遗忘掉的知识。

#### 2.再一次回顾了我们要读取js或者jsx需要的loader，先是我们最容易想到的`babel-loader`,然后你如果懒得话就可以发现这个时候webpack会出错了，这个时候你学会了安装`babel-core`

#### 3.关于--save-dev和--save
> 这两个呢，只--save表示的是最后在发布的时候要用到的东西，比如react，jquery等框架，而--save-dev的意思是只是开发阶段用到，比如我们的webpack，只是个打包工具而已，工具类的东西。不过其实呢，最终是殊途同归的，只是个记录而已。（也许你能把它想成是一个注释？？）