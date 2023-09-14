import Image from "next/image";
import { faTelegram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <div
        id="socialbar"
        class="flex justify-between bg-[#073169] py-1 px-4 items-center"
      >
        <p className="text-white font-semibold">Mission Mars</p>
        <div className="flex justify-between">
          <a
            className="m-2"
            href="https://twitter.com/MissionMars32?t=uE0BZIKc1QO3oKPKdGfXRw&s=09"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              size="lg"
              className="text-white hover:text-cyan-400"
              style={{  width: "24px", height: "24px" }}
            />
          </a>
          <a className="m-2" href="https://t.me/mmasrs">
            <FontAwesomeIcon
              icon={faTelegram}
              size="lg"
              className="text-white hover:text-cyan-400"
              style={{ width: "24px", height: "24px" }}
            />
          </a>
        </div>
      </div>

      {/* <div
        id="mainbar"
        class="flex justify-between py-1 px-4 items-center"
      >
        <div>
          <img className="w-32 h-32 rounded-full" src="/main.jpeg" />
        </div>
        <div className="flex justify-center p-4">
          
          <a className="px-2 md:text-2xl hover:text-[#073169]" href="#team">
            Team
          </a>
        </div>
      </div> */}

      <div id="intro" className="flex justify-between bg-gray-100 p-4 flex-wrap">
        <div className="md:w-1/2">
          <img className="md:w-96 md:h-96 md:ml-28 rounded-xl" src="/main.jpeg" />
        </div>
        <div className="md:w-1/2 px-4 py-2">
          <h2 className=" text-5xl font-bold mt-4 md:mt-0 text-[#073169]">Mission Mars</h2>
          <p className="p-4 md:pt-8 text-xl">
          Welcome to the world of <span className="font-bold">"Mission Mars,"</span> a cutting-edge crypto token that merges the realms of cryptocurrency and space exploration. By bridging technology and the cosmos, Mission Mars strives to redefine possibilities and inspire a new era of innovation. Join us on this extraordinary venture to reach for the stars in both the digital and physical domains.
          </p>
          <div className="flex justify-center my-3">
            {/* <a href="#about" className="px-4 py-2 cursor-pointer bg-[#073169] text-white hover:bg-[#D1668A] rounded-lg">
              About Us
            </a> */}
          </div>
        </div>
      </div>


      <section
        id="about-section"
        className={`flex bg-gray-100 flex-col md:flex-row items-center justify-center p-8`}
      >
        <img
          src="tweet.png"
          alt="About Us"
          className={`h-auto md:h-auto rounded-lg w-full md:w-2/5 md:mr-8 object-cover `}
        />
        <div className="mt-4 md:mt-0">
          {/* <h2 className="text-4xl md:font-bold font-semibold mb-2 fire text-red-500">About Us</h2>
          <p className="font-semibold mb-2">
            <span className={`fire text-red-500`}>Burn Doge</span>: Where controlled scarcity meets community-driven growth.
            Together, we're rewriting the rules of crypto and redefining what it
            means to be a holder. Join us and become a part of something
            revolutionary.
          </p> */}
          <p className="mb-2">
            <p className={`font-bold text-xl md:text-2xl fire text-[#073169]`}>About Us</p>
            At Mission Mars, we're not just another crypto token – we're a revolutionary venture that's boldly pushing the boundaries of technology and exploration. Our mission is to create a synergy between the realms of cryptocurrency and space exploration, forging a path towards new innovations that will redefine what's possible. By seamlessly bridging the digital and physical domains, we're inspiring a new era of imagination and progress that reaches for the stars.
          </p>
          <p className="font-bold text-xl md:text-2xl fire text-[#073169]">Uniting Cryptocurrency and Space: Redefining Possibilities</p>
          <p className="mb-2">
          Imagine a world where the potential of cryptocurrency technology intertwines with the vastness of space exploration. At Mission Mars, we're turning this vision into reality. Our groundbreaking initiative brings together experts from both fields to harness the power of blockchain and digital assets, driving funding and support for ambitious space missions. With each transaction, investors not only contribute to the growth of our crypto token but also fuel the dream of exploring new frontiers beyond Earth.
          </p>
          <p className="font-bold text-xl md:text-2xl fire text-[#073169]"> Inspiring Innovation and Discovery</p>
          <p className="md:mb-0 mb-6">
          Our journey is one of inspiration, aspiration, and innovation. We envision a future where the boundaries between technology and exploration blur, leading to groundbreaking discoveries and a deeper understanding of the cosmos. Through Mission Mars, we're inviting dreamers, investors, and pioneers to join hands and propel humanity's reach into the universe. Together, we're not only reshaping the way we think about currency and exploration but also creating a legacy that will echo through the ages.
          </p>
        </div>
      </section>

      <div id="boxes" class="md:pt-10 pt-6 bg-gray-100 flex justify-center py-8 flex-wrap">
        <div class="w-full md:w-1/4 my-6 md:my-0 bg-[#073169] shadow-md rounded-lg md:mx-4">
          <div class="relative">
            <img
              src="/main.jpeg"
              alt="Image 2"
              class="absolute top-0 w-12 h-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
            />
          </div>
          <div class="p-4">
            <h2 class="text-xl text-white font-bold mb-2 mt-4">Token Supply</h2>
            <p class="font-semibold text-white">Mission Mars has a supply of 10000000</p>
          </div>
        </div>
        

        <div class="w-full md:w-1/4 bg-[#073169] my-6 md:my-0 shadow-md rounded-lg md:mx-4">
          <div class="relative">
            <img
              src="/main.jpeg"
              alt="Image 2"
              class="absolute top-0 w-12 h-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
            />
          </div>
          <div class="p-4">
            <h2 class="text-xl font-bold mb-2 mt-4 text-white">
               FairLaunch Date
            </h2>
            <p class="font-semibold text-white">
              Mission Mars is going to fairlaunch on August 23, 2023
            </p>
          </div>
        </div>

        <div class="w-full md:w-1/4 bg-[#073169] my-6 md:my-0 shadow-md rounded-lg md:mx-4">
          <div class="relative">
            <img
              src="/main.jpeg"
              alt="Image 2"
              class="absolute top-0 w-12 h-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
            />
          </div>
          <div class="p-4">
            <h2 class="text-xl font-bold mb-2 mt-4 text-white">Token Symbol</h2>
            <p class=" font-semibold text-white">Mission Mars token symbol is $MM</p>
          </div>
        </div>


          
        
        
      </div>

      <div id="boxes" class="md:pt-10 bg-gray-100 flex justify-center flex-wrap">
        <div class="w-full md:w-1/4 my-6 md:my-0 bg-[#073169] shadow-md rounded-lg md:mx-4">
          <div class="relative">
            <img
              src="/main.jpeg"
              alt="Image 2"
              class="absolute top-0 w-12 h-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
            />
          </div>
          <div class="p-4">
            <h2 class="text-xl text-white font-bold mb-2 mt-4">Launch Type</h2>
            <p class="font-semibold text-white">Mission Mars launch type is FairLaunch</p>
          </div>
        </div>
        

        <div class="w-full md:w-1/4 bg-[#073169] my-6 md:my-0 shadow-md rounded-lg md:mx-4">
          <div class="relative">
            <img
              src="/main.jpeg"
              alt="Image 2"
              class="absolute top-0 w-12 h-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
            />
          </div>
          <div class="p-4">
            <h2 class="text-xl font-bold mb-2 mt-4 text-white">
            Softcap
            </h2>
            <p class="font-semibold text-white">
              Mission Mars softcap is 5BNB
            </p>
          </div>
        </div>

        <div class="w-full md:w-1/4 bg-[#073169] my-6 md:my-0 shadow-md rounded-lg md:mx-4">
          <div class="relative">
            <img
              src="/main.jpeg"
              alt="Image 2"
              class="absolute top-0 w-12 h-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
            />
          </div>
          <div class="p-4">
            <h2 class="text-xl font-bold mb-2 mt-4 text-white">Hardcap</h2>
            <p class=" font-semibold text-white">Mission Mars hardcap is 8BNB</p>
          </div>
        </div>


          
        
        
      </div>

      {/* <div id="banner" className="py-10 md:pb-14 flex items-center justify-center">
        <img
          src="/cover.jpeg"
          alt="Pulsating Image"
          className="animated-image"
        />
      </div> */}

      {/* <div id="about" className="p-6 flex justify-center flex-wrap">
        <div className="bg-[#073169] rounded-lg flex justify-center flex-col items-center shadow-md m-2 p-4 md:w-2/5">
          <p className="text-3xl font-bold">About </p>
          <p className="p-1">
            The coin's community, fondly known as "BARDOGE Pals," fosters a
            welcoming and all-encompassing environment where enthusiasts of all
            backgrounds unite to revel in this delightful amalgamation of style
            and digital currency. Embrace the BARDOGE trend and be a part of
            this extraordinary fusion of elegance and online subculture!
          </p>
        </div>
        <div className="bg-[#073169] rounded-lg flex justify-start flex-col items-center p-4 md:w-2/5 shadow-md m-2">
          <p className="text-3xl font-bold">Coin Launch on </p>
          <p className="p-1 italic font-bold">Bardoge is listed on Arbitrum Chain.</p>
          <p>
            Arbitrum is a layer 2 scaling solution for Ethereum, designed to
            improve scalability and reduce transaction fees. It aims to enhance
            the Ethereum ecosystem by enabling faster and more cost-efficient
            smart contract execution
          </p>
        </div>
      </div> */}

      <section class="py-12 px-4 text-center bg-gray-100" id="team">
        <h2 class="text-3xl font-semibold mb-8 text-[#073169]">Meet Our Partners</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class=" rounded-lg shadow-md p-6 bg-[#073169]">
            <a href="https://dx.app">
            <img
              src="dxsale.png"
              alt="Team Member 1"
              class="w-32 h-32 rounded-full mx-auto mb-4"
            />
            </a>
            <h3 class="text-lg font-semibold mb-2">DxSale</h3>
            {/* <p class="text-gray-600">Lead Designer</p> */}
          </div>

          <div class="bg-[#073169] rounded-lg shadow-md p-6 ">
            <img
              src="data:image/png;base64,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"
              alt="Team Member 2"
              class="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 class="text-lg font-semibold mb-2">BNB Chain</h3>
            {/* <p class="text-gray-600">Senior Developer</p> */}
          </div>

          <div class="bg-[#073169] rounded-lg shadow-md p-6">
            <img
              src="https://th.bing.com/th/id/OIP.mleb5_jAlRxR3Yj8Zksc2gHaHa?pid=ImgDet&rs=1"
              alt="Team Member 3"
              class="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 class="text-lg font-semibold mb-2">Chain Link</h3>
            {/* <p class="text-gray-600">Marketing Manager</p> */}
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
          <div class="bg-[#073169] rounded-lg shadow-md p-6">
            <img
              src="https://pbs.twimg.com/profile_images/1653532864309239810/ZjT_zBAS_400x400.png"
              alt="Team Member 1"
              class="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 class="text-lg font-semibold mb-2">ARB</h3>
            {/* <p class="text-gray-600">Lead Designer</p> */}
          </div>

          <div class="bg-[#073169] rounded-lg shadow-md p-6">
            <img
              src="data:image/jpeg;base64,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"
              alt="Team Member 2"
              class="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 class="text-lg font-semibold mb-2">Coinbase</h3>
            {/* <p class="text-gray-600">Senior Developer</p> */}
          </div>

          <div class="bg-[#073169] rounded-lg shadow-md p-6">
            <img
              src="https://th.bing.com/th/id/R.95bf06d513ed7ae2ea7ee2457a8daf91?rik=IfsTHJ7lZxWswQ&pid=ImgRaw&r=0"
              alt="Team Member 3"
              class="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 class="text-lg font-semibold mb-2">1inch</h3>
            {/* <p class="text-gray-600">Marketing Manager</p> */}
          </div>
        </div>
      </section>


      {/* <div id="footer" className="p-4 py-16 bg-[#BFE963] flex justify-center flex-col items-center">
        <p className="text-3xl font-bold">Social Accounts</p>
        <div className="flex justify-between mt-6">
          <a
            className="m-2"
            href="https://twitter.com/Bardoge313?t=5Z9gymFBFHN_UjcFMVdZGQ&s=09"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              size="lg"
              className="w-8 h-8 text-white hover:text-[#073169]"
              
            />
          </a>
          <a className="m-2" href="https://t.me/bardoge">
            <FontAwesomeIcon
              icon={faTelegram}
              size="lg"
              className="w-8 h-8 text-white hover:text-[#073169]"
             
            />
          </a>
        </div>
      </div> */}

      <div
        id="endbar"
        class="flex justify-center bg-[#073169] py-1 px-4 items-center"
      >
        <p className="font-bold text-white">Listed on Binance Smart Chain</p>
      </div>


    </>
  );
}
