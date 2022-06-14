import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Account from "components/Account/Account";
import Chains from "components/Chains";
import TokenPrice from "components/TokenPrice";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import DEX from "components/DEX";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
// import QuickStart from "components/QuickStart";
import Home from "components/Home";
import Contract from "components/Contract/Contract";
import Text from "antd/lib/typography/Text";
import Ramper from "components/Ramper";
import MenuItems from "./components/MenuItems";
const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          <Logo />
          <MenuItems />
          <div style={styles.headerRight}>
            <Chains />
            <TokenPrice
              address="0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
              chain="eth"
              image="https://cloudflare-ipfs.com/ipfs/QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg/"
              size="40px"
            />
            <NativeBalance />
            <Account />
          </div>
        </Header>

        <div style={styles.content}>
          <Switch>
            {/* <Route exact path="/quickstart">
              <QuickStart isServerInfo={isServerInfo} />
            </Route> */}
            <Route exact path="/home">
              <Home isServerInfo={isServerInfo} />
            </Route>
            <Route path="/wallet">
              <Wallet />
            </Route>
            <Route path="/1inch">
              <Tabs defaultActiveKey="1" style={{ alignItems: "center" }}>
                <Tabs.TabPane tab={<span>Ethereum</span>} key="1">
                  <DEX chain="eth" />
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span>Binance Smart Chain</span>} key="2">
                  <DEX chain="bsc" />
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span>Polygon</span>} key="3">
                  <DEX chain="polygon" />
                </Tabs.TabPane>
              </Tabs>
            </Route>
            <Route path="/erc20balance">
              <ERC20Balance />
            </Route>
            <Route path="/onramp">
              <Ramper />
            </Route>
            <Route path="/erc20transfers">
              <ERC20Transfers />
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/contract">
              <Contract />
            </Route>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/ethereum-boilerplate">
              <Redirect to="/home" />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Authenticate" button</>
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer style={{ textAlign: "center" }}>
        <Text style={{ display: "block" }}>
          ⭐️ Please star this{" "}
          <a
            href="https://github.com/ethereum-boilerplate/ethereum-boilerplate/"
            target="_blank"
            rel="noopener noreferrer"
          >
            boilerplate
          </a>
          , every star makes us very happy!
        </Text>

        <Text style={{ display: "block" }}>
          🙋 You have questions? Ask them on the {""}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://forum.moralis.io/t/ethereum-boilerplate-questions/3951/29"
          >
            Moralis forum
          </a>
        </Text>

        <Text style={{ display: "block" }}>
          📖 Read more about{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://moralis.io?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplat"
          >
            Moralis
          </a>
        </Text>
      </Footer>
    </Layout>
  );
};

export const Logo = () => (
  <div style={{ display: "flex" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="4.62em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 512 111"
    >
      <defs>
        <linearGradient
          id="svgIDa"
          x1="-63.298%"
          x2="55.731%"
          y1="87.26%"
          y2="-28.569%"
        >
          <stop offset="0%" stopColor="#3AC155" />
          <stop offset="100%" stopColor="#0CB3FF" />
        </linearGradient>
        <linearGradient id="svgIDb" x1="0%" x2="100%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#3AC155" />
          <stop offset="100%" stopColor="#0CB3FF" />
        </linearGradient>
      </defs>
      <path
        fill="url(#svgIDa)"
        d="M164.138 27.662c-16.124 3.858-29.382 4.05-40.856 2.402c-7.34 8.97-11.83 17.982-15.57 26.844c15.61-4.372 30.963-10.166 43.64-17.74c-13.689 10.096-29.516 17.168-45.465 22.208c-5.832 14.656-10.353 29.074-23.206 40.233l-1.503 1.303c18.72-6.52 51.372-24.303 82.96-75.25Z"
      />
      <path
        fill="url(#svgIDb)"
        d="M20.39 22.402c-33.34 24.313-18.157 63.559-7.707 54.386c17.08-14.775 42.732-50.793 91.867-63.711C59.948 25.21 28.487 67.794 20.226 78.502c-8.26 10.708 1.307 28.288 20.887 31.026c19.58 2.738 30.572-4.556 38.506-11.444l.003.001c25.68-22.296 15.637-60.355 65.2-93.233C62.842-11.362 26.59 17.882 20.39 22.402Z"
      />
      <path
        fill="#444"
        d="M211.792 108.67c-2.222 0-4.153-.822-5.796-2.463c-1.641-1.643-2.462-3.575-2.462-5.797V11.157c0-2.222.82-4.154 2.462-5.796c1.642-1.642 3.574-2.463 5.796-2.463h3.622c2.512 0 4.83.677 6.955 2.029c2.125 1.352 3.67 3.139 4.637 5.36l25.356 54.77c0 .096.048.144.145.144c.096 0 .145-.048.145-.145l25.356-54.769c.966-2.221 2.511-4.008 4.637-5.36a12.7 12.7 0 0 1 6.954-2.03h4.202c2.222 0 4.154.822 5.796 2.463c1.642 1.643 2.462 3.575 2.462 5.797v89.253c0 2.222-.82 4.154-2.462 5.796c-1.642 1.642-3.574 2.463-5.796 2.463h-3.188c-2.221 0-4.153-.82-5.795-2.462c-1.642-1.643-2.463-3.575-2.463-5.797V37.383c0-.097-.049-.146-.146-.146c-.096 0-.144.049-.144.145L264.678 74.62c-1.063 2.222-2.705 4.058-4.927 5.506c-2.125 1.353-4.395 2.03-6.81 2.03h-.87c-2.414 0-4.732-.677-6.953-2.03c-2.126-1.448-3.72-3.284-4.782-5.506l-17.387-37.237c0-.096-.049-.145-.145-.145c-.097 0-.145.049-.145.145v63.028c0 2.222-.821 4.154-2.463 5.796c-1.642 1.642-3.574 2.463-5.796 2.463h-2.608Zm124.302 0c-2.222 0-4.154-.822-5.796-2.463c-1.642-1.643-2.463-3.575-2.463-5.797V41.584c0-2.222.821-4.153 2.463-5.796c1.642-1.641 3.574-2.462 5.796-2.462h3.767c2.222 0 4.154.82 5.796 2.462c1.642 1.642 2.463 3.574 2.463 5.796v58.826c0 2.222-.821 4.154-2.463 5.796c-1.642 1.642-3.574 2.463-5.796 2.463h-3.767Zm0-91.283c-2.222 0-4.154-.82-5.796-2.463c-1.642-1.642-2.463-3.574-2.463-5.796v-.87c0-2.22.821-4.152 2.463-5.795C331.94.821 333.872 0 336.094 0h3.767c2.222 0 4.154.82 5.796 2.463c1.642 1.642 2.463 3.574 2.463 5.796v.87c0 2.221-.821 4.153-2.463 5.795c-1.642 1.642-3.574 2.463-5.796 2.463h-3.767Zm44.61 91.282c-2.221 0-4.153-.82-5.795-2.462c-1.642-1.643-2.463-3.575-2.463-5.797V41.584c0-2.222.821-4.153 2.463-5.796c1.642-1.641 3.574-2.462 5.796-2.462h1.884c2.318 0 4.25.82 5.795 2.462c1.642 1.546 2.511 3.478 2.608 5.796v1.014c0 .097.048.145.145.145c.097 0 .193-.048.29-.145c6.568-7.148 14.247-10.722 23.038-10.722c8.79 0 15.165 2.512 19.126 7.535c4.056 4.926 6.085 13.185 6.085 24.777v36.222c0 2.222-.821 4.154-2.463 5.796c-1.642 1.642-3.574 2.463-5.796 2.463h-2.463c-2.222 0-4.154-.82-5.796-2.462c-1.545-1.643-2.318-3.575-2.318-5.797V65.636c0-7.244-.966-12.17-2.898-14.779c-1.836-2.704-5.168-4.057-9.998-4.057c-3.96 0-7.63 1.69-11.011 5.072c-3.381 3.38-5.072 7.003-5.072 10.867v37.671c0 2.222-.82 4.154-2.463 5.796c-1.642 1.642-3.574 2.463-5.796 2.463h-2.897Zm78.84-58.391c-1.931 0-3.574-.676-4.926-2.029c-1.353-1.449-2.029-3.14-2.029-5.071c0-1.932.676-3.574 2.029-4.926c1.352-1.353 2.995-2.03 4.926-2.03h6.955c.87 0 1.304-.434 1.304-1.303V16.953c0-2.222.773-4.154 2.318-5.796c1.642-1.642 3.574-2.463 5.796-2.463h2.898c2.222 0 4.153.82 5.796 2.463c1.641 1.641 2.462 3.573 2.462 5.795V34.92c0 .87.435 1.304 1.305 1.304h16.518c1.932 0 3.574.676 4.926 2.029c1.449 1.352 2.173 2.994 2.173 4.926s-.724 3.622-2.173 5.072c-1.353 1.352-2.995 2.028-4.926 2.028h-16.518c-.87 0-1.304.386-1.304 1.159v29.268c0 6.279.676 10.335 2.029 12.17c1.352 1.836 4.153 2.754 8.403 2.754c2.318 0 4.057-.097 5.216-.29c1.932-.193 3.622.242 5.072 1.304c1.448 1.063 2.173 2.511 2.173 4.347c0 2.125-.725 4.057-2.173 5.796c-1.353 1.642-3.043 2.56-5.072 2.753c-4.25.386-7.437.58-9.563.58c-9.37 0-15.938-1.981-19.705-5.941c-3.767-4.057-5.65-11.254-5.65-21.59V51.438c0-.773-.435-1.159-1.305-1.159h-6.955Z"
      />
    </svg>
  </div>
);

export default App;
