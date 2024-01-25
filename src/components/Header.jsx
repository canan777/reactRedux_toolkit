import React from "react";
import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { searchDataFunc,sortingDataFunc } from "../redux/dataSlice";


const Header = () => {
    const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between bg-teal-600 text-white px-4 py-3">
      <div className="text-3xl">REACT UYGULAMA</div>
      <div className="flex items-center gap-5">
        <div className="text-black">
            <select onChange={e => dispatch(sortingDataFunc(e.target.value))} className="h-10 rounded-lg" name="" id="">
                <option value="asc">ARTAN</option>
                <option value="desc">AZALAN</option>
            </select>
        </div>
            <input onChange={e => dispatch(searchDataFunc(e.target.value))} className="h-10 rounded-lg px-4 text-black" type="text" placeholder="arama yapınız..." />
        <div onClick={() => dispatch(modalFunc())}  className="bg-teal-900 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
         <MdPostAdd size={24}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
