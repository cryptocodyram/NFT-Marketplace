import './App.css';
import react , { useEffect, useState } from 'react'
import { Header } from './components/Header';
import { TokenPage } from './components/TokenPage';
import { Switch, Route ,BrowserRouter} from 'react-router-dom';
import { Collection } from './components/Collection';
import Marketplace from './abis/Wnft.json';
import Web3 from 'web3';

function App() {

  const [ account, setAccount ] = useState();
  const [ marketplace, setMarketplace ] = useState();

  useEffect(()=>{
    loadWeb3()
    loadBlockchainData()
  })


  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  const loadBlockchainData = async () => {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    setAccount(accounts[0])
    const networkId = await web3.eth.net.getId()
    const networkData = Marketplace.networks[networkId]
    if(networkData) {
      const marketplace = new web3.eth.Contract(Marketplace.abi, networkData.address)
      setMarketplace(marketplace)
    } else {
      window.alert('Marketplace contract not deployed to detected network.')
    }
  }

  return (
    <div className="App">
    <Header/>
      <BrowserRouter>
      <Switch>
       <Route path="/asset" component={TokenPage}  />
       <Route path="/collection" component={Collection}  />
       </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
