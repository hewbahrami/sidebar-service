import React from 'react';
import axios from 'axios';
import Confidence from './dist/img/Confidence.png';
import ShipQuickly from './dist/img/ShipQuickly.png';
import QuickerShipperImg from './dist/img/QuickShipper.png';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.product,
      seller: props.seller,
      isWatched: false
    };
  }

  // when initializing the page
  componentDidMount() {
    // send a get request for the product and seller infomation
    // can pass different variable between 0 and 99 into params id to get certain product/seller
    axios.get('http://localhost:3210/api', { params: { id: 0 } })
      .then((result) => {
        this.setState({
          product: result.data.product,
          seller: result.data.seller
        });
      })
      .catch(() => null);
  }

  condition() {
    return (
      <div className="sb-smallText sb-green sb-dashBottomBorder">
        {this.state.product.condition}
      </div>
    );
  }

  cost() {
    return (
      <div className="sb-bigSpace">
        <div className="sb-smallText">
          Shipping fee: {this.state.product.shippingFee}
        </div>
        <div className="sb-lineThroughText">
          ${this.state.product.priceOriginal}
        </div>
        <div className="sb-bold sb-bigText">
          ${this.state.product.priceActual}
        </div>
        <div className="sb-smallText sb-grey">
          +Shipping
        </div>
      </div>
    );
  }

  watchProduct() {
    // get the watch button
    var watchButton = document.getElementById('watchButton');
    var currentlyWatched = this.state.isWatched;
    if (currentlyWatched) {
      // set button text to ☆ Watch
      watchButton.innerHTML = '☆ Watch';
    } else {
      // set button text to ★ Watch
      watchButton.innerHTML = '★ Watch';
    }

    this.setState({
      isWatched: !currentlyWatched
    });
  }

  openToOffer() {
    if (this.state.product.isOpenToOffers) {
      return (
        <div className="sb-smallText sb-goldenrod sb-dialogBubble">
          This seller is open to offers
        </div>
      );
    }
  }

  shippingSpeed() {
    if (this.state.seller.isQuickShipper) {
      return (
        <div className="sb-greyBottomBorder">
          <div className="sb-bigSpace sb-floatLeft">
            <img src={ShipQuickly} alt="" />
          </div>
          <div className="sb-bigSpace">
            <div className="sb-smallText sb-bold">
              Still Shipping Quickly
            </div>
            <div className="sb-smallText sb-grey">
              This seller is shipping orders within 24 hours, on average.<br /><br />
            </div>
          </div>
        </div>
      );
    }
  }

  confidence() {
    const text = 'Reverb Protection has you covered. We provide a safe community for finding the gear you want';
    return (
      <div className="sb-greyBottomBorder">
        <div className="sb-bigSpace sb-floatLeft">
          <img src={Confidence} alt="" />
        </div>
        <div className="sb-bigSpace">
          <div className="sb-smallText sb-bold">
            Buy With Confidence
          </div>
          <div className="sb-smallText sb-grey">
            {text}
          </div>
        </div>
      </div>
    );
  }

  sellerRaiting(rating) {
    let text = '';
    for (var i = 0; i < rating; i++) {
      text += '★';
    }
    for (var i = text.length; i < 5; i++) {
      text += '☆';
    }
    return (
      <div className="sb-orange">
        {text}
      </div>
    );
  }

  joinedYear() {
    return (
      <div>
        <div>Joined Reverb</div>
        <div>{this.state.seller.joinedYear}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="sb-whole">
        <div className="sb-bigText">{this.state.product.name}</div>
        {this.condition()}
        {this.cost()}
        <button className="sb-bigButton">Add to Cart</button>
        <div>
          <button className="sb-smallButton">
            Make an Offer
          </button>
          <button className="sb-smallButton sb-floatRight" id="watchButton" onClick={this.watchProduct.bind(this)}>
            ☆ Watch
          </button>
        </div>
        {this.openToOffer()}
        {this.shippingSpeed()}
        {this.confidence()}
        <section className="sb-smallText">
          <div className="sb-bigSpace sb-grey sb-half sb-floatLeft">
            Shipped From
            <div className="sb-bold sb-black">{this.state.seller.name}</div>
            <div>{this.state.seller.address}</div>
            {this.sellerRaiting(this.state.seller.reviews.rating)}
            {this.joinedYear()}
          </div>
          <div className="sb-extraSpace sb-blue">
            <img src={QuickerShipperImg} alt="" />
          </div>
        </section>
        <div>
          <button className="sb-smallButton sb-smallText">Message Seller</button>
          <button className="sb-smallButton sb-smallText sb-floatRight">Payment and Returns</button>
        </div>
      </div>
    );
  }
}

export default Sidebar;
