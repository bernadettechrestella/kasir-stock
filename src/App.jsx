import { Link } from "react-router-dom"
import {CgProfile} from 'react-icons/cg'
import {GiReceiveMoney} from 'react-icons/gi'
import {TbFileInvoice} from 'react-icons/tb'
import {BsFillInboxesFill} from 'react-icons/bs'

function App() {
  return (
    <div className='flex justify-center bg-cyan-100 min-h-screen items-center'>
      <div className="w-full max-w-xs flex flex-col">
        <div className="flex text-cyan-800 gap-10">
          <div className="text-center">
            <Link to="/kasir">
              <GiReceiveMoney size={40} className='m-1'/>
              <h1>Kasir</h1>
            </Link>
          </div>
          <div className="text-center">
            <Link to="/">
              <TbFileInvoice size={40} className='m-1'/>
              <h1>Nota</h1>
            </Link>
          </div>
          <div className="text-center">
            <Link to="/stock">
              <BsFillInboxesFill size={40} className='m-1'/>
              <h1>Stock</h1>
            </Link>
          </div>
          <div className="text-center">
            <Link to="/">
              <CgProfile size={40} className='m-1'/>
              <h1>User</h1>
            </Link>
          </div>
        </div>
        <div className="bottom-0 absolute mb-2">
          <h1 className="text-cyan-800 font-bold font-mono">Made by Bernadette Chrestella</h1>
        </div>
      </div>
    </div>
  )
}

export default App
