import React from "react";
import { useEmailContext } from "../Context/EmailContext";

const FilterSection = () => {

  const {handleFilter,appliedFilter} = useEmailContext()


  return (
    <div className="flex gap-5 text-xl items-center">
      <div>
        <p>Filter By:</p>
      </div>
      <div className="flex gap-5 items-center text-center">
        <button className={`hover:border-theme-textColor px-6 py-[1px] rounded-3xl border-theme-bgColor border-2 ${appliedFilter === "all" && "border-theme-textColor/50 border-2 bg-theme-filtrBtn"}`} onClick={()=>handleFilter("all")} >
          All
        </button>
        <button className={`hover:border-theme-textColor border-2 border-theme-bgColor px-4 rounded-3xl  ${appliedFilter === "unread" && "border-theme-textColor/50 border-2 bg-theme-filtrBtn"} `}
        onClick={()=>handleFilter("unread")} >
          Unread
        </button>
        <button className={`hover:border-theme-textColor border-2 border-theme-bgColor px-4 rounded-3xl ${appliedFilter === "read" && "border-theme-textColor/50 border-2 bg-theme-filtrBtn"}`}
         onClick={()=>handleFilter("read")} >
          Read
        </button>
        <button  className={`hover:border-theme-textColor border-2 border-theme-bgColor px-4 rounded-3xl ${appliedFilter === "favorites" && "border-theme-textColor/50 border-2 bg-theme-filtrBtn"}`}
        onClick={()=>handleFilter("favorites")} >
          Favorites
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
