/* 

Created by: Bala
Date: 6 July 2024
Comments:  A responsice React app which generates dynamic cards with offer values, offer details, along with dynamic icons(using FontAwesomeIcons), and does show blurred list items if it is not offered 

*/

import Card from "./components/card/Card";
import "./App.css";

function App() {
  //the below list helps render list items dynamically, so if the client requires multiple banners(ex: one more offer titled "platinum"), then adding a new list to the below object will make things work dynamically
  /* 
  title: title of the offer(ex: free, plus, pro, platinum)
  amount: price
  userCount: Since the first list item depends on offer, this is a dynamic value too, so we can make changes here as per the need
  iconCheck: helps pass props to 'FaCheck' Component and enable or disable "faCheck" icon
  iconXmark: helps pass props to 'FaXmark' Componentand enable or disable "faXmark" icon
  opactity: helps change the opactity of appropriate list item(1: fully visible, 0.6: blurred/looks like disabled)
  */
  const list = [
    {
      offer: {
        title: "free",
        amount: "0",
        userCount: "Single User",
        iconCheck: [true, true, true, true, false, false, false, false],
        iconXmark: [false, false, false, false, true, true, true, true],
        opacity: ["1", "1", "1", "1", "0.6", "0.6", "0.6", "0.6"],
      },
    },
    {
      offer: {
        title: "plus",
        amount: "9",
        userCount: "5 Users",
        iconCheck: [true, true, true, true, true, true, true, false],
        iconXmark: [false, false, false, false, false, false, false, true],
        opacity: ["1", "1", "1", "1", "1", "1", "1", "0.6"],
      },
    },
    {
      offer: {
        title: "pro",
        amount: "49",
        userCount: "Unlimited Users",
        iconCheck: [true, true, true, true, true, true, true, true],
        iconXmark: [false, false, false, false, false, false, false, false],
        opacity: ["1", "1", "1", "1", "1", "1", "1", "1"],
      },
    },
  ];
  return (
    <div className="container-fluid">
      <div className="row">
        <Card off={list[0]} />
        <Card off={list[1]} />
        <Card off={list[2]} />
      </div>
    </div>
  );
}

export default App;
