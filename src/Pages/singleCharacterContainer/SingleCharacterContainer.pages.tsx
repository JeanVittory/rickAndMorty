import { useParams } from "react-router-dom";
import { useFetchAndLoad } from "../../hooks/useFetchAndLoad.hooks";
import { useEffect } from "react";
import { singleCharacter } from "../../services/fetchingCharacters.service";
import { singleCharacterAdapater } from "../../adapters/singleCharacter.adapters";
import { Spinner } from "../../components/Spinner";
import { useDispatch } from "react-redux";
import { updateSingleCharacter } from "../../redux/singleCharacterSlice/singleCharacterSlice.redux";
import { singleCharacterModel } from "../../models/singleCharacter.models";
import { CardSingleCharacter } from "./components/CardSingleCharacter.pages.singleCharacterContainer.components";
import { ButtonGoBack } from "./components/Button.pages.singleCharacteRContainer.components";

export const SingleCharacterContainer = () => {
  const { loading, callEndPoint } = useFetchAndLoad();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const callToEndPoint = async () => {
      const dataFromEndPoint = await callEndPoint(
        singleCharacter(id as string)
      );
      const formattedData: singleCharacterModel =
        singleCharacterAdapater(dataFromEndPoint);
      dispatch(updateSingleCharacter(formattedData));
    };
    callToEndPoint();
  }, [id]);

  if (loading) return <Spinner />;

  return (
    <section className="container mx-auto">
      <ButtonGoBack/>
      <CardSingleCharacter />
    </section>
  );
};
