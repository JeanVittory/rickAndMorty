import { useSelector } from "react-redux";
import { rootStateFromRedux } from "../../../models/useSelectorReturn.models";
import "../../../App.css";
import { Figcaption } from "./Figcaption.pages.charactersContainer.components";


export const CardCharacter = () => {
  const dataFromRedux = useSelector(
    (state: rootStateFromRedux) => state.allCharacters
  );
  const dataCharacter = dataFromRedux.data;

  return (
    <>
      {dataCharacter.map((e) => (
        <figure
          key={e.id}
          className="w-full flex flex-col justify-center items-center mt-20"
        >
          <img src={e.image} alt="avatar" className="rounded-full " />
          <Figcaption id={e.id} name={e.name} status={e.status} species= {e.species} />
        </figure>
      ))}
    </>
  );
};
