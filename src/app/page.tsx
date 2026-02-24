import Link from "next/link";
import { datasets } from "@/data/datasets";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#006590] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            V&auml;lkommen till T&auml;by kommun
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            H&auml;r hittar du information och tj&auml;nster fr&aring;n T&auml;by kommun
          </p>
        </div>
      </section>

      {/* Snabbl&auml;nkar */}
      <section className="max-w-6xl mx-auto px-4 -mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "F\u00f6rskola & skola", icon: "\ud83c\udf93" },
            { label: "Bygga, bo & milj\u00f6", icon: "\ud83c\udfe0" },
            { label: "Omsorg & st\u00f6d", icon: "\u2764\ufe0f" },
            { label: "Kultur & fritid", icon: "\ud83c\udfa8" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition-shadow cursor-pointer"
            >
              <span className="text-2xl">{item.icon}</span>
              <p className="text-sm font-medium text-gray-700 mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* \u00d6ppna Data-sektion */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">&Ouml;ppna Data</h2>
              <p className="text-gray-600 mt-1">
                T&auml;by kommun delar &ouml;ppna data f&ouml;r &ouml;kad transparens och innovation
              </p>
            </div>
            <Link
              href="/oppna-data"
              className="bg-[#006590] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#005070] transition-colors whitespace-nowrap"
            >
              Visa alla dataset
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {datasets.map((ds) => (
              <Link
                key={ds.slug}
                href={`/oppna-data/${ds.slug}`}
                className="border border-gray-200 rounded-lg p-5 hover:border-[#006590]/40 hover:shadow-sm transition-all group"
              >
                <span className="text-xs font-medium text-[#006590] bg-[#006590]/10 px-2 py-1 rounded">
                  {ds.category}
                </span>
                <h3 className="font-semibold text-gray-900 mt-3 group-hover:text-[#006590] transition-colors">
                  {ds.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {ds.description}
                </p>
                <div className="flex gap-1.5 mt-3">
                  {ds.format.slice(0, 3).map((f) => (
                    <span
                      key={f}
                      className="text-xs font-mono bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <div>
              <span className="font-semibold text-gray-900 text-lg">
                {datasets.length}
              </span>{" "}
              dataset tillg&auml;ngliga
            </div>
            <div>
              Licens:{" "}
              <span className="font-medium text-gray-700">CC0 1.0</span>
            </div>
            <div>
              Standard:{" "}
              <span className="font-medium text-gray-700">DCAT-AP-SE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Info-sektion */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Vad &auml;r &ouml;ppna data?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              &Ouml;ppna data &auml;r information som &auml;r fritt tillg&auml;nglig f&ouml;r alla att
              anv&auml;nda, dela och bygga vidare p&aring;. Genom att publicera &ouml;ppna data
              bidrar T&auml;by kommun till &ouml;kad transparens, innovation och
              samh&auml;llsnytta.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              F&ouml;r utvecklare
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All data finns tillg&auml;nglig via v&aring;rt API och f&ouml;ljer den svenska
              standarden DCAT-AP-SE. Datan publiceras &auml;ven till Sveriges
              dataportal (dataportal.se) f&ouml;r &ouml;kad synlighet.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
