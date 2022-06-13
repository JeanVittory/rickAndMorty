import { useSelector } from "react-redux";
import { rootStateFromRedux } from "../../../models/useSelectorReturn.models";
import { singleCharacterModel } from "../../../models/singleCharacter.models";

export const CardSingleCharacter = () => {
  const singleCharacterFromRedux = useSelector(
    (state: rootStateFromRedux) => state.singleCharacter.value
  );
  console.log(singleCharacterFromRedux.location);

  return (
    <figure className="lg:w-9/12 md:w-full mx-auto grid grid-cols-1 md:grid-cols-2  mt-20">
      <img
        src={singleCharacterFromRedux.image}
        alt="avatar"
        className="rounded-xl mx-auto"
      />
      <h2 className="md:hidden font-nuntio font-bold text-lg mt-20 p-4">Information:</h2>
      <figcaption className="flex flex-col justify-center gap-y-2 mt-4 md:mt-0 p-4">
        <p className="font-nunito font-semibold p-1 border-b-2">
          Name:{" "}
          <span className="font-normal tracking-wide">
            {singleCharacterFromRedux.name}
          </span>
        </p>
        <p className="font-nunito font-semibold p-1 border-b-2">
          Status:{" "}
          <span className="font-normal">{singleCharacterFromRedux.status}</span>
        </p>
        <p className="font-nunito font-semibold p-1 border-b-2">
          Origin:{" "}
          <span className="font-normal tracking-wide">
            {singleCharacterFromRedux.origin}
          </span>
        </p>
        <p className="font-nunito font-semibold p-1 border-b-2">
          Location:{" "}
          <span className="font-normal tracking-wide">
            {singleCharacterFromRedux.location}
          </span>
        </p>
        <p className="font-nunito font-semibold p-1 border-b-2">
          Gender:{" "}
          <span className="font-normal tracking-wide">
            {singleCharacterFromRedux.gender}
          </span>
        </p>
        <p className="font-nunito font-semibold p-1 border-b-2">
          Species:{" "}
          <span className="font-normal tracking-wide">
            {singleCharacterFromRedux.species}
          </span>
        </p>
        {singleCharacterFromRedux.type && (
          <p className="font-nunito font-semibold">
            Species:{" "}
            <span className="font-normal tracking-wide">
              {singleCharacterFromRedux.type}
            </span>
          </p>
        )}
      </figcaption>
    </figure>
  );
};
