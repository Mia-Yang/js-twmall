import React from 'react';
import './add.css';

class Add extends React.Component {
    
    render() {
        return (
            <div className="add">
                <h1>添加商品</h1>
                <div>
                    <label>
                    <span className="star">* </span>
                        名称<br/>
                        <input type="text" placeholder="名称"/>
                    </label>
                </div>
                <div>
                    <label>
                    <span className="star">* </span>
                        价格<br/>
                        <input type="text" placeholder="价格"/>
                    </label>
                </div>
                <div>
                    <label>
                    <span className="star">* </span>
                        单位<br/>
                        <input type="text" placeholder="单位"/>
                    </label>
                </div>
                <div>
                    <label>
                    <span className="star">* </span>
                        图片<br/>
                        <input type="text" placeholder="URL"/>
                    </label>
                </div>
                <button>提交</button>
                
            </div>
        );
    }
}

export default Add;