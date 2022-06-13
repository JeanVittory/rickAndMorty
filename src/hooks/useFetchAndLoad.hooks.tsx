import { useEffect, useState } from "react";
import { globalCharacterReturn } from "../models/globalCharacter.models";

export const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(false);
  let controller: AbortController;
  const callEndPoint = async (petition: globalCharacterReturn) => {
    setLoading(true);
    if (petition.controller)
      controller = petition.controller;
    try {
      let result = await petition.call;
      let response = await result.json()   
      setLoading(false);
      return response
    } catch (e) {
      setLoading(false);
      throw Error("Failed to fetch");
    }
  };

  const abortCall = () => {
    setLoading(false);
    controller && controller.abort();
  };

  useEffect(() => {
    return abortCall();
  }, []);

  return { loading, callEndPoint };
};
