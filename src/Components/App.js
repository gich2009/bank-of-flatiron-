import React, { useState, useEffect } from "react";
import '../App.css';
import Header from "./Header";
import Searchbar from "./Searchbar";
import Form from "./Form"
import Table from "./Table"

const baseURL = "http://localhost:8001";
const endPoint = baseURL + "/transactions";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchQuery, setSearchQuery]   = useState("");


  useEffect(() => {
    fetch(endPoint, {method: "GET"})
    .then((response) => response.json())
    .then((data) => setTransactions(data));
  }, []);


  function updateTable(newTransaction){
    setTransactions([...transactions, newTransaction]);
  }

  return (
    <div className="App">
      <Header headerText={"The Royal Bank of Flatiron"} />
      <Searchbar placeholder={"Search your Recent Transactions"} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Form onUpdateTable={updateTable} />
      <Table transactions={transactions} searchQuery={searchQuery} />
    </div>
  );
}

export default App;

