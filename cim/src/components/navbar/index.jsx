import { NavLink } from 'react-router-dom'

import logo from '../../assets/icon/logo-cim.png'
import signin from '../../assets/icon/user.png'
import shoppingCart from '../../assets/icon/shopping-cart.png'


const Navbar = () => {
  const activeStyle = 'underline underline-offset-4'

  return (
<<<<<<< HEAD
    <nav className='flex justify-center  z-10 w-full text-lg border-b-4 font-light max-h-28 '>
      <ul className='flex items-center gap-20 '>
=======
    <nav className='flex justify-between items-center z-10 w-full py-5 px-8 text-sm font-light '>
      <ul className='flex items-center gap-3'>
>>>>>>> develop
        <li className='font-semibold text-lg'>
          <div>
          <NavLink to='/'>
            Home
          </NavLink>
          </div>
        </li>
        <li>
          <div>
          <NavLink
            to='/nosotros'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            us
          </NavLink>
          </div>
        </li>
        <li>
          <div>
          <NavLink
            to='/productos'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            products
          </NavLink>
          </div>
        </li>
        <li>
          <div>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            <img src={logo} alt="" />
          </NavLink>
          </div>
        </li>
        <li>
          <div>
          <NavLink
            to='/recetas'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              Recipes
          </NavLink>
          </div>
        </li>
        <li>
          <div>
          <NavLink
            to='/cursos'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              Courses
          </NavLink>
          </div>
        </li>
        <li>
          <div>
          <NavLink
            to='/mas'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              Further
          </NavLink>
          </div>
        </li>
        <li>
        <div>
          <NavLink
            to='/iniciar-sesion'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              <img src={signin} alt="" />
          </NavLink>
          </div>
        </li>
        <li>
        <div>
          <NavLink
            to='/carrito'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              <img src={shoppingCart} alt="" />
          </NavLink>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar