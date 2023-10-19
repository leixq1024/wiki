module.exports = {
  title: "低级杂工聚集地",
  description: "三个臭皮匠约等于一个诸葛亮",
  head: [["link", { rel: "icon", href: "/images/logo.jpg" }]],
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "技术文档", link: "" },
      { text: "操作演示", link: "" },
      { text: "Github", link: "" },
    ],
    sidebar: {
      "/pages/项目部署/": [
        {
          title: "项目部署",
          collapsable: false,
          sidebarDepth: 3,
          children: [["兰州项目部署.md", "兰州项目部署"]],
        },
      ],
    },
  },
};
