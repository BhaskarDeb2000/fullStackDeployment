import React, { useState, useEffect } from "react";
import axios from "axios";

const Greet = () => {
  const [greet, setGreet] = useState("");
  useEffect(() => {
    const fetchHi = async () => {
      const res = await axios.get(
        "https://full-stack-deployment-sandy.vercel.app/hi"
      );
      setGreet(res.data);
    };
    fetchHi();
  }, []);

  return <div>{greet}</div>;
};

export default Greet;
