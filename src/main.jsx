import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Contacts from './PagesAndComponents/Pages/Contacts/Contacts.jsx'
import Portfolio from './PagesAndComponents/Pages/Portfolio/Portfolio.jsx'
import About from './PagesAndComponents/Pages/About/About.jsx'
import KonchaZaspa from './PagesAndComponents/Pages/KonchaZaspa/KonchaZaspa.jsx'
import Tarasivka from './PagesAndComponents/Pages/Tarasivka/Tarasivka.jsx'
import Gatne from './PagesAndComponents/Pages/Gatne/Gatne.jsx'
import Gatne2 from './PagesAndComponents/Pages/Gatne2/Gatne2.jsx'
import Hotyanivka from './PagesAndComponents/Pages/Hotyanivka/Hotyanivka.jsx'
import Services from './PagesAndComponents/Pages/Services/Services.jsx'
import Prices from './PagesAndComponents/Pages/Prices/Prices.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route exact index={true} path='/' element={<App/>} />
    <Route exact path='/contacts' element={<Contacts/>} />
    <Route exact path='/portfolio' element={<Portfolio/>} />
    <Route exact path='/about' element={<About/>} />
    <Route exact path='/projects/kozin' element={<KonchaZaspa/>} />
    <Route exact path='/projects/tarasivka' element={<Tarasivka/>} />
    <Route exact path='/projects/gatne' element={<Gatne/>} />
    <Route exact path='/projects/gatne2' element={<Gatne2/>} />
    <Route exact path='/projects/hotyanivka' element={<Hotyanivka/>} />
    <Route exact path='/services' element={<Services/>} />
    <Route exact path='/prices' element={<Prices/>} />
  </Route>
))


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
