import { Link } from "react-router-dom"
import {CgProfile} from 'react-icons/cg'
import {GiReceiveMoney} from 'react-icons/gi'
import {TbFileInvoice} from 'react-icons/tb'
import {BsFillInboxesFill} from 'react-icons/bs'

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('/public/images/bg.jpg')] bg-cover">
      <div className="w-full max-w-md bg-white bg-opacity-70 rounded-full">
        <div className="text-cyan-900 font-bold flex justify-around">
          <div className="text-center">
            <p>Use any Account from</p>
            <a href="https://dummyjson.com/docs/users" className="text-blue-700">https://dummyjson.com/docs/users</a>
            <p>for Login</p>
          </div>
          <div className="text-center animate-bounce">
          <Link to="/kasir">
              <GiReceiveMoney size={40} className='m-1'/>
              <h1>Kasir</h1>
            </Link>
          </div>
        </div>
        <div className="flex-grow">
          <div className="bottom-0 absolute mb-2 w-full max-w-md bg-white bg-opacity-70 rounded-full">
            <h1 className="text-cyan-900 font-bold font-mono text-center">Made by Bernadette Chrestella</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
