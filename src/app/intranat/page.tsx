import Link from "next/link";

const ENTRYSCAPE_URL = process.env.NEXT_PUBLIC_ENTRYSCAPE_URL || "http://localhost:8080";
const ENTRYSTORE_URL = process.env.NEXT_PUBLIC_ENTRYSTORE_URL || "http://localhost:8181";

export default function IntranatPage() {
  return (
    <>
      {/* Intran\u00e4t-banner */}
      <section className="bg-[#1a3a4a] text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-xs font-medium bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">
              {"INTRANÄT"}
            </span>
          </div>
          <h1 className="text-3xl font-bold">{"Administrera Öppna Data"}</h1>
          <p className="text-white/70 mt-2 max-w-2xl">
            {"Här hanterar du Täby kommuns öppna datakatalog. Skapa, redigera och publicera datasets som medborgare kan ta del av."}
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Admin-verktyg */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">Adminverktyg</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* EntryScape Suite */}
          <a
            href={ENTRYSCAPE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-[#006590]/30 transition-all group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#006590] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-[#006590] transition-colors">EntryScape Suite</h3>
                <p className="text-xs text-gray-500">{"admin.data.täby.se"}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              {"Huvudverktyget för att skapa och hantera datakatalog, datasets, kontaktpersoner och utgivare."}
            </p>
            <div className="flex items-center gap-2 text-sm text-[#006590] font-medium">
              {"Öppna admin"}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>

          {/* EntryStore API */}
          <a
            href={ENTRYSTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-emerald-500/30 transition-all group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">EntryStore API</h3>
                <p className="text-xs text-gray-500">{"api.data.täby.se"}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Backend-databasen med REST API. RDF/DCAT-metadata, Solr-sök och SPARQL-endpoint.
            </p>
            <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
              {"Öppna API"}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>

          {/* Publik sajt */}
          <Link
            href="/oppna-data"
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-amber-500/30 transition-all group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-amber-600 transition-colors">Publik portal</h3>
                <p className="text-xs text-gray-500">{"data.täby.se"}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              {"Den publika webbplatsen där medborgare söker och laddar ner öppna data."}
            </p>
            <div className="flex items-center gap-2 text-sm text-amber-600 font-medium">
              {"Visa publik sida"}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Snabbguide */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">Snabbguide</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-10 h-10 bg-[#006590]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-[#006590] font-bold">1</span>
              </div>
              <h3 className="font-semibold text-sm text-gray-900 mb-1">Logga in</h3>
              <p className="text-xs text-gray-500">
                {"Öppna EntryScape Suite och logga in med ditt konto"}
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-[#006590]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-[#006590] font-bold">2</span>
              </div>
              <h3 className="font-semibold text-sm text-gray-900 mb-1">Skapa dataset</h3>
              <p className="text-xs text-gray-500">
                {"Catalog → Din katalog → Datasets → Create"}
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-[#006590]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-[#006590] font-bold">3</span>
              </div>
              <h3 className="font-semibold text-sm text-gray-900 mb-1">Fyll i metadata</h3>
              <p className="text-xs text-gray-500">
                Titel, beskrivning, nyckelord, utgivare, format
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-emerald-600 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-sm text-gray-900 mb-1">Publicera</h3>
              <p className="text-xs text-gray-500">
                {"Sätt status till Published — datan syns direkt"}
              </p>
            </div>
          </div>
        </div>

        {/* Arkitektur */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">Systemarkitektur</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Komponent</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">{"Domän (produktion)"}</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Teknik</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Syfte</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">
                    <span className="font-medium text-[#006590]">EntryScape Suite</span>
                  </td>
                  <td className="py-3 px-4">
                    <code className="text-xs bg-gray-100 px-2 py-0.5 rounded">{"admin.data.täby.se"}</code>
                  </td>
                  <td className="py-3 px-4 text-gray-600">React / JavaScript</td>
                  <td className="py-3 px-4 text-gray-600">{"Admin-gränssnitt (intranät)"}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">
                    <span className="font-medium text-emerald-600">EntryStore</span>
                  </td>
                  <td className="py-3 px-4">
                    <code className="text-xs bg-gray-100 px-2 py-0.5 rounded">{"api.data.täby.se"}</code>
                  </td>
                  <td className="py-3 px-4 text-gray-600">Java / Jetty / Solr</td>
                  <td className="py-3 px-4 text-gray-600">Backend API + databas</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">
                    <span className="font-medium text-amber-600">Publik portal</span>
                  </td>
                  <td className="py-3 px-4">
                    <code className="text-xs bg-gray-100 px-2 py-0.5 rounded">{"data.täby.se"}</code>
                  </td>
                  <td className="py-3 px-4 text-gray-600">Next.js / Vercel</td>
                  <td className="py-3 px-4 text-gray-600">{"Medborgarnas webbplats"}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">
                    <span className="font-medium text-purple-600">dataportal.se</span>
                  </td>
                  <td className="py-3 px-4">
                    <code className="text-xs bg-gray-100 px-2 py-0.5 rounded">dataportal.se</code>
                  </td>
                  <td className="py-3 px-4 text-gray-600">DIGG (nationell)</td>
                  <td className="py-3 px-4 text-gray-600">{"Sveriges dataportal — skördar vår data"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <h3 className="font-semibold text-gray-900 text-sm mb-3">{"Dataflöde"}</h3>
            <div className="flex items-center gap-2 flex-wrap text-sm">
              <span className="bg-[#006590] text-white px-3 py-1.5 rounded font-medium">Admin skapar data</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="bg-emerald-600 text-white px-3 py-1.5 rounded font-medium">EntryStore lagrar</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="bg-amber-500 text-white px-3 py-1.5 rounded font-medium">Publik portal visar</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="bg-purple-600 text-white px-3 py-1.5 rounded font-medium">{"dataportal.se skördar"}</span>
            </div>
          </div>
        </div>

        {/* Inloggning */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Demo-inloggning
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            {"I denna demo används ett gemensamt admin-konto. I produktion har varje handläggare ett eget konto."}
          </p>
          <div className="bg-white rounded-lg p-4 inline-block">
            <div className="text-sm">
              <span className="text-gray-500">{"Användare:"}</span>{" "}
              <code className="font-mono font-bold">admin</code>
            </div>
            <div className="text-sm mt-1">
              <span className="text-gray-500">{"Lösenord:"}</span>{" "}
              <code className="font-mono font-bold">admin123</code>
            </div>
          </div>
        </div>

        {/* DCAT-AP-SE info */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">Om standarden DCAT-AP-SE</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {"All metadata i systemet följer "}
            <strong>DCAT-AP-SE</strong>
            {" — den svenska profilen av EU:s DCAT Application Profile. Standarden säkerställer att data kan delas och förstås av alla, oavsett vilken plattform som används."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-sm text-gray-900 mb-2">{"Obligatoriska fält"}</h4>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>{"• Titel — Vad heter datasetet?"}</li>
                <li>{"• Beskrivning — Vad innehåller det?"}</li>
                <li>{"• Utgivare — Vilken nämnd/kontor ansvarar?"}</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-sm text-gray-900 mb-2">{"Rekommenderade fält"}</h4>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>{"• Nyckelord — Sökbara taggar"}</li>
                <li>{"• Kategori — Ämnesområde (EU-vokabulär)"}</li>
                <li>{"• Kontaktpunkt — Vem kan man fråga?"}</li>
                <li>{"• Åtkomsträttigheter — Public/Restricted"}</li>
                <li>{"• Licens — Vanligtvis CC0 1.0"}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
