import { ChangeEvent } from "react";
import { optionType } from "../types";
declare type Props = {
    term: string;
    options: [];
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onOptionSelect: (option: optionType) => void;
    onSubmit: () => void;
};
declare const Search: ({ term, options, onInputChange, onOptionSelect, onSubmit, }: Props) => JSX.Element;
export default Search;
