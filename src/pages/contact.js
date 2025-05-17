import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-[#15161a] text-white">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-7 text-blue-200 tracking-tight">
          კონტაქტი
        </h1>
        <p className="mb-10 text-base md:text-lg text-slate-300 text-center max-w-xl">
          <br />
          აირჩიე შენთვის სასურველი კომუნიკაციის არხი:
        </p>
        <div className="w-full max-w-md space-y-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/achiko-mgebr-41b9b8340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-[#1e2130] hover:bg-[#26324c] rounded-lg px-6 py-4 transition-colors border border-[#212336] shadow"
          >
            <span className="text-blue-400 text-2xl">in</span>
            <div>
              <div className="text-base font-semibold text-blue-100 group-hover:underline">
                LinkedIn
              </div>
              <div className="text-sm text-slate-400 break-all">
                /achiko-mgebr-41b9b8340
              </div>
            </div>
          </a>
          {/* WhatsApp */}
          <a
            href="https://wa.me/995579166626"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-[#1e2130] hover:bg-[#193d2f] rounded-lg px-6 py-4 transition-colors border border-[#212336] shadow"
          >
            <span className="text-green-400 text-2xl">🟢</span>
            <div>
              <div className="text-base font-semibold text-green-100 group-hover:underline">
                WhatsApp
              </div>
              <div className="text-sm text-slate-400 break-all">
                +995 579 166 626
              </div>
            </div>
          </a>
          {/* Email */}
          <a
            href="mailto:achiko.buadze006@ens.tsu.edu.ge"
            className="group flex items-center gap-4 bg-[#1e2130] hover:bg-[#2b3451] rounded-lg px-6 py-4 transition-colors border border-[#212336] shadow"
          >
            <span className="text-blue-300 text-2xl">✉️</span>
            <div>
              <div className="text-base font-semibold text-blue-100 group-hover:underline">
                ელფოსტა
              </div>
              <div className="text-sm text-slate-400 break-all">
                achiko.buadze006@ens.tsu.edu.ge
              </div>
            </div>
          </a>
        </div>
        <div className="mt-10 text-center text-xs text-slate-500">
          კონფიდენციალურობა სრულად დაცულია • ვპასუხობ სამუშაო საათებში
        </div>
      </main>
      <Footer />
    </div>
  )
}
