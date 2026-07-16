import React, { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [network, setNetwork] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setNetwork(false);
    });

    window.addEventListener("online", () => {
      setNetwork(true);
    });
  });
  return network;
};

export default useOnlineStatus;
