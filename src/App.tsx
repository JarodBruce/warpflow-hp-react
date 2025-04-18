import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <Navigation />
      <div className="m-10">
        <div className="text-Black text-[min(6vw,60px)]">
          世界最速のWebサービスを提供する!
        </div>
        <div className="text-gray-400 text-[min(3vw,50px)]">
          Providing the world's fastest web services!
        </div>
        <div className="text-Black text-[min(2.5vw,45px)]">
          私たちは、スピードを最優先にしたプロダクト開発を行う技術集団です。
          <br />
          「遅い」はすべての課題を悪化させる。だからこそ、最速を追求します。
        </div>
        <div className="text-gray-400 text-[min(2vw,35px)]">
          We are a team of engineers dedicated to building products with speed
          as our top priority.
          <br />
          "Slow" makes every problem worse — that’s why we pursue the fastest
          possible performance.
        </div>
      </div>
      <Cardgrid />
      <Footer />
    </>
  );
}

function Navigation() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="background-color flex justify-between items-center h-20">
      <a
        href="https://warpflow.net"
        className="text-[min(6vw,60px)] font-bold m-5 text-left w-auto order-first"
        style={{
          fontFamily: '"Jaro", sans-serif',
          fontOpticalSizing: "auto",
          fontWeight: "400",
          fontStyle: "normal",
        }}
      >
        WarpFlow.net
      </a>
      <div className="flex items-center justify-end w-full order-last">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="top-0 right-o w-[min(6vw,60px)] m-4 h-auto"
        >
          <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
        </svg>
        <button
          onClick={handleMenuOpen}
          type="button"
          className="z-10 space-y-2 top-0 right-0 h-auto w-auto m-7"
        >
          <div
            className={
              openMenu
                ? "w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
                : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
            }
          />
          <div
            className={
              openMenu
                ? "opacity-0 transition duration-500 ease-in-out"
                : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
            }
          />
          <div
            className={
              openMenu
                ? "w-8 h-0.5 bg-gray-600 -rotate-45 transition duration-500 ease-in-out"
                : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
            }
          />
        </button>
        <nav
          className={
            openMenu
              ? "text-left fixed right-0 top-0 w-full h-screen flex flex-col justify-start pt-8 px-3 transition-transform duration-300 transform translate-x-0 bg-opacity-50 backdrop-blur-sm"
              : "text-left fixed right-0 top-0 w-full h-screen flex flex-col justify-start pt-8 px-3 transition-transform duration-300 transform translate-x-full bg-opacity-50 backdrop-blur-sm"
          }
        >
          <NavigationMenuItem />
        </nav>
      </div>
    </div>
  );
}

function NavigationMenuItem() {
  return (
    <div className="mt-10 m-5">
      <li className="text-2xl font-bold text-gray-800">
        <a href="#">aaaa</a>
      </li>
    </div>
  );
}

function Cardgrid() {
  return (
    <div className="m-10">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:outline-2 outline-blue-500/50 transition duration-300">
          <h2 className="text-xl font-bold">sURL</h2>
          <p className="text-gray-600">This is the content of card 1.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:outline-2 outline-blue-500/50 transition duration-300">
          <h2 className="text-xl font-bold">Card 2</h2>
          <p className="text-gray-600">This is the content of card 2.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:outline-2 outline-blue-500/50 transition duration-300">
          <h2 className="text-xl font-bold">Card 3</h2>
          <p className="text-gray-600">This is the content of card 3.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:outline-2 outline-blue-500/50 transition duration-300">
          <h2 className="text-xl font-bold">Card 4</h2>
          <p className="text-gray-600">This is the content of card 4.</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <div className="flex items-center h-20 w-full justify-between">
        <div className="m-10 text-2xl text-gray-600 order-first">
          WarpFlow.net
        </div>
        <div className="m-10 text-6xl text-Black bg-gray-200 order-last">
          人員募集中！
        </div>
      </div>
      <div className="text-center p-4 bg-gray-200 w-100vw">
        <p className="text-gray-600 ">© 2025 Your Company</p>
      </div>
    </div>
  );
}
