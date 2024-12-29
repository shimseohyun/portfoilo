import { useState } from "react";

import { signInAnonymously } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { auth, ds } from "../../../firebase"; // Firebase 초기화 파일
import { Award } from "@models/Experience";

// interfaces

const useGetAwards = () => {
  const [awards, setAwards] = useState<Award[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getAwards = async () => {
    try {
      await signInAnonymously(auth);

      const querySnapshot = await getDocs(collection(ds, "awards"));
      const awardsList: Award[] = [];
      querySnapshot.forEach((docSnap) => {
        awardsList.push(docSnap.data() as Award);
      });

      setAwards(awardsList);
    } catch (err) {
      console.error("Error getting awards:", err);
      setError("Error fetching awards data.");
    } finally {
      setLoading(false);
    }
  };

  return { awards, loading, error, getAwards };
};

export default useGetAwards;
