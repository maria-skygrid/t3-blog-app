import { CiSearch } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";

import Header from "../components/Header";
import Post from "../components/Post";
import Topics from "../components/Topics";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
    
      <section className="grid grid-cols-12 place-items-center h-full">
        {/* main */}
        <main className="col-span-12 md:col-span-8 w-full h-full border-r border-slate-300">
          <div className="flex flex-col space-y-4 w-full py-10 px-20 border-b border-slate-300">
            {/* search bar & tags */}
            <div className="flex space-x-4 w-full items-center">
              {/* lable */}
              <label htmlFor="search" className="flex items-center space-x-2 w-full">
                <CiSearch className="text-2xl"/>
                <input 
                  type="text" 
                  name="search" 
                  id="search" 
                  className="w-full border outline-none px-4 py-1 border-gray-400 rounded-md placeholder:text-gray-400 placeholder:text-sm"
                  placeholder="placeholder"
                />
              </label>

              <div className="flex w-full items-center space-x-4 justify-end">
                <Topics style="justify-end"/>
              </div>
            </div>

            <div className="w-full flex items-center justify-between">
              {/* articles */}
              <div>
                <p>Articles</p>
              </div>
              {/* following */}
              <div>
                <button className="font-semibold flex items-center space-x-2 border border-slate-500 rounded-lg px-4 py-1">
                  <p>Following</p>
                  <GoChevronDown className="text-xl"/>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full py-10 px-20 space-y-7 flex flex-col justify-center">
            <Post />
          </div>

        </main>

        {/* aside */}
        <aside className="col-span-12 md:col-span-4 w-full h-full">wea</aside>
      </section>
    </div>
  )
}

export default HomePage;