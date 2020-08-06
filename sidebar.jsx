import React from 'react';
import axios from 'axios';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.product,
      seller: props.seller
    }
  }

  getProductAndSeller () {
    axios.get('http://localhost:3210/api')
      .then((result) => {
        console.log(result.data);
        this.setState({
          product: result.data.product,
          seller: result.data.seller
        });
      })
      .catch((err) => {
        console.log('error in get: ' + err);
      });
  }

  condition () {
    return (
      <div>This product is {this.state.product.condition}</div>
    );
  }

  cost () {
    return (
      <div>
        <div>Shipping fee: {this.state.product.shippingFee}</div>
        <div>${this.state.product.priceOriginal}</div>
        <div>${this.state.product.priceActual}</div>
        <div>+Shipping</div>
      </div>
    )
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

  confidence () {
    return (
    <div>
      <div>Buy With Confidence</div>
      <div>Reverb Protection has you covered. We provide a safe community for finding the gear you want</div>
    </div>
    );
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

  joinedYear () {
    return (
      <div>
        <div>Joined Reverb</div>
        <div>{this.state.seller.joinedYear}</div>
      </div>
    )
  }

  render() {
    if (this.state.product.name === undefined) {
      this.getProductAndSeller();
    }
    return (<div>
      <div>{this.state.product.name}</div>
      {this.condition()}
      {this.cost()}
      <button>Add To Cart</button>
      <div>
        <button>Make an Offer</button>
        <button>* Watch</button>
      </div>
      {this.openToOffer()}
      {this.shippingSpeed()}
      {this.confidence()}
      <div>
        Shipped From
        <div>{this.state.seller.name}</div>
        <div>{this.state.seller.address}</div>
        {this.sellerRaiting()}
        {this.joinedYear()}
      </div>
      <div>
        <button>Message Seller</button>
        <button>Payment and Returns</button>
      </div>
    </div>)
  }
}

export default Sidebar;