<style>
    h1 {font: 28px song !important}
    h2 {font: 25px song !important}
    h3 {font: 25px 楷体 !important}
    p {font: 25px 楷体 !important}
    li {font: 25px 楷体 !important}
</style>
# ✒️ **Ref的使用**

## ✏️ **ref的使用方法**
在React中，通常情况下不需要、也不建议直接操作DOM元素，但是在某些特殊的情况，确实需要获取DOM元素进行操作。

在React中可以通过ref获取相应的DOM元素。

1）传入字符串（不推荐，已弃用！）

使用时通过**this.refs.传入的字符串**获取对应的元素。
```
import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <h2 ref='titleRef'>Hello World</h2>
                <button onClick={e => this.changeText()}>改变文本</button>
            </div>
        )
    }

    changeText(){
        this.refs.titleRef.innerHTML = 'Hello React!'
    }
}
```
2）传入对象（推荐）

通过React.createRef( )方式创建一个对象，使用时通过创建对象的current属性获取对应的DOM元素。
```
import React, { PureComponent, createRef } from 'react';

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.titleRef = createRef();
    }
    render() {
        return (
            <div>
                <h2 ref={this.titleRef}>Hello World</h2>
                <button onClick={e => this.changeText()}>改变文本</button>
            </div>
        )
    }
    changeText() {
        this.titleRef.current.innerHTML = 'Hello React!'
    }
}
```

3）传入函数

该函数会在DOM被挂载时进行回调，这个函数会传入一个元素对象（本例：`<h2>Hello World</h2>`），我们可以自己保存这个对象，使用时，直接拿到之前保存的元素对象即可。
```
import React, { PureComponent } from 'react';

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.titleRef = null;
    }
    render() {
        return (
            <div>
                <h2 ref={arg => this.titleRef = arg}>Hello World</h2>
                <button onClick={e => this.changeText()}>改变文本</button>
            </div>
        )
    }
    changeText() {
        this.titleRef.innerHTML = 'Hello React!'
    }
}
```

## ✏️ **ref的类型**

**ref 根据节点的类型而有所不同：**
- 当 ref 属性用于HTML元素时，构造函数中使用React.createRef()创建的 ref 对象接收底层 DOM 元素作为其 current 属性；
- 当 ref 属性用于自定义类组件时，ref 对象接收组件的挂载实例作为其 current 属性；
- 不能在函数组件中使用 ref 属性，因为它们没有实例；

## ✏️ **函数组件中的ref使用**
获取函数组件中某个元素的DOM可以通过forwardRef高阶组件实现。
```
import React, { PureComponent, createRef, forwardRef } from 'react';

import React from 'react'

const Home = forwardRef(
    function (props, ref) {
        return (
            <div ref={ref}>Home</div>
        )
    }
)

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.homeRef = createRef();
    }
    render() {
        return (
            <div>
                <Home ref={this.homeRef} />
                <button onClick={e => this.printRef()}>打印Ref</button>
            </div>
        )
    }
    printRef() {
        console.log(this.homeRef.current);
    }
}
```
