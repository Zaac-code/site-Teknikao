import React from 'react'
import { FaSearch } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { GrContactInfo } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";
import { AiOutlineTrademark } from "react-icons/ai";
import './Menu.css'
import './Buttons.css'

const Header = () => {
  return (
    <div className='menu'>
        <nav>
            <ul className='menuItems'>
                <a href=""><li>Produtos</li></a>
                <a href=""><li>Serviços</li></a>
                <a href=""><li>Sobre</li></a>
            </ul>
        </nav>

        <div className='logo'>
            <a className='linkLogo' href="">
                <img className='logoImage' src="src\assets\imagens site\logoBranco-removebg-preview.png" alt="" />
                <div className='tradeMark'><AiOutlineTrademark/></div>
            </a>
        </div> 

        <div className='buttonPack'>
            <div className='contactButton'>
                <button> <IoMdContact/></button>
            </div>

            <div className='languageButton'>
                <button><AiOutlineGlobal/></button>
            </div>
            
            <div className='searchBar'>
                <input type="text" placeholder='Pesquisa' />
                <button><FaSearch/></button>
            </div>
        </div>
    </div>
  )
}

export default Header
