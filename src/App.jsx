import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import ReferEarn from './components/banners/ReferEarn/ReferEarn.jsx';
import SwapCenter from './components/banners/SwapCenter/SwapCenter.jsx';
import BonusVEs from './components/banners/BonusVEs/BonusVEs.jsx';
import CaptchaTasks from './components/banners/CaptchaTasks/CaptchaTasks.jsx';
import ExchangeCenter from './components/banners/ExchangeCenter/ExchangeCenter.jsx';


function App() {
  return (
    <main className="app-main">
      <Navbar />
      <ReferEarn />
      <SwapCenter />
      <BonusVEs />
      <CaptchaTasks />
      <ExchangeCenter />
    </main>
  );
}

export default App;