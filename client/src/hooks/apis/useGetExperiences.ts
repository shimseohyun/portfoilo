import { useState } from "react";

import { signInAnonymously } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { auth, ds } from "../../../firebase"; // Firebase 초기화 파일

import { Experience } from "@models/Experience";

// interfaces

const useGetExperiences = () => {
  const [experiences, setExperiences] = useState<Experience[] | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getExperiences = async () => {
    try {
      await signInAnonymously(auth);

      const querySnapshot = await getDocs(collection(ds, "experiences"));
      const experiencesList: Experience[] = [];
      querySnapshot.forEach((docSnap) => {
        experiencesList.push(docSnap.data() as Experience);
      });

      setExperiences(experiencesList);
    } catch (err) {
      console.error("Error getting experiences:", err);
      setError("Error fetching experiences data.");
    } finally {
      setLoading(false);
    }
  };

  return { experiences, loading, error, getExperiences };
};

export default useGetExperiences;
