import { useEffect, useState } from "react";
import { charactersAdapter } from "../../adapters/AllCharacters.adapters";
import { useFetchAndLoad } from "../../hooks/useFetchAndLoad.hooks";
import { globalCharacters } from "../../services/fetchingCharacters.service";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { rootStateFromRedux } from "../../models/useSelectorReturn.models";
import { getAllCharacters } from "../../redux/charactersSlice/characterSlice.redux";
import { CardCharacter } from "./components/CardCharacter.pages.charactersContainer.components";
import { Spinner } from "../../components/Spinner";
import { Pagination } from "../../components/Pagination";

export const AllCharactersContainer = () => {
  const { loading, callEndPoint } = useFetchAndLoad();
  const dispatch = useDispatch();
  const numberOfPageFromReduxState = useSelector(
    (state: rootStateFromRedux) => state.pagination.value
  );

  useEffect(() => {
    const callToEndPoint = async () => {
      const dataFromEndPoint = await callEndPoint(
        globalCharacters(numberOfPageFromReduxState)
      );
      const dataResults = dataFromEndPoint.results.map((e: any) => e);
      const formattedData = charactersAdapter(dataResults);
      dispatch(getAllCharacters(formattedData));
    };
    callToEndPoint();
  }, [numberOfPageFromReduxState]);

  if (loading)
    return (
      <div className="bg-[#fdfcdc] w-screen h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );

  return (
    <>
      <section className="bg-[#fdfcdc] w-screen  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center pb-24">
        <CardCharacter />
      </section>
      <Pagination />
    </>
  );
};
