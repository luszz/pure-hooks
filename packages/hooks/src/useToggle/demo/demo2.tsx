/**
 * title: 自定义用法
 * desc: 接受两个可选参数，在它们之间进行切换。
 */

import { useToggle } from 'pureHooks'
import './index.css'

import React from 'react';
import { Button } from "antd";
import "antd/dist/reset.css";

export default () => {
    const [state, { toggle, setLeft, setRight }] = useToggle('abcd', 'dcba'); // 默认值为 false
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