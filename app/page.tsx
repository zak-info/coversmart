"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const links = [
    {
      icon: "/icons/w.png",
      href: "https://wa.me/+32484302568", // WhatsApp international format (213 = Algeria)
      label: "Whatsapp",
    },
    {
      icon: "/icons/tl.png",
      href: "tel:+213555080814", // Click-to-call
      label: "Telephone",
    },
    {
      icon: "/icons/f.png",
      href: "https://www.facebook.com/yourpage", // replace with real page
      label: "Facebook",
    },
    {
      icon: "/icons/i.png",
      href: "https://www.instagram.com/yourprofile", // replace with real profile
      label: "Instagram",
    },
    {
      icon: "/icons/tk.png",
      href: "https://www.tiktok.com/@yourprofile", // replace with real profile
      label: "Tiktok",
    },
    {
      icon: "/icons/l.png",
      href: "https://www.linkedin.com/in/yourprofile", // replace with real profile
      label: "Linkedin",
    },
    // {
    //   icon: "/icons/t.png",
    //   href: "https://t.me/yourusername", // replace with real username
    //   label: "Telegram",
    // },
  ];

  const BigLinks = [
    {
      icon: "ri-ie-line ",
      href: "https://coversmartdesign.com", // replace with real page
      label: "Site Web",
    },
    {
      icon: "ri-facebook-line ",
      href: "https://www.facebook.com/yourpage", // replace with real page
      label: "Facebook",
    },
    {
      icon: "ri-instagram-line ",
      href: "https://www.instagram.com/yourprofile", // replace with real profile
      label: "Instagram",
    },
    {
      icon: "ri-tiktok-line ",
      href: "https://www.tiktok.com/@yourprofile", // replace with real profile
      label: "Tiktok",
    },
    {
      icon: "ri-linkedin-box-line ",
      href: "https://www.linkedin.com/in/yourprofile", // replace with real profile
      label: "Linkedin",
    },


  ];

  return (
    <>
      {
        !isServicesOpen ?
          <>
            <div className=" relative bg-[#FDF9ED] text-[#133249] w-screen hide-scrollbar flex flex-col lg:px-40 items-center pt-12">
              <Image src={"/logo.png"} width={500} height={500} className="w-40 h-40 rounded-lg object-fill " alt="logo" />
              <h1 className=" mt-6 font-extrabold text-center">
                Habillez vos surfaces, transformez l&apos;ordinaire en extraordinaire avec Cover Smart Design
              </h1>
              <div className="w-screen hide-scrollbar flex-wrap2 px-4 mt-6 flex justify-center gap-4 ">
                {
                  links?.map((l, index) => (
                    <a key={index} href={l.href}>
                      <Image src={l.icon} width={250} height={250} className="w-12 h-12  " alt="icon" />
                    </a>
                  ))
                }
              </div>
              <div className={" w-screen my-12 text-white font-extrabold px-6"}>
                <button onClick={() => setIsServicesOpen(true)} className="w-full mt-4  h-20 bg-[#22969B] rounded-lg flex items-center p-4">
                  <i className={"ri-information-2-line " + " text-white font-light text-6xl"}></i>
                  <h1 className=" ms-6" >Services Commercial</h1>
                </button>
                {
                  BigLinks?.map((bl, index) => (
                    <a key={index} href={bl.href} className="w-full mt-4  h-20 bg-[#22969B] rounded-lg flex items-center p-4">
                      <i className={bl.icon + " text-white font-light text-6xl"}></i>
                      <h1 className=" ms-6" >{bl.label}</h1>
                    </a>
                  ))
                }
              </div>
            </div>
          </>
          :
          null
      }
      {isServicesOpen && (
        <div className="absolute inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsServicesOpen(false)}></div>
          <div role="dialog" aria-modal="true" className="relative z-10 w-[90%] max-w-md rounded-xl bg-white text-[#133249] shadow-xl">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
              <h2 className="text-lg font-extrabold">Commercial - Cover Smart Design</h2>
              <button aria-label="Close" onClick={() => setIsServicesOpen(false)} className="text-gray-500 hover:text-gray-700">
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            <div className="px-5 py-4 space-y-3">
              <div className="flex items-start gap-3">
                <i className="ri-mail-line text-[#22969B] text-2xl"></i>
                <div>
                  <p className="font-bold">Email Professionel</p>
                  <p className="text-sm text-gray-600">communication@coversmartdesign.com</p>
                  <p className="text-sm text-gray-600">contact@coversmartdesign.com</p>
                </div>
              </div>
              {/* <div className="flex items-start gap-3">
                <i className="ri-building-2-line text-[#22969B] text-2xl"></i>
                <div>
                  <p className="font-bold">CoverSmart Studio</p>
                  <p className="text-sm text-gray-600">Creative covers, branding, and NFC smart cards.</p>
                </div>
              </div> */}
              <div className="flex items-start gap-3">
                <i className="ri-time-line text-[#22969B] text-2xl"></i>
                <div>
                  <p className="font-bold">Horaires</p>
                  <p className="text-sm text-gray-600">Mon–Fri: 9:00–18:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-phone-line text-[#22969B] text-2xl"></i>
                <div className="flex flex-col">
                  <p className="font-bold">Contact commercial France</p>
                  <a className="text-sm text-[#22969B] underline" href="tel:+33665139137">+33 665 139 137</a>
                  <a className="text-sm text-[#22969B] underline" href="tel:+33647476883">+33 647 476 883</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-phone-line text-[#22969B] text-2xl"></i>
                <div>
                  <p className="font-bold">Contact commercial Belgique</p>
                  <a className="text-sm text-[#22969B] underline" href="tel:0033647476883">0033647476883</a>
                </div>
              </div>

              {/* <div className="flex items-start gap-3">
                <i className="ri-map-pin-line text-[#22969B] text-2xl"></i>
                <div>
                  <p className="font-bold">Address</p>
                  <p className="text-sm text-gray-600">123 Creative Ave, Algiers, DZ</p>
                </div>
              </div> */}
              <div className="flex items-start gap-3">
                <i className="ri-earth-line text-[#22969B] text-2xl"></i>
                <div>
                  <p className="font-bold">Site Web</p>
                  <a className="text-sm text-[#22969B] underline" href="https://www.coversmartdesign.com" target="_blank" rel="noreferrer">www.coversmartdesign.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-map-pin-line text-[#22969B] text-2xl"></i>
                <div>
                  <p className="font-bold">Adresse</p>
                  {/* <a className="text-sm text-[#22969B] underline" href="https://www.coversmartdesign.com" target="_blank" rel="noreferrer">www.coversmartdesign.com</a> */}
                  <p className="text-sm text-[#22969B] ">55 rue du Luxembourg - 59 800.Euralille</p>
                </div>
              </div>
            </div>
            <div className="px-5 py-4 border-t border-gray-200 flex justify-end">
              <button onClick={() => setIsServicesOpen(false)} className="px-4 py-2 rounded-md bg-[#22969B] text-white font-bold">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
