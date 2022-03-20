import { ethers } from "ethers";
import { useState } from "react";
import Web3Modal from "web3modal";
import Form from "./From";
import Swal from "sweetalert2";
import "./Connect.css";
const providerOptions = {
  // default connect to Metamask
};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: false, // optional
  providerOptions, // required
});
const ConnectTo = () => {
  //set connection handler
  const [account, setAccount] = useState({ connected: false });
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
  if (!account.connected) {
    return (
      <div>
        <button onClick={ConnectWallet} className="btn-wallet">
          Connect Wallet
        </button>
        <Form {...account} />
      </div>
    );
  } else if (account.connected && chainId == 3) {
    return (
      <div className="contain-connect">
        <div className="address">
          <i class="fas fa-wallet"></i>
          <p1 className="address-account">
            {account.address.slice(0, 4) + "..." + account.address.slice(-4)}
          </p1>
        </div>
        <div className="chain">
          <i class="fas fa-check-square"></i>
          <p1 className="chain">BSC Mainnet</p1>
        </div>

        <Form {...account} />
      </div>
    );
  } else {
    return (
      <div className="wrong-chain">
        <i class="fas fa-exclamation-triangle">
          <h1>Worng Network</h1>
        </i>
        <p1>Please change your Network to Binance Smart Chain</p1>
      </div>
    );
  }
};

function Connect() {
  return (
    <div className="contain">
      <ConnectTo />
    </div>
  );
}
export default Connect;
