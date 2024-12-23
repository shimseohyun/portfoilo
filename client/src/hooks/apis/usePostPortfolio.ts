import { useState } from "react";

import { signInAnonymously } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, ds } from "../../../firebase"; // Firebase 초기화 파일

// interfaces
import { Portfolio } from "@models/Portfolio";

const usePostPortfolio = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const postPortfolio = async (portfolio: Portfolio) => {
    try {
      await signInAnonymously(auth);

      const docRef = doc(ds, "portfolio", `${portfolio.portfolioID}`);
      await setDoc(docRef, portfolio);
    } catch (error) {
      setError("Error saving portfolio");
    } finally {
      setLoading(true);
    }
  };

  return { loading, error, postPortfolio };
};

export default usePostPortfolio;
