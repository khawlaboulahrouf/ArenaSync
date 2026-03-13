//src/components/Header

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
            <img className="rounded-full w-14 h-14 border-2 border-gray-400 " src="assets/ronaldo.jpg" alt="ronaldo" />
        </div>

    </div>
    </div>

        <div className="relative mt-8 flex items-center justify-center h-12 ">
            
            <div className="bg-customblue rounded-2xl w-10 h-10 absolute right-8 flex items-center justify-center">

            </div>
        </div>
        

    </header>
        </>
    );
}
export default Header