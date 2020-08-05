import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.product,
      seller: props.seller
    }
  }

  condition () {
    return (
      <div>This product is {this.state.product.condition}</div>
    );
  }

  openToOffer () {
    if (this.state.product.isOpenToOffers) {
      return (
        <div>This seller is open to offers</div>
      )
    }
  }

  shippingSpeed () {
    if (this.state.seller.isQuickShipper) {
      return (
        <div>
          <div>Still Shipping Quickly</div>
          <div>This seller is shipping orders within 24 hours, on average.</div>
        </div>
      )
    }
  }

  sellerRaiting () {
    var rating = '';
    for (var i = 0; i < this.state.seller.reviews.rating; i++){
      rating += '*';
    }
    for (var i = rating.length; i < 5; i++){
      rating += '-';
    }
    return (
      <div>{rating}</div>
    );
  }

  render() {
    return (<div>
      <div>{this.state.product.name}</div>
      {this.condition()}
      <div>Shipping fee: {this.state.product.shippingFee}</div>
      <div>${this.state.product.priceOriginal}</div>
      <div>+Shipping</div>
      <button>Add To Cart</button>
      <div>
        <button>Make an Offer</button>
        <button>* Watch</button>
      </div>
      {this.openToOffer()}
      {this.shippingSpeed()}
      <div>Buy With Confidence</div>
      <div>Reverb Protection has you covered. We provide a safe community for finding the gear you want</div>
      <div>
        Shipped From
        <div>{this.state.seller.name}</div>
        <div>{this.state.seller.address}</div>
        {this.sellerRaiting()}
        <div>Joined Reverb</div>
        <div>{this.state.seller.joinedYear}</div>
      </div>
      <div>
        <button>Message Seller</button>
        <button>Payment and Returns</button>
      </div>
    </div>)
  }
}

export default Sidebar;