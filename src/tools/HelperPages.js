// The following are 3 methods that will return 
import Home from "../pages/Home"
import About from "../pages/About" // May not need this, gotta double take design


// The following methods make adding more pages to our app the most stupid proof as possible.
// In order to add a page to this site we can just follow the pattern below
import { useNavigate } from 'react-router-dom';



const publicPages =   [
    {
      compo: <Home/>,
      path: "/",
      name: "home"
    },
    {
      compo: <About/>,
      path: "about",
      name: "about"
    },
   
  ]

const authPages = []

const getPublicPages = () => {
    return publicPages;
}

const getAuthPages = () => {
    return authPages;
}


const getAllPages = () => {
    return (getPublicPages()).concat(getAuthPages())
}




export default {getAuthPages, getPublicPages, getAllPages}