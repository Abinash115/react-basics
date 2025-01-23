import React from 'react'
import FirstComponent from './components/react-component/FirstComponent'
import Greet from './components/multiple-component/Greet'
import WelcomeMessage from './components/react-jsx/WelcomeMessage'
import Add from './components/multiple-component/Add'
import Header from './components/multiple-component/Header'
import MainContent from './components/multiple-component/MainContent'
import Footer from './components/multiple-component/Footer'
import ListRendering from './components/list-data/ListRendering'
import UserList from './components/list-data/UserList'
import ProductList from './components/list-data/ProductList'

const App = () => {
  return (
    <div>
      {/* My First React App
      <FirstComponent/>
      <Greet/> */}
      {/* <WelcomeMessage/> */}
      {/* <Greet/>
      <Add/> */}
      {/* <Header/>
      <MainContent/>
      <Footer/> */}
      {/* <ListRendering items={["Wireless Earbuds", "Power Bank", "New SSD", "Hoddie"]}/> */}
      <UserList/>
      <ProductList/>
    </div>
  )
}

export default App
