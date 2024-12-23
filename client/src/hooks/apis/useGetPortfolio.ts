import { useState } from "react";

import { signInAnonymously } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, ds } from "../../../firebase"; // Firebase 초기화 파일

// interfaces
import { Portfolio } from "@models/Portfolio";

const useGetPortfolio = (portfolioID: number) => {
  const [portfolio, setPortfolio] = useState<Portfolio | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getPortfolio = async () => {
    try {
      // 익명 로그인
      await signInAnonymously(auth);

      const docRef = doc(ds, "portfolio", `${portfolioID}`);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // docSnap.data()를 Portfolio 타입으로 캐스팅
        const data = docSnap.data() as Portfolio;
        setPortfolio(data);
      } else {
        console.error("No such document!");
        setError("No such document!");
      }
    } catch (err) {
      console.error("Error getting portfolio:", err);
      setError("Error fetching portfolio data.");
    } finally {
      setLoading(false);
    }
  };

  return { portfolio, loading, error, getPortfolio };
};

export default useGetPortfolio;
