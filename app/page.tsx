import Image from "next/image";

export default function Home() {

  const links = [
    {
      icon: "/icons/w.png",
      href: "https://wa.me/213555080814", // WhatsApp international format (213 = Algeria)
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
      icon: "ri-facebook-line ",
      href: "https://www.facebook.com/yourpage", // replace with real page
      label: "Facebook",
    },
    {
      icon:"ri-instagram-line ",
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
    <div className=" bg-[#FDF9ED] text-[#133249] w-screen hide-scrollbar flex flex-col items-center pt-12">
      <Image src={"/logo.png"} width={500} height={500} className="w-40 h-40 rounded-lg object-fill " alt="logo" />
      <h1 className=" mt-6 font-extrabold">Transformer l'ordinaire en extraordinaire</h1>
      <div className="w-screen hide-scrollbar flex-wrap2 px-4 mt-6 flex gap-4 ">
        {
          links?.map((l, index) => (
            <a key={index} href={l.href}>
              <Image src={l.icon} width={250} height={250} className="w-12 h-12  " alt="icon" />
            </a>
          ))
        }
      </div>
      <div className={" w-screen my-12 text-white font-extrabold px-6"}>
        {
          BigLinks?.map((bl, index) => (
            <a key={index} href={bl.href} className="w-full mt-4  h-20 bg-[#22969B] rounded-lg flex items-center p-4">
              {/* <Image src={"/icons/t.png"} width={250} height={250} className="w-12 h-12  " alt="icon" /> */}
              <i className={bl.icon + " text-white font-light text-6xl"}></i>
              <h1 className=" ms-6" >{bl.label}</h1>
            </a>
          ))
        }
      </div>

    </div>
  );
}
