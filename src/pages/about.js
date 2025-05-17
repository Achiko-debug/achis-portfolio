import { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

const highlights = {
  education: "text-blue-400 hover:bg-blue-900/40 transition-colors cursor-pointer",
  technology: "text-teal-400 hover:bg-teal-900/40 transition-colors cursor-pointer",
  creativity: "text-pink-400 hover:bg-pink-900/40 transition-colors cursor-pointer",
  accessibility: "text-yellow-400 hover:bg-yellow-900/40 transition-colors cursor-pointer",
  strategy: "text-indigo-400 hover:bg-indigo-900/40 transition-colors cursor-pointer",
  responsibility: "text-green-400 hover:bg-green-900/40 transition-colors cursor-pointer",
};

const extraFacts = [
  "მიყვარს თანამედროვე ტექნოლოგიების ინტეგრირება განათლების პროცესში.",
  "შეგიძლიათ აღმოაჩინოთ ჩემი რამდენიმე ღია კოდის პროექტი GitHub-ზე.",
  "მაქვს გამოცდილება გუნდის ლიდერობაში და ინოვაციური იდეების მართვაში.",
  "ვმუშაობ როგორც საერთაშორისო, ასევე ადგილობრივ საგანმანათლებლო პლატფორმებზე.",
  "ძირითადად ვმუშაობ Python-ით, JavaScript-ით და Next.js-ით.",
];

export default function About() {
  const [showMore, setShowMore] = useState(false);
  const [fact, setFact] = useState(extraFacts[0]);
  const [highlightInfo, setHighlightInfo] = useState("");

  function randomFact() {
    const idx = Math.floor(Math.random() * extraFacts.length);
    setFact(extraFacts[idx]);
  }

  // ყოველი highlight-ს თავისი მინიტექსტი
  const highlightPopups = {
    education: "განათლება — ჩემი ძირითადი ფასეულობა და პროფესიული გზა.",
    technology: "ტექნოლოგიები — შესაძლებლობების გამზრდელი ინსტრუმენტი.",
    creativity: "კრეატიულობა — ინოვაციის წყარო და ყოველდღიური მოტივაცია.",
    accessibility: "ხელმისაწვდომობა — ჩემი საქმიანობის მთავარი მიზანი.",
    strategy: "სტრატეგია — შედეგზე ორიენტირებული პროფესიული ხედვა.",
    responsibility: "პასუხისმგებლობა — ხარისხიანი საქმის მთავარი განმსაზღვრელი.",
  };

  function handleHighlightClick(type) {
    setHighlightInfo(highlightPopups[type]);
    setTimeout(() => setHighlightInfo(""), 2500); // info გაქრება 2.5 წამში
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6 animate-fadeIn">ჩემ შესახებ</h1>
        <div className="max-w-2xl text-center space-y-6 text-lg font-light leading-relaxed animate-fadeIn delay-200">
          <p>
            ჩემი პროფესიული გზა დაფუძნებულია{" "}
            <span className={highlights.education} onClick={() => handleHighlightClick("education")}>განათლებაზე</span>,{" "}
            <span className={highlights.technology} onClick={() => handleHighlightClick("technology")}>ტექნოლოგიებზე</span> და{" "}
            <span className={highlights.creativity} onClick={() => handleHighlightClick("creativity")}>კრეატიულობაზე</span>.
            წლების განმავლობაში მე აქტიურად ვმუშაობდი როგორც ინოვაციური პროექტების მართვის, ისე{" "}
            <span className={highlights.strategy} onClick={() => handleHighlightClick("strategy")}>სტრატეგიული განვითარების</span> მიმართულებით.
          </p>
          <p>
            უმაღლესი განათლება მივიღე{" "}
            <span className={highlights.accessibility} onClick={() => handleHighlightClick("accessibility")}>თანასწორი შესაძლებლობებისა და ინკლუზიური გარემოს</span> მიმართულებით. ჩემი მთავარი მისიაა, ყველა ადამიანს ჰქონდეს{" "}
            <span className={highlights.accessibility} onClick={() => handleHighlightClick("accessibility")}>განვითარების</span> და{" "}
            <span className={highlights.education} onClick={() => handleHighlightClick("education")}>ცოდნის</span> სრულფასოვანი ხელმისაწვდომობა.
          </p>
          <p>
            პროფესიულ საქმიანობაში ყურადღებას ვამახვილებ{" "}
            <span className={highlights.technology} onClick={() => handleHighlightClick("technology")}>თანამედროვე ტექნოლოგიების</span> დანერგვაზე — ციფრული პროდუქტებისა და ავტომატიზირებული სისტემების განვითარება ჩემთვის საუკეთესო ინსტრუმენტია, რომ{" "}
            <span className={highlights.accessibility} onClick={() => handleHighlightClick("accessibility")}>განათლების ხელმისაწვდომობა</span> რეალობად ვაქციო.
          </p>
          <p>
            გამოვირჩევი{" "}
            <span className={highlights.creativity} onClick={() => handleHighlightClick("creativity")}>კრეატიულობით</span>,{" "}
            <span className={highlights.strategy} onClick={() => handleHighlightClick("strategy")}>ანალიტიკური აზროვნებით</span> და{" "}
            <span className={highlights.responsibility} onClick={() => handleHighlightClick("responsibility")}>პასუხისმგებლობის გრძნობით</span>. მჯერა, რომ{" "}
            <span className={highlights.strategy} onClick={() => handleHighlightClick("strategy")}>სწორი სტრატეგიით</span> და{" "}
            <span className={highlights.technology} onClick={() => handleHighlightClick("technology")}>თანამედროვე ხედვით</span> შესაძლებელია თითოეული ადამიანის პოტენციალის სრულფასოვნად გამოვლენა.
          </p>
          <p>
            ჩემი ყოველი ინიციატივა ემყარება{" "}
            <span className={highlights.responsibility} onClick={() => handleHighlightClick("responsibility")}>პასუხისმგებლობას</span>,{" "}
            <span className={highlights.creativity} onClick={() => handleHighlightClick("creativity")}>შემოქმედებით მიდგომას</span> და{" "}
            <span className={highlights.strategy} onClick={() => handleHighlightClick("strategy")}>ინოვაციურ გადაწყვეტილებებს</span>.
          </p>
        </div>

        {/* Highlight Info Popup */}
        {highlightInfo && (
          <div className="mt-4 animate-fadeIn">
            <span className="bg-slate-900/80 border border-slate-700 rounded-lg px-5 py-2 text-base text-blue-200 shadow-lg">
              {highlightInfo}
            </span>
          </div>
        )}

        {/* მეტი ფაქტი და ღილაკი */}
        <div className="mt-10 flex flex-col items-center">
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded transition-colors shadow mb-3"
            onClick={() => { setShowMore(true); randomFact(); }}>
            შეიტყვე მეტი ჩემ შესახებ
          </button>
          {showMore && (
            <div className="animate-fadeIn mt-2 bg-slate-800/80 border border-slate-700 rounded-lg px-6 py-4 text-base text-slate-100 shadow-lg max-w-lg">
              <span>{fact}</span>
              <button
                className="ml-4 text-blue-300 underline text-sm"
                onClick={randomFact}
              >შემოგთავაზო სხვა ფაქტი?</button>
            </div>
          )}
        </div>
      </main>
      <Footer />

      {/* FadeIn Animation */}
      <style jsx global>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px);}
          to   { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
  )
}
