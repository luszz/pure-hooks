/**
 * title: 基础用法
 * desc: 默认为 boolean 切换，基础用法与 useToggle 一致。
 */

import { useBoolean } from 'pureHooks'
import './index.css'

import React from 'react';
import { Button } from "antd";
import "antd/dist/reset.css";

export default () => {
    const [state, { toggle, setTrue, setFalse }] = useBoolean(true); 
    return (
        <div>
        <p>当前state值为: {`${state}`}</p>
        <p>
            <Button type="primary" className="mr-10px" onClick={toggle}>Toggle</Button>
            <Button type="primary" className="mr-10px" onClick={setFalse}>setFalse</Button>
            <Button type="primary" className="mr-10px" onClick={setTrue}>setTrue</Button>
        </p>
        </div>
    );
}