import React, { useEffect, useState } from "react";

const Menu = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    var fn = fetch("https://67c79445c19eb8753e7a176f.mockapi.io/menus");
    var fn1 = fn.then((res) => {
      return res.json();
    });
    var fn2 = fn1.then((data) => {
      setArray(data);
    });
  });

  return (
    <ul>
      {array.map((item, index) => {
        return <li key={index}>{item.item}</li>;
      })}
    </ul>
  );
};

export default Menu;
