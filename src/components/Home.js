import { Card } from "./Card";
import { Navbar } from "./Navbar";

export function Home(){
  return (
    <div className="w-full">
         {/* <div class="relative flex h-16 items-center justify-between">  
         <Navbar/>
         </div> */}
       <Navbar/>
       <div className="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4">
       <Card/>
       </div>
       
    </div>
  );
};