import React from "react";
import { useEmailContext } from "../Context/EmailContext";
import { SyncLoader } from "react-spinners";
import { RiCloseLargeFill } from "react-icons/ri";
import { IoIosHeart } from "react-icons/io";

const EmailList = () => {
  const {
    emailList,
    isLoading,
    errorMsg,
    currentPage,
    totalPages,
    setCurrentPage,
    handleClick,
    isSelected,
    handleClose
  } = useEmailContext();
  // console.log(emailList);
  const paginationLink = [];

  for (let i = 1; i <= totalPages; i++) {
    paginationLink.push(i);
  }
  // console.log(paginationLink);

  return (
    <div className="flex flex-col gap-6">
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            padding: "2rem 0 4rem",
          }}
        >
          <SyncLoader color="#E54065" />
        </div>
      )}
      {errorMsg !== "" && (
        <>
          <div className="text-theme-textColor font-bold text-xl text-center">
            {errorMsg}
          </div>
          <div className="text-gray-500 font-semibold text-md text-center pb-6">
            Try again after sometime !!
          </div>
        </>
      )}

      <div className="flex gap-6">
        <div
          className={`flex flex-col gap-4  ${
            isSelected
              ? "w-1/3 lg:w-1/3 overflow-auto max-h-screen scroll-smooth no-scrollbar"
              : "w-full"
          }`}
        >
          {emailList.map((curEle) => {
            // var time = curEle.date
            // var date = new Date(time)
            return (
              <div
                key={curEle.id}
                className={`w-full border-[1.5px] border-theme-borderColor py-3 px-4 rounded-lg flex cursor-pointer  lg:flex-row lg:gap-5 flex-wrap lg:flex-nowrap items-start gap-3 hover:shadow-lg hover:scale-[.99] ${
                  curEle.read ? "bg-theme-readBg" : "bg-white"
                } ${isSelected ? "flex-col" : ""}`}
              >
                <div className="basis-1/12 flex justify-center">
                  <div className="bg-theme-pinkColor w-12 h-12 rounded-full flex justify-center items-center">
                    <p className="text-white font-semibold text-2xl">
                      {curEle.from.name.charAt(0).toUpperCase()}
                    </p>
                  </div>
                </div>

                <div
                  className="flex-1  text-theme-textColor pb-3"
                  onClick={() => handleClick(curEle.id)}
                >
                  <p>
                    From:{" "}
                    <span className="font-semibold text-theme-textColor">
                      {curEle.from.name} {`<${curEle.from.email}>`}
                    </span>
                  </p>
                  <p className="mb-1">
                    Subject:{" "}
                    <span className="font-semibold text-theme-textColor">
                      {curEle.subject}
                    </span>
                  </p>
                  <p className="mb-1">{curEle.short_description}</p>
                  <div className="flex flex-col sm:gap-3 xl:flex-row xl:gap-8">
                    <p>{new Date(curEle.date).toLocaleString()}</p>
                    <span className="text-theme-pinkColor font-semibold">
                      Favorite
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`flex flex-col bg-white border-[1.5px] border-theme-borderColor rounded-lg py-6 xl:py-10 px-6 lg:px-8 gap-4 ${
            isSelected ? "flex-1" : "hidden"
          }`}
        >
          {/* close button */}
          <div className="flex justify-end">
            <RiCloseLargeFill className="text-2xl text-theme-textColor hover:scale-110 cursor-pointer" onClick={()=>handleClose()} />
          </div>

          {/*Email head Section */}
          <div className="flex gap-6">

            <div>
              <div className="bg-theme-pinkColor w-16 h-16 rounded-full flex justify-center items-center">
                <p className="text-white font-semibold text-3xl">F</p>
              </div>
            </div>

            <div className="flex pr-4 flex-1 justify-between items-start">

              <div className="space-y-5 text-theme-textColor">
                <h2 className="text-2xl font-semibold">Lorem Ipsum</h2>
                <p>2/26/2020, 8:35:05 PM</p>
              </div>
              <div className="text-white flex items-center gap-2 bg-theme-pinkColor px-2 md:px-4 py-1 hover:shadow-lg hover:translate-x-[1px] hover:translate-y-[1px] rounded-full cursor-pointer">
                <p className="hidden md:block">Marks as Favorite</p> <IoIosHeart />
              </div>

            </div>

          </div>

          {/*Email body Section */}
          <div className="text-theme-textColor ms-[88px] pe-2 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nemo porro suscipit amet vel consequuntur dignissimos, commodi aliquid ut repellat asperiores ullam quasi eos saepe in fugiat natus odio quis.
            Necessitatibus, iste nostrum. Quod similique autem quaerat expedita reprehenderit, eius laborum reiciendis est eveniet quisquam excepturi ducimus delectus labore, laudantium distinctio fugit. Quas nam tenetur consequatur ratione architecto minima ullam.
            Sit, deritatis sint assumenda repellendus?
            Repellendus explicabo quaerat quibusdam labore accusantium! Iusto accusantium in quos mollitia? Alias eveniet est quia unde iure, numquam accusamus excepturi consequuntur voluptate libero amet voluptatem deleniti ducimus cumque aliquam dolores.
            Necessitatibus, iste nostrum. Quod similique autem quaerat expedita reprehenderit, eius laborum reiciendis est eveniet quisquam excepturi ducimus delectus labore, laudantium distinctio fugit. Quas nam tenetur consequatur ratione architecto minima ullam.
            Sit, deritatis sint assumenda repellendus?
            Repellendus explicabo quaerat quibusdam labore accusantium! Iusto accusantium in quos mollitia? Alias eveniet est quia unde iure, numquam accusamus excepturi consequuntur voluptate libero amet voluptatem deleniti ducimus cumque aliquam dolores.
            Necessitatibus, iste nostrum. Quod similique autem quaerat expedita reprehenderit, eius laborum reiciendis est eveniet quisquam excepturi ducimus delectus labore, laudantium distinctio fugit. Quas nam tenetur consequatur ratione architecto minima ullam.
       
          </div>


        </div>
      </div>

      {!isLoading && (
        <div className="flex gap-6 items-center justify-center">
          {paginationLink.map((curEle, id) => {
            return (
              <button
                key={id}
                className={`px-5 py-1 border-2 border-theme-textColor/60 rounded-lg text-theme-textColor font-bold hover:shadow-xl ${
                  curEle === currentPage ? "bg-theme-textColor/30 " : ""
                }`}
                onClick={() => setCurrentPage(curEle)}
              >
                {curEle}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default EmailList;
