import React from "react";
import { useEmailContext } from "../Context/EmailContext";
import { SyncLoader } from "react-spinners";
import { RiCloseLargeFill } from "react-icons/ri";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const EmailList = () => {
  const {
    isLoading,
    errorMsg,
    currentPage,
    totalPages,
    setCurrentPage,
    isBodyLoading,
    isSelected,
    handleClose,
    getEmailBody,
    emailBody,
    emailBodyDetails,
    handleFavorite,
    readAndFavorite,
    filteredEmail,
    appliedFilter
  } = useEmailContext();
  // console.log(emailList);
  const paginationLink = [];

  for (let i = 1; i <= totalPages; i++) {
    paginationLink.push(i);
  }
  // console.log(paginationLink);
  const clearLocalStorage = () => {
    localStorage.removeItem('Info')
    window.location.reload()
  }

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
              ? "w-1/3 lg:w-1/3 overflow-auto h-screen scroll-smooth no-scrollbar"
              : "w-full"
          }`}
        >
          {filteredEmail.map((curEle) => {
            // var time = curEle.date
            // var date = new Date(time)
            const item = readAndFavorite.filter((item)=>item.id === curEle.id)
            // console.log(item[0].read);
            
            return (
              <div
                key={curEle.id}
                className={`w-full border-[1.5px] border-theme-borderColor py-3 px-4 rounded-lg flex cursor-pointer  lg:flex-row lg:gap-5 flex-wrap lg:flex-nowrap items-start gap-3 hover:shadow-lg hover:scale-[.99] 
                  ${item[0].read ? "bg-theme-readBg" : "bg-white"} 
                  ${isSelected ? "flex-col" : ""}`}
                onClick={() => getEmailBody(curEle.id)}
              >
                <div className="basis-1/12 flex justify-center">
                  <div className="bg-theme-pinkColor w-12 h-12 rounded-full flex justify-center items-center">
                    <p className="text-white font-semibold text-2xl">
                      {curEle.from.name.charAt(0).toUpperCase()}
                    </p>
                  </div>
                </div>

                <div className="flex-1  text-theme-textColor pb-3">
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
                      {item[0].isFavorite && "Favorite"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

        </div>

        <div
          className={`flex flex-col bg-white border-[1.5px] border-theme-borderColor rounded-lg py-6 xl:py-10 px-6 lg:px-8 gap-4 ${
            isSelected ? "flex-1 " : "hidden"
          }`}
        >
          {isBodyLoading ? (
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
          ) : 

           (
            <>
              {/* close button */}
              <div className="flex justify-end">
                <RiCloseLargeFill
                  className="text-2xl text-theme-textColor hover:scale-110 cursor-pointer"
                  onClick={() => handleClose()}
                />
              </div>

              {/*Email head Section */}
              <div className="flex gap-6">
                <div>
                  <div className="bg-theme-pinkColor w-16 h-16 rounded-full flex justify-center items-center">
                    <p className="text-white font-semibold text-3xl">{emailBodyDetails.name.charAt(0).toUpperCase()}</p>
                  </div>
                </div>

                <div className="flex pr-4 flex-1 justify-between items-start">
                  <div className="space-y-5 text-theme-textColor">
                    <h2 className="text-2xl font-semibold">{emailBodyDetails.subject}</h2>
                    {/* {console.log(emailBodyDetails.from)} */}
                    
                    {/* <p>2/26/2020, 8:35:05 PM</p> */}
                    <p>{new Date(emailBodyDetails.date).toLocaleString()}</p>
                  </div>
                  <div className="text-white flex items-center gap-2 bg-theme-pinkColor px-2 md:px-4 py-1 hover:shadow-lg hover:translate-x-[1px] hover:translate-y-[1px] rounded-full cursor-pointer" onClick={()=>handleFavorite(emailBodyDetails.id)}>
                    
                    <p className="hidden md:block">
                      {(readAndFavorite.find((item)=>item.id === emailBodyDetails.id )?.isFavorite) ? "Remove from Favorite" : "Mark as Favorite"}
                    </p>
                    {/* <p className="hidden md:block">Mark as Favorite</p> */}
                      {
                        (readAndFavorite.find((item)=>item.id === emailBodyDetails.id )?.isFavorite) ? <MdFavorite /> : <MdFavoriteBorder />

                      }

                      
                    
                    {/* {emailBodyDetails.favorite ? <MdFavorite /> : <MdFavoriteBorder />} */}
                  </div>
                </div>
              </div>

              {/*Email body Section */}
              <div className="text-theme-textColor ms-[88px] pe-2 text-justify" dangerouslySetInnerHTML={{ __html: emailBody.body }}>
              </div>
            </>
          )}
        </div>
      </div>

      {/* {(filteredEmail == []) && <p>No Items</p>} */}

      {
        (!isLoading && appliedFilter === "all" ) ? 
        (
          <div className="flex flex-col gap-3 items-center justify-center">
          <div className="space-x-3">
          {paginationLink.map((curEle, id) => {
            return (
              <button
              key={id}
              className={`px-5 py-1 border-2 border-theme-textColor/60 rounded-lg text-theme-textColor font-bold hover:shadow-xl hover:border-theme-textColor ${
                curEle === currentPage ? "bg-theme-textColor/30 " : ""
              }`}
              onClick={() => setCurrentPage(curEle)}
              >
                {curEle}
              </button>
            );
          })}
          </div>
          <button className="px-5 py-1 border-2 border-theme-textColor/60 rounded-lg text-theme-textColor font-semibold hover:shadow-xl active:bg-theme-textColor/10 hover:border-theme-textColor" onClick={clearLocalStorage}>
            Clear Local Data
          </button>
        </div>
        ) : (!isLoading && filteredEmail.length === 0) ? (
          <div className="text-theme-textColor font-bold text-2xl text-center">
            No Items Found !!
          </div>
        ) : null
      }



    </div>
  );
};

export default EmailList;
