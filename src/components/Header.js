import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import {BsBag} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg'

const Header = () => {
  const{isOpen, setIsOpen} = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext);

  return (
    <header className='bg-black text-white '>
      <div className='container mx-auto flex items-center justify-between h-full'>
      <Link to={'/'}></Link>
      <div>
        <img className='w-[30px] fill-white	' src={Logo}></img>
      </div>

      {/*carrinho */}
      <div onClick={() => setIsOpen(!isOpen)} className='container cursor-pointer flex relative justify-end'>
        <BsBag className='text-2x1'/>
        <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
      </div>

      </div>
    </header>
  );
};

export default Header;
