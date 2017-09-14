let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');

let ROOT_PATH=path.resolve(__dirname);
let APP_PATH=path.resolve(ROOT_PATH,'app');
let BUILD_PATH=path.resolve(ROOT_PATH,'build');

module.exports={
	// 设置入口文件
	entry:APP_PATH,
	// 设置出口文件
	output:{
		path:BUILD_PATH,
		filename:'bundle.js'
	},
	// 配置loader，使用rules而不是loaders
	module:{
		rules:[{
			test:/\.(js|jsx)$/,
			loader:'babel-loader',
			exclude:/node_modules/,
			include:APP_PATH,
			query:{
				presets:['react','es2015']
			}
		},{
			test:/\.css$/,
			use:[{
				loader:'style-loader'
			},{
				loader:'css-loader'
			}]
		},{
			test:/\.less$/,
			use:[{
				loader:'style-loader'
			},{
				loader:'css-loader'
			},{
				loader:'less-loader'
			}]
		}]
	},
	// 配置webpack插件，注意，它是个数组，其他人都是对象，与众不同
	plugins:[
		new HtmlWebpackPlugin({
			title:'Hello world app',
			template:path.resolve(ROOT_PATH,'index.html')
		})
	],
	devServer:{
		// 这里进行对webpack-dev-server的配置
		contentBase:"./",
		historyApiFallback:true,
		inline:true,
		// hot:true,
		port:"8080"
	}
}

