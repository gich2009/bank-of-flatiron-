import React from "react";
import Row from "./Row";


function Table({transactions = [], searchQuery = ""}){

  const listOfTransactions =  transactions.filter( (transaction) => {console.log(searchQuery); return searchQuery === "" ? true : transaction["description"].includes(searchQuery)})
  .map((transaction) => (
    <Row key={transaction["id"]} date={transaction["date"]} description={transaction["description"]} category={transaction["category"]} amount={transaction["amount"]} toggle={true}/>
  ));

  return (
    <table className="table-display">
      <thead>
      <tr>
         <th>Date</th>
         <th>Description</th>
         <th>Category</th>
         <th>Amount</th>
       </tr>
      </thead>
      <tbody>
        {listOfTransactions}
      </tbody>
    </table>
  );

}

export default Table;
