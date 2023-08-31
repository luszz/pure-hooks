<p align="center">
  <img src="/public/logo.png" alt="" width="200" />
</p>

<h1 align="center">pure-hooks - 纯函数式 React Hooks 库</h1>

<div align="center">

一个简洁的、基于 React 的函数式组件库，旨在帮助你更轻松地构建 React 应用。

[![npm version](https://img.shields.io/npm/v/pure-hooks.svg)](https://www.npmjs.com/package/pure-hooks)
[![npm downloads](https://img.shields.io/npm/dm/pure-hooks.svg)](https://www.npmjs.com/package/pure-hooks)
[![GitHub stars](https://img.shields.io/github/stars/luszz/pure-hooks)](https://github.com/luszz/pure-hooks/stargazers)

</div>

## 🚀 特点

- 📦 提供一系列实用的纯函数式 React Hooks，方便处理各种任务。
- 🌈 基于 TypeScript 编写，提供详细的类型定义。
- 🎯 轻量、高效，没有不必要的依赖。

## 🛠️ 安装

```bash
npm install pure-hooks
pnpm add pure-hooks
yarn add pure-hooks

📖 文档

详细的文档和示例可以在pure-hooks官方网站中找到。

🎉 示例
使用 useToggle 纯函数式 Hook 来创建一个值切换的基础 hooks：


import { useToggle } from 'pureHooks'
import './index.css'

import React from 'react';
import { Button } from "antd";
import "antd/dist/reset.css";

export default () => {
    const [state, { toggle, setLeft, setRight }] = useToggle(); // 默认值为 false
    return (
        <div>
        <p>当前state值为: {`${state}`}</p>
        <p>
            <Button type="primary" className="mr-10px" onClick={toggle}>Toggle</Button>
            <Button type="primary" className="mr-10px" onClick={setLeft}>setLeft</Button>
            <Button type="primary" className="mr-10px" onClick={setRight}>setLeft</Button>
        </p>
        </div>
    );
}




🤝 贡献
欢迎贡献！如果您想为此库做出贡献，请查看我们的 贡献指南。



📄 许可证
本项目基于 MIT 许可证。



感谢使用 pure-hooks！如果您有任何问题或建议，请随时提出。祝您编码愉快！