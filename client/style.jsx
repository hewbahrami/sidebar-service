import { createGlobalStyle } from 'styled-components';

const Style = {
  Global: createGlobalStyle`
    .sb-whole {
      width: 462px;
      font-size: large;
      margin: 20px;
    }

    .sb-bigButton {
      display: block;
      width: 100%;
      background-color: orange;
      color: white;
      padding: 5px 5px;
      border-radius: 5px;
    }
    .sb-smallButton {
      display: inline-block;
      width: 49%;
      height: 40px;
      background-color: white;
      padding: 5px 5px;
      border-radius: 5px;
      margin-top: 10px;
    }

    .sb-half {
      width: 45%;
    }
    .sb-floatRight {
      float: right;
    }
    .sb-floatLeft {
      float: left;
    }

    .sb-bigText {
      font-size: x-large;
    }
    .sb-smallText {
      font-size: x-small;
    }

    .sb-bold {
      font-weight: bold;
    }

    .sb-lineThroughText {
      text-decoration: line-through;
    }

    .sb-green {
      color: rgb(0, 223, 0);
    }
    .sb-orange {
      color: orange;
    }
    .sb-grey {
      color: grey;
    }
    .sb-black {
      color: black;
    }
    .sb-goldenrod {
      color: goldenrod;
    }
    .sb-blue {
      color: blue;
    }

    .sb-bigSpace {
      padding-top: 20px;
      padding-bottom: 15px;
      padding-right: 5px;
    }
    .sb-extraSpace {
      padding-top: 60px;
      padding-bottom: 60px;
      text-align: center;
    }

    .sb-dashBottomBorder {
      width: 10%;
      border-bottom: dashed;
      border-color: rgb(0, 223, 0);
    }
    .sb-greyBottomBorder {
      border-bottom: solid;
      border-color: grey;
      border-width: 1px;
    }

    .sb-dialogBubble {
      border: 1px solid goldenrod;
      border-radius: 15px;
      padding-top: 10px;
      padding-bottom: 10px;
      background-color: rgb(255, 235, 235);
      width: 49%;
      margin-top: 15px;
      text-align: center;
    }
  `
};

export default Style;
