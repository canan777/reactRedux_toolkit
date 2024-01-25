import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({dt}) => {
  const [openEdit,setOpenEdit] = useState (false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateFunc = () =>{
    dispatch(modalFunc())
    setOpenEdit(false)
    navigate(`/?update=${dt?.id}`)
   
  }

  return (
  <div className="w-[200px] h-[200px] relative m-2 rounded-md">
    <img src={dt?.url} className="w-full h-full rounded-md" alt="" />
    <div className="absolute left-0 button-0 bg-teal-600 text-white w-full px-2">
        <div className="text-lg font-semibold">{dt?.name}</div>
        <div>{dt?.price}$</div>
    </div>
    <div onClick={() => setOpenEdit(!openEdit)}  className="absolute top-0 right-2">
      <BsThreeDots color="teal" size={24}/>
    </div>
    {
    openEdit && (
      <div className="bg-teal-800 border border-white text-white absolute top-5 right-2 p-2 text-sm" >
        <div onClick={() => dispatch(deleteDataFunc(dt?.id))} className="cursor-pointer">Sil</div>
        <div onClick={() => updateFunc()} className="cursor-pointer">Güncelle</div>
      </div>
    )

    }
    
      
      
  </div>
  )
}
  

export default ProductCard;
