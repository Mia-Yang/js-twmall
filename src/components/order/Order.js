import React from 'react';
import './Order.css';

class Order extends React.Component {

 

    render() {
        return (
            <div className="order">
                <div className="tbhead">
                    <p>名字</p>
                    <p>单价</p>
                    <p>数量</p>
                    <p>单位</p>
                    <p>操作</p>
                </div>
            </div>
        );
    }
}

export default Order;