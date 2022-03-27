import React, { useState } from "react";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

function CryptoForm({ cryptos, func }) {
  const [boolData, setBoolData] = useState(true);
  const [searchCrypto, setSearchCrypto] = useState({
    name: "",
    price: 0,
    symbol: "",
  });

  const resetForm = () => {
    setSearchCrypto({
      name: "",
      price: 0,
      symbol: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    cryptos.map((crypto, index) => {
      if (crypto.name.toLowerCase() === searchCrypto.name.toLowerCase()) {
        console.log("found one", index);
        setBoolData(true);
        func(index, boolData);
      }

      resetForm();
    });
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
      }}
      onSubmit={handleSubmit}
    >
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Crypto"
        onChange={(e) => setSearchCrypto({ name: e.target.value })}
        value={searchCrypto.name}
      />
    </Paper>
  );
}

export default CryptoForm;
