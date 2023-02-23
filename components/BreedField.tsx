import { useEffect, useRef, useState, KeyboardEvent } from "react";
import useSWR from "swr";
import fuzzysort from "fuzzysort";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const DogBreedField = () => {
  const [term, setTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasFocus, setHasFocus] = useState(false);
  const [dogBreeds, setDogBreeds] = useState<string[]>([]);
  const [selectionIndex, setSelectionIndex] = useState(-1);
  const [selectionMade, setSelectionMade] = useState(false);
  const { data } = useSWR("/api/dog-breeds", fetcher);

  useEffect(() => {
    setDogBreeds(data ? JSON.parse(data) : []);
  }, [data]);

  const foundBreeds = fuzzysort.go(term, dogBreeds).map((r) => r.target);
  foundBreeds.splice(0, 0, term);

  const onSelect = (seletion: string) => {
    setTerm(seletion);
    setSelectionMade(true);
    setSelectionIndex(-1);
  };

  const onFocus = () => {
    setHasFocus(true);
    setSelectionMade(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    setSelectionMade(false);
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (selectionIndex < 0) setSelectionIndex(0);
        else
          setSelectionIndex(
            Math.min(selectionIndex + 1, foundBreeds.length - 1)
          );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectionIndex(Math.max(0, selectionIndex - 1));
        break;
      case "Escape":
        inputRef.current?.blur();
        break;
      case "Enter":
        if (selectionIndex < 0) break;
        e.preventDefault();
        onSelect(foundBreeds[selectionIndex]);
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        placeholder="enter your dogs breed"
        value={term}
        onKeyDown={handleKeyDown}
        className="input h-10"
        onFocus={onFocus}
        onBlur={() => setHasFocus(false)}
        onChange={(event) => setTerm(event.target.value)}
      ></input>
      {hasFocus &&
        !selectionMade &&
        term.length > 0 &&
        foundBreeds.length > 0 && (
          <AutocompleteTable
            data={foundBreeds}
            onSelect={onSelect}
            currentSelection={selectionIndex}
          />
        )}
    </div>
  );
};

const AutocompleteTable = ({
  data,
  currentSelection,
  onSelect,
}: {
  data: string[];
  currentSelection: number;
  onSelect: (selection: string) => void;
}) => {
  return (
    <div className="auto-complete-table">
      {data.map((e, index) => {
        const isCurrentSelection = index === currentSelection;
        return (
          <AutocompleteTableRow
            key={`${e}-${index}`}
            text={e}
            isCurrentSelection={isCurrentSelection}
            onSelect={onSelect}
          />
        );
      })}
    </div>
  );
};

const AutocompleteTableRow = ({
  text,
  isCurrentSelection,
  onSelect,
}: {
  text: string;
  isCurrentSelection: boolean;
  onSelect: (selection: string) => void;
}) => {
  const [isDrag, setIsDrag] = useState(false);
  const onTouchEnd = (selection: string) => {
    if (!isDrag) onSelect(selection);
    setIsDrag(false);
  };
  return (
    <div
      /* eslint-disable */
      className={`py-2 px-2 hover:bg-slate-400 
        ${isCurrentSelection ? "bg-red-600" : ""}
      `}
      /* eslint-enable */
      onClick={() => onSelect(text)}
      onTouchEnd={() => onTouchEnd(text)}
      onTouchMove={() => setIsDrag(true)}
    >
      {text}
    </div>
  );
};
