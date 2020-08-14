import React from 'react';
import './Products.css';

class Products extends React.Component {
    state = {
        products: [
            {
                name:"可乐1",
                unit:"单位：1元/瓶",
                image:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2540256441,2248350385&fm=26&gp=0.jpg'
            },
            {
                name:"可乐2",
                unit:"单位：1元/瓶",
                image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597405307790&di=510cb3bab802de39bc3b3d9822198aa7&imgtype=0&src=http%3A%2F%2Fimg13.360buyimg.com%2Fjdcms%2Fjfs%2Ft802%2F65%2F1412570701%2F324849%2Ff7ec8748%2F55a25be0N27856270.jpg'
            },
            {
                name:"可乐3",
                unit:"单位：1元/瓶",
                image:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2391750437,1365858906&fm=26&gp=0.jpg'
            },
            {
                name:"可乐3",
                unit:"单位：1元/瓶",
                image:'../cola.jpg'
            },
            {
                name:"可乐5",
                unit:"单位：1元/瓶",
                image:'../../cola.jpg'
            },
            {
                name:"可乐6",
                unit:"单位：1元/瓶",
                image:'../../cola.jpg'
            }
        ]
    }
    render() {
        return (
            <div className="products">
                {this.state.products.map(product => (
                    <div className="product">
                        <img src={product.image} alt={"name"}/>
                        <p>{product.name}</p>
                        <p>{product.unit}</p>
                        <button className="addToCart">+</button>
                    </div>
                ))}


            </div>
        );
    }
}

export default Products;