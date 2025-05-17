import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

const projects = [
  {
    title: "Smart Study App",
    status: "დასრულებული",
    color: "bg-blue-900",
    description: "სრულიად დამოუკიდებლად შექმნილი, მრავალგვერდიანი სტუდენტური აპლიკაცია. მოიცავს მონაცემთა მართვას, PDF-ექსპორტსა და ჩატ-ბოტის ინტეგრაციას. ჩემი გამოწვევა იყო სისწრაფის, ინტუიციური დიზაინისა და მოქნილობის შერწყმა.",
    highlight: "AI ინტეგრაცია, მონაცემთა სტრუქტურირება, საუკეთესო UI გამოცდილება.",
    link: null,
  },
  {
    title: "Digital Therapy Planner",
    status: "გაგრძელებაში",
    color: "bg-emerald-900",
    description: "ინტერაქტიული პლატფორმა მშობლებისა და თერაპევტებისთვის. მიზანი იყო პროცესი გამარტივებულიყო ნებისმიერი საჭიროებისთვის, მათ შორის ინდივიდუალური გეგმის, პროგრესის მონიტორინგისა და დინამიკური უკუკავშირის შესაძლებლობით.",
    highlight: "UX კვლევა, რთული ლოგიკის გაშლა, რეალური გამოყენება ოჯახებში.",
    link: null,
  },
  {
    title: "Educator’s AI Content Tool",
    status: "MVP მზადება",
    color: "bg-indigo-900",
    description: "პლატფორმა, რომელიც აუმჯობესებს სასწავლო პროცესს მასწავლებლებისთვის — ავტომატურად ქმნის კითხვებს, ანალიზებს, ინფოგრაფიკებს და მხარს უჭერს საკლასო პროცესს AI-ზე დაფუძნებით.",
    highlight: "NLP ტექნოლოგიების გამოყენება, ეფექტური ტექსტის გენერაცია.",
    link: null,
  },
  {
    title: "Parent Dashboard (Koncept)",
    status: "იდეა/პილოტი",
    color: "bg-pink-900",
    description: "სისტემა, რომელიც მშობელს აძლევს შესაძლებლობას თვალყური ადევნოს ბავშვის პროგრესს, იხილოს აქტივობების რუკა და მიიღოს ინდივიდუალური რეკომენდაციები. ამჟამად კვლევის და დიზაინის ეტაპზეა.",
    highlight: "UX პროტოტიპირება, კვლევა, მონაცემთა ვიზუალიზაცია.",
    link: null,
  },
  {
    title: "Auto-Task Tracker (pet project)",
    status: "შიდა გამოყენება",
    color: "bg-yellow-800",
    description: "პირადი დროისა და ამოცანების მენეჯმენტის ინსტრუმენტი, სადაც ვტესტავ ახალ ალგორითმებს და ვიზუალიზაციის მეთოდებს.",
    highlight: "ალგორითმები, UI ინოვაციები, თვითგანვითარება.",
    link: null,
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-8 animate-fadeIn">პროექტები</h1>
        <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 animate-fadeIn delay-200">
          {projects.map((p, idx) => (
            <div
              key={p.title}
              className={`rounded-2xl shadow-xl p-7 transition-all cursor-pointer border-2 border-transparent hover:border-blue-400 ${p.color} relative group`}
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive(null)}
            >
              <h2 className="text-xl font-bold mb-2 text-white drop-shadow">{p.title}</h2>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4
                ${p.status === "დასრულებული"
                  ? "bg-green-500/80 text-black"
                  : p.status === "გაგრძელებაში"
                  ? "bg-yellow-400/80 text-black"
                  : p.status === "MVP მზადება"
                  ? "bg-blue-300/80 text-black"
                  : p.status === "იდეა/პილოტი"
                  ? "bg-pink-300/80 text-black"
                  : "bg-gray-300/80 text-black"
                }`}>
                {p.status}
              </span>
              <p className="text-slate-200 mb-3 min-h-[66px]">{p.description}</p>
              <div className="font-medium text-blue-200 mb-1">{p.highlight}</div>
              {/* აქ შეგიძლია დაამატო ღილაკი თუ გაქვს პროექტის ბმული */}
              {p.link && (
                <a href={p.link} className="underline text-blue-300 hover:text-blue-500">გადადი პროექტზე</a>
              )}
              {/* ინტერაქტიული ბადჯი (hover-ზე) */}
              {active === idx && (
                <div className="absolute z-10 left-1/2 -translate-x-1/2 top-0 mt-[-40px] bg-slate-900 border border-blue-600 rounded-lg px-5 py-2 text-sm shadow animate-fadeIn text-blue-200">
                  {p.status === "დასრულებული" && "სრული ფუნქციონალი. მზად გასაზიარებლად."}
                  {p.status === "გაგრძელებაში" && "ინტენსიური განვითარება მიმდინარეობს."}
                  {p.status === "MVP მზადება" && "დასრულებასთან ახლოს — რჩება polishing."}
                  {p.status === "იდეა/პილოტი" && "კვლევის და დიზაინის ეტაპი — შენ შეგიძლია ჩაერთო განხილვაში!"}
                  {p.status === "შიდა გამოყენება" && "პირადი ექსპერიმენტი — მოტივაცია და თვითგანვითარება."}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center animate-fadeIn delay-400 text-lg text-slate-300 font-light max-w-2xl">
          <span className="text-blue-300 font-medium">შენიშვნა:</span> <br />
          ჩემი პორტფოლიოს ყოველი პროექტი არის ჩემი ციფრული ხედვის, ექსპერიმენტის, შეცდომისა და პროგრესის ნამდვილი გამოძახილი.
          <br />თუ შენთვის საინტერესოა რომელიმე მიმართულება, მზად ვარ დაგანახო „კოდის მიღმა“ არსებული ინოვაცია და რეალური სირთულეები — არა მხოლოდ შედეგი, არამედ პროფესიული გზა!
        </div>
      </main>
      <Footer />

      {/* FadeIn Animation */}
      <style jsx global>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s cubic-bezier(.4,0,.2,1) both;
        }
        .animate-fadeIn.delay-200 { animation-delay: 0.2s; }
        .animate-fadeIn.delay-400 { animation-delay: 0.4s; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px);}
          to   { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
  )
}
