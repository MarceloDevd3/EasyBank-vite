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
           <h2 id="Easybank-title">Why choose Easybank?</h2>
           <p id="Easybank-sub-info">We leverage Open Banking to turn your bank account into your financial hub. Control 
           your finances like never before.</p>
           <div id="level1-grid">
           {MINICARD}
           </div>
         </section>
         <section id="EasybankLevel2">
           <h3 id="EasybankLevel2-title">Latest Articles</h3>
           <div id="level2-grid">
           {NORMALCARD}
           </div>
         </section>
      </main>
      <Rodape/>
    </>
  )
}

export default App
