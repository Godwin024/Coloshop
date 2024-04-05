import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './Catergories.css'
import { useDispatch } from 'react-redux'

import eletronics from "../../assets/eletronics.jpeg"
import mens from "../../assets/mens.jpg"


import womens from "../../assets/womens.jpg"
import { useSelector } from 'react-redux'

import pear from "../../assets/pear.jpeg"
import { GetAllCategories } from '../Global/Features'


const Categories = () =>{


    const dispatch = useDispatch()

    const Nav = useNavigate()

    const categor = useSelector((state)=>state.persistedReducer.AllCategories)
    console.log(categor)
  
   

    useEffect(()=>{ 
            fetch('https://fakestoreapi.com/products/categories')
             .then(res=> res.json())
             .then(data=> dispatch(GetAllCategories(data)))
             .catch(err=> console.log(err))

}, [])



    return (
    
        <div className='categoriesBody'>
            <div className='categoriesWrap'>

              {
                categor?.map((category) =>(
                    <div className='categoriesCardFrame'>
                        <div className='images' style={{backgroundImage: category === "electronics" ?`url(${eletronics})` : category === "jewelery" ?`url(${pear})`:category === "men's clothing" ?`url(${mens})`: category === "women's clothing" ?`url(${womens})`: null }}>
                            {/* <img src= " " alt=""/> */}
                        </div>
                    <div className='categoriesCardTextHolder' onClick={()=>Nav(`categories/${category}`)}>
                        {category}
                    </div>
                </div>
                ))
              }              
                    
            </div>
        </div>
        
    )
}



export default Categories