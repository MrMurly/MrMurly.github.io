import { ChangeEventHandler } from "react";
import SearchIcon from "../assets/search-svgrepo-com.svg";

interface SearchBarProps {
  search: ChangeEventHandler<HTMLInputElement>;
}

export const SearchBar = ({ search }: SearchBarProps) => {
  return (
    <>
      <div className="h-15 w-100 flex gap-3 p-1 border border-solid bg-white/10">
        <div className="h-10 w-10 my-auto">
          <img src={SearchIcon} />
        </div>
        <input className="w-100 p-1 " type="text" onChange={search} />
      </div>
    </>
  );
};
