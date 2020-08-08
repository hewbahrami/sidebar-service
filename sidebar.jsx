import React from 'react';

const Sidebar = ({ product, seller }) => {
  var isWatched = false;

  var condition = () => (
    <div className="sb-smallText sb-green">This product is {product.condition}</div>
  );

  var cost = () => (
    <div className="sb-bigSpace">
      <div className="sb-smallText">Shipping fee: {product.shippingFee}</div>
      <div className="sb-lineThroughText">${product.priceOriginal}</div>
      <div className="sb-bold sb-bigText">${product.priceActual}</div>
      <div className="sb-smallText sb-grey">+Shipping</div>
    </div>
  );

  var watchProduct = () => {
    if (isWatched) {
      // set button text to ★ Watch
      console.log('★ Watch');
    } else {
      // set button text to ☆ Watch
      console.log('☆ Watch');
    }

    isWatched = !isWatched;
  };

  var openToOffer = () => {
    if (product.isOpenToOffers) {
      return (
        <div className="sb-smallText sb-orange">This seller is open to offers</div>
      );
    }
  };

  var shippingSpeed = () => {
    if (seller.isQuickShipper) {
      return (
        <div className="sb-bigSpace">
          <div className="sb-smallText sb-bold">Still Shipping Quickly</div>
          <div className="sb-smallText sb-grey">This seller is shipping orders within 24 hours, on average.</div>
        </div>
      );
    }
  };

  var confidence = () => (
    <div className="sb-bigSpace">
      <div className="sb-smallText sb-bold">Buy With Confidence</div>
      <div className="sb-smallText sb-grey">Reverb Protection has you covered. We provide a safe community for finding the gear you want</div>
    </div>
  );

  var sellerRaiting = (rating) => {
    let text = '';
    for (var i = 0; i < rating; i++) {
      text += '★';
    }
    for (var i = text.length; i < 5; i++) {
      text += '☆';
    }
    return (
      <div className="sb-orange">{text}</div>
    );
  };

  var joinedYear = () => (
    <div>
      <div>Joined Reverb</div>
      <div>{seller.joinedYear}</div>
    </div>
  );

  return (
    <div className="sb-whole">
      <div className="sb-bigText">{product.name}</div>
      {condition()}
      {cost()}
      <button className="sb-bigButton">Add to Cart</button>
      <div>
        <button className="sb-smallButton">Make an Offer</button>
        <button className="sb-smallButton" onClick={watchProduct.bind(this)}>☆ Watch</button>
      </div>
      {openToOffer()}
      {shippingSpeed()}
      <div className="sb-grey">--------------------------------------------------</div>
      {confidence()}
      <div className="sb-grey">--------------------------------------------------</div>
      <div className="sb-smallText sb-bigSpace sb-grey">
        Shipped From
        <div className="sb-bold sb-black">{seller.name}</div>
        <div>{seller.address}</div>
        {sellerRaiting(seller.reviews.rating)}
        {joinedYear()}
      </div>
      <div>
        <button className="sb-smallButton sb-smallText">Message Seller</button>
        <button className="sb-smallButton sb-smallText">Payment and Returns</button>
      </div>
    </div>
  );
};

export default Sidebar;
