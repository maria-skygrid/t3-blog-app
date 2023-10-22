import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";


const Header = () => {
  return (
    <header className="h-[100px] w-full flex justify-around items-center border-b border-slate-300">
      <AiOutlineMenu className="text-2xl text-gray-400" />
      <h1 className="font-thin text-lg">Bloggo</h1>
      <div className="flex justify-between items-center space-x-4">
        <AiOutlineBell className="text-2xl" />
        <div>
          <div className="h-8 w-8 rounded-full bg-slate-500"></div>
        </div>
        <button className="px-4 py-2.5 space-x-2 flex items-center border border-gray-200 rounded transition hover:border-gray-400">
          <p>Write</p>
          <BiEdit />
        </button>
      </div>
    </header>
  )
}

export default Header;