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