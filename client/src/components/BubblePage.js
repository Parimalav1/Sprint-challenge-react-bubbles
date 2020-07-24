import React, { useState, useEffect } from "react";
import axioswithAuth from "../utils/axioswithAuth";


import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const fetchColors = () => {
    axioswithAuth()
      .get('http://localhost:5000/api/colors')
      .then((res) => setColorList(res.data))
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    fetchColors();
  }, []);

  // const addToSavedList = (color) => {
  //   let newList = savedList.indexOf(color) === -1 ? [...savedList, color] : savedList;
  //   setSavedList(newList);
  // };

  const removeFromColorList = (color) => {
    let newArray = colorList.filter(x => (x.id !== color.id));
    setColorList(newArray);
  };

  const updateColors = (color) => {
    let updatedArray = colorList.map(x => (x.id === color.id? color: x));
    setColorList(updatedArray);
  };

  if (!colorList.length) {
    return <div>Loading movie information...</div>;
  }

  return (
    <>
      <ColorList colors={colorList} 
      updateColors={updateColors} 
      removeFromColorList={removeFromColorList}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
