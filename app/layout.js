// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

// import Logo from "@/app/_components/Logo";
// import Navigation from "@/app/_components/Navigation";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

console.log(josefin);
import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   )
// }

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The wild Oasis",
  },
  description:
    "Luxurious cabin hotel, loacated is the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-900 text-primary-100 min-h-screen flex flex-col`}
      >
        {/* <header>
          <Logo />
          <Navigation />
        </header> */}
        <Header />
        <div className="flex-1 px-8 py-12 ">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
        {/* <footer>Copy right by the wild oasis</footer> */}
      </body>
    </html>
  );
}
