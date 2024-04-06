"use client";

import { Button } from "@mui/material";

export default function PostButton() {
  function handleClick() {
    fetch("http://localhost:3000/examples", { method: "POST" })
      .then((res) => {
        // Check if the response status indicates success
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse the JSON data from the response
        return res.json();
      })
      .then((data) => {
        // Handle the parsed JSON data
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch operation
        console.error("Fetch error:", error.message);
      });
  }

  return (
    <Button data-test="post-button" onClick={handleClick}>
      Post Data
    </Button>
  );
}
