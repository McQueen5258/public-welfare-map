# 公益地图项目

项目名称：公益地图Public Welfare Map

## 在线访问地址

- 主页
  - GitHub仓库：https://github.com/McQueen5258/public-welfare-map
  - Vercel: https://public-welfare-map.vercel.app/
- Dashboard
  - GitHub仓库：https://github.com/McQueen5258/PublicWelfareDashBoard
  - Vercel: 还在开发中
- Backend
  - LeanCloud: https://console.leancloud.app/apps/AiJfkv2nVc6dvnXvjjXWDL0n-MdYXbMMI/
- Design
  - GitHub仓库：还在开发中

## 项目地址

- 项目说明

​		在2021年秋季王欢老师邀请实现这个项目。项目想法是实现一个将国内的所有公益组织收集起来，呈现在地图上，可以让更多的人了解到在自己附近的公益组织。

​		项目主要使用了Reactjs和一些第三方库，如D3、Material UI、Redux、Axios、leancloud-storage等。



- 过程记录(困难、想法)

​		项目开始模版是按照在哈弗的一个页面做的[To Serve Better](https://toservebetter.harvard.edu/)，开始时从地图开始做。因为我开始对画图不是很了解，在王欢老师的指导下，我学习了段时间的D3基础。在边学习D3边画地图遇到了很多的问题，比如地图画不出来，只能画出一个正方形。研究了一两个月，最后将地图画了出来，并且在地图上添加了第一个公益组织，实现了用户交互。

​		随后看是在页面添加左边栏和公益组织内容，可以让用户详细的了解到公益组织。在这里主要使用了Material UI。在使用Material UI也遇到了很多问题。

​		目前的进度就是:

- 在leancloud给公益地图网站创建了后端，目前所有数据都会存到leancloud中，现在还在完善。正在尝试添加一个新的公益组织，遇到了一些报错，还在解决。
- 现在也在开发公益地图网站的Dashboard，可以以管理员的身份增删改公益地图网站的内容。现在还在开发中。
- 收集在国内的公益组织，添加到公益地图网站

​		接下来的计划：

- 主页

  - 标题

  - 实现移动端的预览
  - 优化左边栏和公益组织的文本介绍
  - 可能将会使用路由，自动为每个公益组织创建子页面

- Backend
  - leancloud的数据优化
  - 添加数据
- Dashboard
  - 完成1.0版本，实现在Dashboard添加数据
