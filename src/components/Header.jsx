function Header(){
    return(
        <>
    <header className=" h-60 flex flex-col bg-gradient-to-b from-[#1606f1] to-transparent">
    <div className="flex justify-between mt-16">
        <h1 className="text-white  font-bold ml-4 text-2xl">Good morning, <br /> Samuel Walker!</h1>

    <div className="flex gap-4 mr-2">
        <div className="bg-customgray rounded-full flex items-center justify-center w-14 h-14">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#4C36E0" d="M4 19v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h2v2zm8 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22"/></svg>
        </div>
        <div className=" ">
            <img className="rounded-full w-14 h-14 border-2 border-gray-400 " src="assets/ronaldo.jpg" alt="The Goat" />
        </div>

    </div>
    </div>

        <div className="mt-8 flex justify-center px-4">
  
  <div className="relative w-full max-w-xl">
    
    <input
      className="bg-white h-12 w-full rounded-2xl pl-12 pr-14 shadow-sm focus:outline-none"
      type="text"
      placeholder="Search..."
    />

    {/* Search icon */}
    <svg
      className="absolute left-4 top-1/2 -translate-y-1/2"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
    >
      <path
        fill="#000"
        d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
      />
    </svg>

    {/* Filter button */}
    <div className="bg-customblue rounded-xl w-10 h-10 absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
      >
        <g fill="white" stroke="white" strokeLinecap="round" strokeWidth="1">
          <path d="M5 12V4m14 16v-3M5 20v-4m14-3V4m-7 3V4m0 16v-9" />
          <circle cx="5" cy="14" r="2" />
          <circle cx="12" cy="9" r="2" />
          <circle cx="19" cy="15" r="2" />
        </g>
      </svg>
    </div>

  </div>

</div>
        

    </header>
        </>
    );
}
export default Header