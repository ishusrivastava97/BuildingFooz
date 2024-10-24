import { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
const styles = {
    wrapper:`bg-[#fb5b5b] text-black text-center py-2 font-bold fixed top-0 w-full z-50`,
    headermain:` mt-10  bg-[#fdbdbd] text-center flex items-center h-[80px] `
}
const Header = () => {
  const [isActive, setIsActive] = useState("home");
// eslint-disable-next-line no-unused-vars
const handleClick = (event) => {
    event.preventDefault();
    setIsActive(true);
  };
  return (
    <>
    <div className={styles.wrapper} >
        FLAT 30% OFF ON ALL PRODUCTS! USE CODE: <strong>FOOZ</strong>
    </div>
    <header className={styles.headermain}>
      <div  className="flex cursor-pointer">
        <img src="/file.png" alt=""  className=" h-[50px] w-[170px] mt-3 "  />
      </div>
      <div className="mx-auto text-2xl" >
        <nav className="hidden md:flex space-x-6">
        <Link to={'/'} className={`transition ${isActive=="home" ? 'text-gray-400' : 'hover:text-black-400'}`}
      onClick={()=>{setIsActive("home")
        
      }}>
          Home
        </Link>
        <Link to={'/about'} className={`transition ${isActive=="about" ? 'text-gray-400' : 'hover:text-black-400'}`}
      onClick={()=>{setIsActive("about")
        
      }}>
          About Us
        </Link>
        <Link to={'/becomeapartner'} className={`transition ${isActive=="partner" ? 'text-gray-400' : 'hover:text-black-400'}`}
      onClick={()=>{setIsActive("partner")
        
      }}>
          Become a Partner
        </Link>
        <Link to={'/favorite'} className={`transition ${isActive=="more" ? 'text-gray-400' : 'hover:text-black-400'}`}
      onClick={()=>{setIsActive("more")
        
      }}>
          Favorite
        </Link>
        {/* while be working on the More Options Later on :-
        have to add dropdown and in that dropdown have to add more options and setup routing and all then will build that pages.
        */}
        <Link  className={`transition ${isActive=="favorite" ? 'text-gray-400' : 'hover:text-black-400'}`}
      onClick={()=>{setIsActive("favorite")
        
      }}>
          More
        </Link>
        
      </nav>
      </div>
      <div className="flex items-center gap-[45px] ">
        <Link to={'/login'} >
          <button className="w-[100px] h-[45px] outline-none border border-[#7a7a7a] rounded-[75px] text-[#515151] text-[20px] font-medium bg-white cursor-pointer active:bg-[#f3f3f3] " >Login</button>
        </Link>
        <Link to={'/cart'} >
        <MdOutlineShoppingCart  className="h-[45px] w-[45px] cursor-pointer" />
        </Link>
        <div className="w-[22px] h-[22px] flex justify-center items-center -mt-[35px] -ml-[55px] rounded-[11px] text-[14px] bg-red-500 text-white" >0
        </div>
        
      </div>
    </header>
    </>
  )
}
export default Header