import React from "react";

function Row({date, description, category, amount}){
  // console.log(date, description, category, amount);
  // const [oddRow, setOddRow] = useState(false);

  // if(toggle) setOddRow(!oddRow);

  // const rowClass = oddRow ? "darkRow" : "lightRow";
  return(
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Row;