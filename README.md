> 此项目是一个基于vue.js的机票预订系统，主要是h5版本。

涉及的流程比较简单，主要会实现一下几个功能：
```
底部导航栏：首页，航班动态，航线推荐，个人中心
```
```
机票预订流程：
1. 首页按航班号，起降地搜索行程信息
2. 进入航班列表页，选择航班
3. 进入航班信息页，填写乘机人信息，预定
4. 支付页
5. 支付成功页，查看订单详情
```   
```
航班推荐流程（分为：有历史订单的个性推荐 和 无历史订单的优惠推荐）：
1. 入口分别为 首页的banner 和 首页底部导航栏
2. 从banner进入显示相应情况推荐的页面
3. 从底部导航栏进入，跳转至两种情况的推荐概览，点击更多进入相应情况的页面
```
```
航班动态：
1.首页底部导航栏航班动态入口
2.默认显示当前城市机场动态，点击城市切换
3.选择城市页面
4.返回到动态页，展示所选地区的航班动态
```
```
个人中心：
1. 首页底部导航栏进入个人中心
2. 未登录跳转登录
3. 上传头像、昵称、修改密码、钱包充值
4. 查看我的订单
5. 进入订单列表页
6. 点击订单项进入订单详情页
```
# airport-ticket

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
