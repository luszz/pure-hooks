/**
 * title: 基础用法
 * desc: 默认为 boolean 切换，基础用法与 useBoolean 一致。
 */

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