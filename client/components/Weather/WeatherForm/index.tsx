import React, { useCallback, useEffect, useState } from "react";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

function WeatherForm({ func }) {
  const [location, setLocation] = useState("tarifa");
  const resetForm = () => {
    setLocation("");
  };
  const memoizedCallback = useCallback(() => {
    func(location);
    resetForm();
  }, [func, location]);
  useEffect(() => {
    memoizedCallback();
  }, []);

  const handleSubmit = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
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
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => setLocation(e.target.value)}
        value={location}
      />
    </Paper>
  );
}

export default WeatherForm;
