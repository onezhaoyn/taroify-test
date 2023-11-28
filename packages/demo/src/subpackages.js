const subpackages = [
  {
    root: "pages/basic",
    title: "基础组件",
    pages: [
      {
        title: "Button 按钮",
        name: "Button",
        path: "button/index",
      },
      {
        title: "Cell 单元格",
        name: "Cell",
        path: "cell/index",
      },
      {
        title: "ConfigProvider 全局配置",
        name: "ConfigProvider",
        path: "config-provider/index",
      },
      {
        title: "Icon 图标",
        name: "Icon",
        path: "icon/index",
      },
      {
        title: "Flex 布局",
        name: "Flex",
        path: "flex/index",
      },
      {
        title: "Style 内置样式",
        name: "Style",
        path: "style/index",
      },
      {
        title: "Space 间距",
        name: "Space",
        path: "space/index",
      },
    ],
  },
  {
    root: "pages/action",
    title: "反馈组件",
    pages: [
      {
        title: "Loading 加载",
        name: "Loading",
        path: "loading/index",
      },
      {
        title: "Backdrop 背景暗化",
        name: "Backdrop",
        path: "backdrop/index",
      },
      {
        title: "PullRefresh 下拉刷新",
        name: "PullRefresh",
        path: "pull-refresh/index",
      },
    ],
  },
  {
    root: "pages/display",
    title: "展示组件",
    pages: [
      {
        title: "Divider 分割线",
        name: "Divider",
        path: "divider/index",
      },
      {
        title: "Empty 空状态",
        name: "Empty",
        path: "empty/index",
      },
      {
        title: "List 列表",
        name: "List",
        path: "list/index",
      },
      {
        title: "Sticky 粘性布局",
        name: "Sticky",
        path: "sticky/index",
      },
      {
        title: "Swiper 轮播",
        name: "Swiper",
        path: "swiper/index",
      },
    ],
  },
  {
    root: "pages/navigation",
    title: "导航组件",
    pages: [
      {
        title: "Tabs 标签页",
        name: "Tabs",
        path: "tabs/index",
      },
    ],
  },
]

module.exports = subpackages
// eslint-disable-next-line import/no-commonjs
module.exports.default = subpackages
