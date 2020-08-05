import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: 'The super expensive guitar with some history',
        isMint: true,
        shippingCost: 500, // need some change
        price: 1000000,
      },
      seller: {
        shippingSpeed: '~1 day',
        address: 'some~where~~ over the rainbow~~',
        reviews: 5,
        contactInfo: 'catch me if you can'
      }
    }
  }

  render() {
    return (<div>
      <div>{this.state.product.name}</div>
      <div>optional: mint item</div>
      <div>{this.state.product.shippingCost}</div>
      <div>{this.state.product.price}</div>
      <button>Add To Cart</button>
      <div>
        <button>Make an Offer</button>
        <button>Watch</button>
      </div>
      <div>{this.state.seller.shippingSpeed}</div>
      <div>Buy With Confidence</div>
      <div>
        Shipped From
        <div>{this.state.seller.address}</div>
        <div>{this.state.seller.reviews}</div>
      </div>
      <div>
        <button>Message Seller</button>
        <button>Payment and Returns</button>
      </div>
    </div>)
  }
}

export default Sidebar;