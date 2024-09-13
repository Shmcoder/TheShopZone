import React from 'react'
import logo_image from '../assets/logo.png'
import cart_image from '../assets/cart_icon.png'
import { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
import { useNavigate } from 'react-router-dom'

const Header = (param) =>{
const [menu,setMenu] = useState("shop");
let user =localStorage.getItem('person')
user=JSON.parse(user)

const navigate=useNavigate();

// console.log(param)




  // console.log(param.props.displayName)
  // React.useEffect(()=>{
  //   if(param & param.props.displayName){
  //     setUser(param.props.displayName);
  //     console.log(param.props)
  //   }
    
  // },[])


  const handleLogout =()=>{

    localStorage.removeItem('person')
            
            localStorage.removeItem('accessToken');
            // console.log(response);
            localStorage.removeItem('refreshToken');
            navigate('/login')

            
            

  }

  return (
    <>
    <div className="nav">
    <div className="nav-logo">
      <img className='logo' src={logo_image} alt="logo" />
        <h1 className='brand'><span className='D'>D</span> Mart</h1>
    </div>
    <Search />
      <ul className='menu'>
          <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{(menu==="shop")?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Mens</Link>{(menu==="mens")?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Womens</Link>{(menu==="womens")?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{(menu==="kids")?<hr/>:<></>}</li>
        </ul>
      <div>
        <p> {user.displayName? "hello "+user.displayName+"  !" :"Login please.."}</p>
      </div>
      <div>
        {/* {console.log(param.props.photoURL)} */}
        <img src={user.photoURL} style={{maxHeight:60,maxWidth:60,borderRadius:15}} alt="image" />
      </div>
    
    <div className="nav-login">
      <button className='login'  onClick={()=>handleLogout()}><Link style={{textDecoration:'none'}} to='/login'>Logout</Link></button>
      <Link to='/cart'><img className='cart' src={cart_image} alt="cart" /></Link>
      <div className="nav-cart-count">
        5+
      </div>
    </div>
      </div>
    </>
    
  )
}

export default Header