import React from "react";
import "./styles.css";
class Hello extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.aryList[0]}</h3>
        <h3>{this.props.aryList[1]}</h3>
        <h3>{this.props.aryList[2]}</h3>
        <h3>{this.props.aryList[3]}</h3>
        <h3>{this.props.aryList[4]}</h3>
        <h2>
          Hello ,This tells ablot The Number of items Are present in the Array
        </h2>
        <h1>The Number of Messages are : {this.props.aryList.length}</h1>
      </div>
    );
  }
}

export default function App() {
  let aryList = ["Nag", "Mar", "Nani", "Aharnika", "Jagadeep"];
  return (
    <div className="App">
      <Hello aryList={aryList} />
      <h1>Render Based on the size of the array</h1>
      <h2>This is the magic of react js</h2>
    </div>
  );
}
