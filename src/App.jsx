import React from 'react'
import './App.css'
/*data*/
import data01 from './components/data01';
import data02 from './components/data02';
/*components*/
import Nav from './components/Nav';
import Header from './components/Header';
import EasyBankMiniCard from './components/EasyBankMini-card';
import EasyCard from './components/EasyBankcard';
import Rodape from './components/Rodape'
function App() {

  const MINICARD = data01.map(item => {
    return (
      <EasyBankMiniCard  image={item.image} title={item.title} info={item.info}/>
    )
  })

  const NORMALCARD = data02.map(item => {
    return (
      <EasyCard image={item.image} alt={item.alt} title={item.title} sub={item.sub} info={item.info} />
    )
  })

  return (
    <>
      <Nav/>
      <Header/>
      <main>
         <section id="EasybankLevel1">
           {MINICARD}
         </section>
         <section id="EasybankLevel2">
           {NORMALCARD}
         </section>
      </main>
      <Rodape/>
    </>
  )
}

export default App
