import React from "react";

const FilterSection = () => {


  return (
    <div className="flex gap-5 text-xl items-center">
      <div>
        <p>Filter By:</p>
      </div>
      <div className="flex gap-5 items-center text-center">
        <button className="px-6 py-[1px] rounded-3xl border-2 border-theme-borderColor bg-theme-filtrBtn">
          All
        </button>
        <button className="hover:border-theme-borderColor border-2 border-transparent px-4 rounded-3xl hover:bg-theme-filtrBtn/30"
        //  className="px-6 py-[1px] rounded-3xl border-2 border-theme-borderColor bg-theme-filtrBtn"
         >
          Unread
        </button>
        <button className="hover:border-theme-borderColor border-2 border-transparent px-4 rounded-3xl hover:bg-theme-filtrBtn/30"
        //  className="px-6 py-[1px] rounded-3xl border-2 border-theme-borderColor bg-theme-filtrBtn"
         >
          Read
        </button>
        <button  className="hover:border-theme-borderColor border-2 border-transparent px-4 rounded-3xl hover:bg-theme-filtrBtn/30"
        // className="px-6 py-[1px] rounded-3xl border-2 border-theme-borderColor bg-theme-filtrBtn"
        >
          Favorites
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
