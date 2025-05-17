import React from 'react';
import Link from 'next/link';
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100 px-4">
        <div className="w-full max-w-2xl mx-auto py-20 flex flex-col items-center justify-center animate-fadeIn">
          {/* სახელი */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight transition-all duration-300 hover:text-blue-700 hover:drop-shadow-xl cursor-pointer">
            აჩიკო ბუაძე
          </h1>

          {/* მთავარი ტიტული */}
          <h2 className="text-lg md:text-xl font-medium mb-5 text-blue-700 text-center">
            განათლებისა და ციფრული განვითარების სპეციალისტი
          </h2>

          {/* უნარები/ღირებულებები */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-lg font-semibold shadow-sm text-base">
              ინოვატორი
            </span>
            <span className="bg-emerald-100 text-emerald-800 px-4 py-1 rounded-lg font-semibold shadow-sm text-base">
              სისტემური მოაზროვნე
            </span>
            <span className="bg-pink-100 text-pink-800 px-4 py-1 rounded-lg font-semibold shadow-sm text-base">
              ციფრული პროდუქტების შემქმნელი
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-lg font-semibold shadow-sm text-base">
              თანასწორი შესაძლებლობების მხარდამჭერი
            </span>
          </div>

          {/* სალიტერატურო ტექსტი */}
          <p className="text-slate-800 text-base md:text-lg font-light leading-relaxed text-center mb-4 animate-fadeIn delay-400">
            წლების განმავლობაში აქტიურად ვარ ჩართული განათლების ხელმისაწვდომობისა და თანამედროვე ტექნოლოგიების დანერგვის პროცესში.<br />
            ჩემი მთავარი მისიაა, ხელი შევუწყო ცოდნის გავრცელებას, პროფესიულ ზრდასა და ინოვაციური მიდგომების დანერგვას.<br />
            მჯერა, რომ თითოეული ადამიანის პოტენციალის გამოვლენა შესაძლებელია სწორი სტრატეგიითა და თანამედროვე ხედვით.
          </p>

          {/* ეფექტური ღილაკი */}
          <Link
            href="/projects"
            className="mt-8 px-8 py-2 rounded-md bg-blue-700 hover:bg-blue-800 text-white font-semibold shadow-lg transition-transform duration-200 hover:scale-105 text-base"
          >
            იხილეთ პროექტები
          </Link>

          {/* CTA ქვესათაური */}
          <div className="mt-10 text-base text-blue-800 font-medium text-center animate-fadeIn delay-600">
            აღმოაჩინე ჩემი ინოვაციური პროექტები და ციფრული ხედვა!
          </div>
        </div>
      </main>
      <Footer />
      {/* Fade-in animation */}
      <style jsx global>{`
        .animate-fadeIn {
          animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1) both;
        }
        .animate-fadeIn.delay-400 {
          animation-delay: 0.4s;
        }
        .animate-fadeIn.delay-600 {
          animation-delay: 0.6s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(28px);}
          to   { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </>
  )
}
