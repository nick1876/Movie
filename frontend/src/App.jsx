import React,{Fragment} from 'react'
import MainNavigation from './Components/mainNavigation/MainNavigation'
import { Routes,Route } from 'react-router-dom'
import AllQuotes from './Components/pages/AllQuotes'
import NewQuotes from './Components/pages/NewQuotes'
import ShowQuotes from './Components/pages/ShowQuotes'
import EditQuotes from './Components/pages/EditQuotes'
import DeleteQuotes from './Components/pages/DeleteQuotes'
import Login from './Components/auth/Login'
import SignUp from './Components/auth/SignUp'

function App() {
  return (
    <Fragment>
      <MainNavigation/>
      <main>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<SignUp/>}></Route>
          <Route path='/' element={<AllQuotes/>}></Route>
          <Route path='/new' element={<NewQuotes/>}></Route>
          <Route path='/movies/:id' element={<ShowQuotes/>}></Route>
          <Route path='/movies/:id/edit' element={<EditQuotes/>}></Route>
          <Route path='/delete/:id' element={<DeleteQuotes/>}></Route>
        </Routes>
      </main>
    </Fragment>
  )
}

export default App