import Landing from "./pages/Landing"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Myfile from "./pages/Myfile"
import Upload from "./pages/Upload"
import Transaction from "./pages/Transaction"
import Subscription from "./pages/Subscription"
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react"

const App = () => {
  return <>

    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/dashboard' element={
          <>
            <SignedOut><RedirectToSignIn /></SignedOut>
          </>
        } />
        <Route path='/myfiles' element={<>
          <SignedOut><RedirectToSignIn /></SignedOut>
          <SignedIn><Myfile /></SignedIn></>} />

        <Route path='/upload' element={
          <>
            <SignedOut><RedirectToSignIn /></SignedOut>
            <SignedIn><Upload /></SignedIn>
          </>
        } />
        <Route path='/Transactions' element={<>
          <SignedOut><RedirectToSignIn /></SignedOut>
          <SignedIn><Transaction /></SignedIn>
        </>
        } />
        <Route path='/subscribtion' element={<>
          <SignedOut><RedirectToSignIn /></SignedOut>
          <SignedIn><Subscription /></SignedIn></>} />

        <Route path ="/*" element ={<RedirectToSignIn/>}/>

      </Routes>

    </BrowserRouter>

  </>
}

export default App
