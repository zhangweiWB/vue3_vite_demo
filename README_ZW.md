##新增vite-plugin-html-template
https://github.com/IndexXuan/vite-plugin-html-template
1、使用/public/index.html作为单页或多页应用入口文件
2、单页应用中,可以通过控制entry,实现按项目打包
htmlTemplate({
data: {
title: 'single Page',
},
entry: 'src/pages/default/main',//默认'/src/main'
})
3、多页面应用，可以参考如下配置
需要按照localhost:3100/default/index.html方式访问
htmlTemplate({
pagesDir: 'src/pages',
pages: {
default: {
template: 'public/index.html',
title: 'Mono1 Page',
entry: 'src/pages/default/main.ts',
},
icbc: {
template: 'public/index.html',
title: 'ICBC Page',
entry: 'src/pages/icbc/main.ts',
},
},
}),
