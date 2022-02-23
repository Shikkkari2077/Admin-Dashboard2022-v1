import axios from 'axios'
import {React, useState, useEffect} from 'react'


const Dashboard = () => {
  const [toggle, setToggle] = useState(1);
  const [toggle2, setToggle2] = useState(false)
  const [navToggle, setNavToggle] = useState(false);
  const [Data, setData] = useState(false)

  const [minimize, setMinimize] = useState(false)

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/akshita151199/APIs/main/data')
    .then(res=>{
      console.log(res.data);
      setData(res.data.data)
    }).catch(err=>{
      console.log(err);
    })
  }, [])
  
console.log('Data',Data);


  return (
    <div className={minimize?'Dashboard DashboardMini':'Dashboard'}>
       <nav className={navToggle?"sidenav sidenavToggle":"sidenav sidenavMini"}>
          <div>
            <div className="navHead">
                <div className={minimize?"ann annMini":"ann"}> 
                    N
                </div>
                {minimize?null:<h2>Name</h2>}
                
                <span onClick={()=>setMinimize(!minimize)} class="material-icons-outlined">{minimize?'more_vert':'drag_indicator'}</span>
            </div>
            <ul className={minimize?'navLinks navLinksMini':'navLinks'}>
                <li><span class="material-icons-outlined">grid_view</span>{minimize?null:'Home'}</li>
                <li><span class="material-icons-outlined">bug_report</span>{minimize?null:'Report'}</li>
                <li><span class="material-icons-outlined">candlestick_chart</span>{minimize?null:'Analysis'}</li>
                <li><span class="material-icons-outlined">insights</span>{minimize?null:'Insights'}</li>
                <li><span class="material-icons-outlined">cyclone</span>{minimize?null:'Cyclone'}</li>
                <li><span class="material-icons-outlined">stacked_bar_chart</span>{minimize?null:'Chart'}</li>
                <li><span class="material-icons-outlined">category</span>{minimize?null:'Category'}</li>
                <li><span class="material-icons-outlined">share</span>{minimize?null:'Share'}</li>
                <li><span class="material-icons-outlined">inventory</span>{minimize?null:'Documentation'}</li>
                <li><span class="material-icons-outlined">logout</span>{minimize?null:'Log Out'}</li>
            </ul>
          </div>


           <div className='navBottom'>
            <div className="buyBtn" style={{flexDirection:minimize?'column':'row'}}>
                <button><div className="ann2">N</div>$0.90</button>
                <button>Buy $XYZ</button>
            </div>
            <div className="theme" >
                <span class="material-icons-outlined">language</span>
                <div className='themeToggler' onClick={()=>setToggle2(!toggle2)}>
                    <span class="material-icons-outlined">dark_mode</span>
                        <span className={toggle2?'T_BTN T_BTN2':'T_BTN'}></span>
                    <span class="material-icons-outlined">light_mode</span>
                </div>
            </div>
           </div>
    </nav>
       <div className="DataContainer">
           <div className="DataTitle">
               
               <div className="div">
                <div className='left'>
                  <span>Section</span>
                </div>
                <div className='right'>
                      <span class="material-icons-outlined">account_balance_wallet</span>
                      <span>0.2$XYZ</span>
                      <button>Tier 1</button>
                </div>
               </div>
               {navToggle?<span onClick={()=>setNavToggle(!navToggle)} class="material-icons-outlined">close</span>
               :<span onClick={()=>setNavToggle(!navToggle)} class="material-icons-outlined">menu</span>}
           </div>
           <div className="banner">
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, option!</p>
             <button>Tutorial</button>
             <img src="/image.png" alt="" />
             <span class="material-icons-outlined">close</span>
           </div>
           <div className="reward">
             <p>Your Rewards</p>
             <div className='linkBTN'>
                <p>$0.26231428</p>
                <button> <span class="material-icons-outlined">open_in_new</span>Custom Link</button>
             </div>
             <div className="values">
               <span>$40 AVAX</span>
               <span>$10 BNB</span>
               <span>$210 BTC</span>
             </div>
           </div>
           <div className="feeCards">
             <div className="card">
                <p className='cardHead'><span class="material-icons-outlined">numbers</span>12.5% of fee</p>
                <p className='referral'>Your Referral Link for xyz</p>
                <div><p>https://unityexchange.design </p><span class="material-icons-outlined">content_copy</span></div>
             </div>
             <div className="card">
                <p className='cardHead'><span class="material-icons-outlined">numbers</span>12.5% of fee</p>
                <p className='referral'>Your Referral Link for xyz</p>
                <div><p>https://unityexchange.design </p><span class="material-icons-outlined">content_copy</span></div>
             </div>
           </div>
           <div className="DataTable">
             <div className='tabs'>
              <span onClick={()=>setToggle(1)} className={toggle==1?'tab tabActive':'tab'}>Primary</span>
              <span onClick={()=>setToggle(2)} className={toggle==2?'tab tabActive':'tab'}>Secondary</span>
             </div>
             <div className="Table">
              <table>
                <thead>
                  <tr>
                    <td>ASSET</td>
                    <td>AMOUNT</td>
                    <td>USER ACCOUNT</td>
                    <td>REFERRAL EARNING</td>
                  </tr>
                </thead>
                <tbody>
                    {Data?Data.map(data=>(
                      <tr>
                        <td>
                          <div className="firstColumn">
                            <img src={data.img} alt="" />
                            <div>
                              <span>{data.asset}</span>
                              <p className='direct'>{data.type}<p><img src={data.chain.img} alt="" /> {data.chain.name}</p></p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="secondColumn">
                            <span>{data.amount} BNB</span>
                            <p>{data.state}</p>
                          </div>
                        </td>
                        <td>
                         <div className="thirdColumn">
                          <span>{data.user.length<=12?data.user:data.user.slice(0,5)+"..."+data.user.slice(-5)}</span>
                         </div>
                        </td>
                        <td>
                          <div className="fourthColumn">
                            <span>{data.referral_earnings} BNB</span>
                            <p>View on BSC Scan <span class="material-icons-outlined">open_in_new</span></p>
                          </div>
                        </td>
                      </tr>
                    )):null}
                </tbody>
              </table>
             </div>
           </div>
       </div>
       <div className="SideContainer">
          <div className="sideHead">
              <div className="avalanch">
                  <span class="material-icons-outlined">local_fire_department</span>
                    Avalanche
                  <span class="material-icons-outlined">keyboard_arrow_down</span>
              </div>
              <div className="walletS">
                  <span class="material-icons-outlined">account_balance_wallet</span>
                    0XF6...1353
                  <span class="material-icons-outlined">keyboard_arrow_down</span>
              </div>
          </div>
          <div className="customLink">
            <span class="material-icons-outlined">west</span>
            <span>Custom Link</span>
          </div>
          <div className="Link">
            <span>
              https://testnet.xyz.xyz/trade?ref=
            </span>
          </div>
          <div className="input">
            <input type="text" placeholder='ENTER'/>
          </div>
          <div className='linkBTN2'>
            <button> <span class="material-icons-outlined">open_in_new</span>Custom Link</button>
            <button> <span class="material-icons-outlined">cancel_schedule_send</span>Cancel</button>
          </div>
       </div>
    </div>
  )
}

export default Dashboard