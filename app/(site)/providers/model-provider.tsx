"use client";

import { useEffect, useState } from "react";
import AddTokenxModel from "../models/addToken";


export const  ModalProvider = () => {
  const [isMounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AddTokenxModel />
    </>
  );
};
