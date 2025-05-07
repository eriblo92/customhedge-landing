
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-white bg-[#0f0f1a]">
      {/* Hero */}
      <section className="h-screen w-full flex flex-col items-center justify-center text-center bg-cover bg-center relative" style={{ backgroundImage: "url('/mockup.png')" }}>
        <div className="bg-black/60 p-6 rounded-2xl shadow-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">CustomHedge</h1>
          <p className="text-lg md:text-xl mb-6">Professional derivatives hedging tailored to your holdings</p>
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl shadow">Get Started</button>
        </div>
      </section>

      {/* Section 1 */}
      <section className="w-full py-20 bg-[#15151f] flex flex-col items-center text-center px-4">
        <Image src="/mockup.png" alt="Dashboard" width={800} height={400} className="rounded-2xl mb-6 shadow-xl" />
        <h2 className="text-2xl md:text-3xl font-semibold">Be prepared when others panic.</h2>
      </section>

      {/* Section 2 */}
      <section className="w-full py-20 bg-[#1c1c2a] flex flex-col items-center text-center px-4">
        <Image src="/mockup.png" alt="Hedge suggestions" width={800} height={400} className="rounded-2xl mb-6 shadow-xl" />
        <h2 className="text-2xl md:text-3xl font-semibold">Don’t sell in panic. Hedge with confidence.</h2>
      </section>

      {/* Section 3 */}
      <section className="w-full py-20 bg-[#15151f] flex flex-col items-center text-center px-4">
        <Image src="/mockup.png" alt="Portfolio Upload" width={800} height={400} className="rounded-2xl mb-6 shadow-xl" />
        <h2 className="text-2xl md:text-3xl font-semibold">Stay invested. Stay protected.</h2>
      </section>

      {/* CTA */}
      <section className="w-full py-16 bg-[#222233] flex flex-col items-center text-center px-4">
        <p className="text-xl md:text-2xl mb-6 max-w-2xl">CustomHedge provides small investors with sophisticated derivative hedging strategies, without the complexity or high fees.</p>
        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl shadow">Try your first hedge – free</button>
      </section>
    </main>
  );
}
