import React from 'react';


function PaymentHistoryItem({ imageSrc, title, artist, ethAmount, timeAgo }) {
  return (
    <div className="flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700" >
      <div className="flex items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center">
          <img
            className="h-full w-full rounded-xl"
            src={imageSrc}
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <h5 className="text-base font-bold text-navy-700 dark:text-white">
            {title}
          </h5>
          <p className="mt-1 text-sm font-normal text-gray-600">
            {artist}
          </p>
        </div>
      </div>
      <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
        <div>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path>
          </svg>
        </div>
        <div className="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
          <p>   </p>
          {ethAmount}<p className="ml-1">PAID</p>
        </div>
        <div className="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
          <p>{timeAgo}</p>
          <p className="ml-1">ago</p>
        </div>
      </div>
    </div>
  );
}

function PaymentHistory() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center h-[100vh] pt-4  " style={{
      backgroundImage:"url('paybg.jpg')",
      
    }}>
      <div className="relative  z-10 flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 w-[576px] mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none "
      >
        <div className="flex items-center justify-between rounded-t-3xl p-3 w-full">
          <div className="text-lg font-bold text-navy-700 dark:text-white">
            Payment History
          </div>
          <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
            See all
          </button>
        </div>
        <PaymentHistoryItem
          imageSrc="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft1.0fea34cca5aed6cad72b.png"
          title="Rajkumari House Warming"
          artist="Packirisamy K"
          ethAmount="₹5,000"
          timeAgo="30s"
        />
        <PaymentHistoryItem
          imageSrc="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft1.0fea34cca5aed6cad72b.png"
          title="Rajkumari House Warming"
          artist="Packirisamy K"
          ethAmount="₹5,000"
          timeAgo="30s"
        /><PaymentHistoryItem
        imageSrc="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft1.0fea34cca5aed6cad72b.png"
        title="Rajkumari House Warming"
        artist="Packirisamy K"
        ethAmount="₹5,000"
        timeAgo="30s"
      /><PaymentHistoryItem
      imageSrc="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft1.0fea34cca5aed6cad72b.png"
      title="Rajkumari House Warming"
      artist="Packirisamy K"
      ethAmount="₹5,000"
      timeAgo="30s"
    /><PaymentHistoryItem
    imageSrc="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft1.0fea34cca5aed6cad72b.png"
    title="Rajkumari House Warming"
    artist="Packirisamy K"
    ethAmount="₹5,000"
    timeAgo="30s"
  /><PaymentHistoryItem
      imageSrc="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft1.0fea34cca5aed6cad72b.png"
      title="Rajkumari House Warming"
      artist="Packirisamy K"
      ethAmount="₹5,000"
      timeAgo="30s"
    />
      </div>
      <p className="font-normal text-navy-700 mt-20 mx-auto w-max">Infinity™. All Rights Reserved.</p>
    </div>
  );
}

export default PaymentHistory;
