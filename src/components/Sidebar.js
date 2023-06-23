import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';


const Sidebar = () => {

  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart } = useContext(CartContext)

  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'}
    w-full bg-white fixed top-0 h-full shadow-2x1 md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Carrinho (0)</div>

        <div onClick={(handleClose)}
          className='cursor-poiter w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2x1 cursor-pointer' />
        </div>
      </div>

      {/*Itens do carrinho*/}
      <div className='py-6 border-b'>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          {/* preço total */}
          <div className='uppercase font-semibold'>
            <span className='font-semibold mr-2'>Total: </span>
            R$ 1000
          </div >
          {/* limpar carrinho */}
          <div onClick={clearCart} className='cursor-pointer py-4 bg-black text-white w-12 h-12 flex justify-center items-center text-x1'>
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar