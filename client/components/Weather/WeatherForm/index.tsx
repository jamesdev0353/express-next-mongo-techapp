import React, { useEffect, useState } from "react";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

function WeatherForm({ func }) {
  const [location, setLocation] = useState("athens");
  const resetForm = () => {
    setLocation("");
  };
  useEffect(() => {
    func(location);
    resetForm();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    func(location);

    resetForm();
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
        placeholder="Search Location"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />
    </Paper>
  );
}

export default WeatherForm;
