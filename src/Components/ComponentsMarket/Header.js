import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import "./Connect.css";
import "./Header.css";
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  //Scroll to top
  const scrollHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  //alert for box
  const alertBox = () => {
    Swal.fire({
      icon: "info",
      title: "Comming Soon",
    });
  };

  //set provider
  const providerOptions = {
    // default connect to Metamask
  };
  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: false, // optional
    providerOptions, // required
  });
  //set connection handler
  const [account, setAccount] = useState({ connected: false });
  //Connect to wallet
  const [chainId, setChainId] = useState(null);

  const ConnectWallet = async () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      try {
        const Web3Modal = await web3Modal.connect();

        //set chain handler
        const chainIdHandler = async () => {
          try {
            const provider = new ethers.providers.Web3Provider(Web3Modal);
            const { chainId } = await provider.getNetwork();
            setChainId(chainId);
          } catch (error) {
            console.error(error);
            setChainId(null);
            Swal.fire("Provider Not Found!", "", "error");
          }
        };
        //setAccountHandler
        const setAccountFromProvider = async () => {
          const provider = new ethers.providers.Web3Provider(Web3Modal);
          const signer = provider.getSigner();
          try {
            const address = await signer.getAddress();
            const balance = await signer.getBalance();
            setAccount({
              connected: true,
              address,
              signer,
              balance: ethers.utils.formatEther(balance).slice(0, 7),
            });
          } catch (error) {
            console.error(error);
            setAccount({ connected: false });
            Swal.fire("Provider Not Found!", "", "error");
          }
        };
        chainIdHandler();
        setAccountFromProvider();
        Web3Modal.on("accountsChanged", () => {
          setAccountFromProvider();
        });
        Web3Modal.on("chainChanged", () => {
          chainIdHandler();
        });
      } catch (error) {
        console.log(error);
        Swal.fire("Provider Not Found!", "", "error");
      }
    } else {
      Swal.fire(
        "Please install MetaMask!<a target=_blank href=https://metamask.io/download/> Here</a>",
        "",
        "error"
      );
    }
  };
  const ConnectInfo = () => {
    if (!account.connected) {
      return <div></div>;
    } else if (account.connected && chainId === 3) {
      return (
        <>
          <div className="address">
            <p1 className="address-account">
              {account.address.slice(0, 4) + "..." + account.address.slice(-4)}
            </p1>
            <i class="fas fa-wallet"></i>
          </div>
          <div className="balance">
            <p1>{"Balance: " + account.balance + " BNB"}</p1>
          </div>
        </>
      );
    } else {
      return (
        <div className="wrong-text">
          <p1 className="text-network">wrong network</p1>
          <p1 className="text-change">
            Please change your network to Binance Smart Chain
          </p1>
        </div>
      );
    }
  };

  return (
    <>
      <nav className="back-navbar">
        <div className="navbar">
          <div className="content">
            <p1 className="navbar-name">Lando Game</p1>
            <div className="main-logo"></div>
            <div className="menu-mobile" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <div calssName="text-content">
              <ul className={click ? "navbar-items active" : "navbar-items"}>
                <Link
                  to="/"
                  className="link-navbar"
                  onClick={() => {
                    scrollHome();
                    closeMobileMenu();
                  }}
                >
                  <li>
                    <p1 className="link-text">Home</p1>
                  </li>
                </Link>

                <li
                  className="link-navbar"
                  onClick={() => {
                    closeMobileMenu();
                    alertBox();
                  }}
                >
                  <p1 className="link-text">Lando Box</p1>
                </li>

                <li
                  className="link-navbar"
                  onClick={() => {
                    closeMobileMenu();
                    ConnectWallet();
                  }}
                >
                  <p1 className="link-text">Connect Wallet</p1>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {ConnectInfo()}
    </>
  );
};

export default Header;
