import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom'
import { UserContext, UserProvider } from './UserProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Context API</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App


function Layout() {
  return (
    <div>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function Home() {

  const {user} = useContext(UserContext)

  return (
    <div>
      <h2>{user?.username }</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function Login({}) {

  const {user, setUser} = useContext(UserContext)

  const userLogged = {
    username: 'Tomás',
    email: 'tomas@gmail.com',
    pass: 3223
  }

  const loginUser = () => {
    setUser(userLogged)
  }

  return (
    <div>
      <h2>{user?.username}</h2>
      <p>{user?.email}</p>
      <button onClick={loginUser} >Login</button>
    </div>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
