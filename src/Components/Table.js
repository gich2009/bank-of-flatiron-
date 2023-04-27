import React from "react";
import Row from "./Row";


function Table({transactions = [], searchQuery = ""}){

  transactions = transactions.sort((a, b) => {
  const descriptionA = a.description.toLowerCase();
  const descriptionB = b.description.toLowerCase();
  if (descriptionA < descriptionB) {
    return -1;
  }
  if (descriptionA > descriptionB) {
    return 1;
  }
  return 0;
  });


  const filteredList =  transactions.filter((transaction) => searchQuery === "" ? true : transaction["description"].toLowerCase().includes(searchQuery.toLowerCase()));

  
  const listOfTransactions = filteredList.map((transaction) => (
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
