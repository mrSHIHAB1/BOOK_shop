import { createBrowserRouter} from "react-router-dom";
import Mainlayout from "../Components/Mainlayout";
import Errorpage from "../Components/Errorpage";
import Home from "../Components/Home";
import Bookview from "../Components/Bookview";
import Listed from "../Components/Listed";
import Pagetoread from "../Components/Pagetoread";
import Contact from "../Components/Contact";
import Premium from "../Components/Premium";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
            path:'/',
            element:<Home></Home>
            },
            {
                path: '/Listed',
                element: <Listed></Listed>,
            },
            {
                path: '/PtRead',
                element: <Pagetoread></Pagetoread>,
                }, 
            {
            path:'/Bookview/:id',
            element:<Bookview></Bookview>,
            },
            {
             path:'/contact',
             element:<Contact></Contact>
            },
            {
                path:'/Prem',
                element:<Premium></Premium>
               },
            
        ]},
    
  ])