const menus = [
  {
    title: "开发指南",
    children: [
      {
        title: "介绍",
        to: "/introduce/",
      },
      {
        title: "快速上手",
        to: "/quickstart/",
      },
      {
        title: "开发指南",
        to: "/contribution/",
      },
      {
        title: "更新日志",
        to: "/changelog/",
      },
    ],
  },
  {
    title: "基础组件",
    subpackage: "basic",
    children: [
      {
        title: "Button 按钮",
        to: "/components/button/",
      },
      {
        title: "Cell 单元格",
        to: "/components/cell/",
      },
      {
        title: "ConfigProvider 全局配置",
        to: "/components/config-provider/",
      },
      {
        title: "Icon 图标",
        to: "/components/icon/",
      },
      {
        title: "Image 图片",
        to: "/components/image/",
      },
      {
        title: "Flex 布局",
        to: "/components/flex/",
      },
      {
        title: "Style 内置样式",
        to: "/components/style/",
      },

      {
        title: "Space 间距",
        to: "/components/space/",
      },
    ],
  },
  {
    title: "反馈组件",
    subpackage: "action",
    children: [
      {
        title: "Loading 加载",
        to: "/components/loading/",
      },
      {
        title: "Backdrop 背景板",
        to: "/components/backdrop/",
      },
      {
        title: "PullRefresh 下拉刷新",
        to: "/components/pull-refresh/",
      },
    ],
  },
  {
    title: "展示组件",
    subpackage: "display",
    children: [
      {
        title: "Divider 分割线",
        to: "/components/divider/",
      },
      {
        title: "Empty 空状态",
        to: "/components/empty/",
      },
      {
        title: "List 列表",
        to: "/components/list/",
      },
      {
        title: "Sticky 粘性布局",
        to: "/components/sticky/",
      },
      {
        title: "Swiper 轮播",
        to: "/components/swiper/",
      },
    ],
  },
  {
    title: "导航组件",
    subpackage: "navigation",
    children: [
      {
        title: "Tabs 标签页",
        name: "Tabs",
        to: "/components/tabs/",
      },
    ],
  },
  {
    title: "Hooks",
    subpackage: "hooks",
    children: [
      {
        title: "介绍",
        to: "/hooks/",
      },
      {
        title: "useCascader",
        to: "/hooks/use-cascader/",
      },
    ],
  },
]

export default menus
