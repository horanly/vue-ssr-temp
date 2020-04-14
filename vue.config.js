module.exports = {
    css: {
        extract: false//关闭提取css,不关闭 node渲染会报错
    },
    configureWebpack: () => ({
        entry: './src/entry/client'
    })
}