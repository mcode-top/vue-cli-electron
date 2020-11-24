## 前言
历经3天大致搞懂了,基于vue/cli4的electron的框架
## 搭建框架
```
npm install -g @vue/cli-service-global // 全局安装vue脚手架
vue create my-electron-vue // 创建脚手架

cd my-electron-vue

vue add electron-builder // 安装electron,这里我选择的是9.0

yarn run electron:serve // 环境没搭错的情况下应该能运行成功
```
在项目根目录 创建一个.npmrc文件 写入以下信息
```
electron_mirror="https://npm.taobao.org/mirrors/electron/"
electron_builder_binaries_mirror="http://npm.taobao.org/mirrors/electron-builder-binaries/"

```
>以上信息是为了项目打包的时候可以应用淘宝镜像下载打包环境,因为国内好像无法访问或者延迟较高,所以配置下可以提升打包成功率


在项目根目录创建一个`vue.config.js`文件
```
module.exports={
    pluginOptions: {
        electronBuilder: {
            outputDir: "electron_bulid",//打包后输出的目录名
            builderOptions: {
                "productName": "vue测试项目", //包名
                "appId": "com.electron.vue_demo",//项目id
                "files": [
                    "**/*",
                ],
                "extraFiles": [
                    {
                        "from": "./resource/*", // 项目资源
                        "to": "./resource" // 打包后输出到的按照目录资源
                    }
                ]
            }
        }
    },

}

```

配置完成后运行`yarn run electron:build`进行打包
打包完成后根目录下回多出`electron_bulid`文件夹,里面就有`vue测试项目 stepxxx.exe`文件双击安装成功,你的第一个electron应用就这样完美的出来了

## 结尾
以上示例我会放到[github项目](https://github.com/a941909105/vue-cli-electron.git)