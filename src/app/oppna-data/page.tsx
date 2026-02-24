"use client";

import { useState } from "react";
import { datasets } from "@/data/datasets";
import DatasetCard from "@/components/DatasetCard";

export default function OppnaDataPage() {
  const [search, setSearch] = useState("");

  const filtered = datasets.filter(
    (ds) =>
      ds.title.toLowerCase().includes(search.toLowerCase()) ||
      ds.description.toLowerCase().includes(search.toLowerCase()) ||
      ds.keywords.some((kw) =>
        kw.toLowerCase().includes(search.toLowerCase())
      )
  );

  const categories = [...new Set(datasets.map((d) => d.category))];

  return (
    <>
      {/* Page header */}
      <section className="bg-[#006590] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">&Ouml;ppna Data</h1>
          <p className="text-white/80 mt-2 max-w-2xl">
            H&auml;r hittar du T&auml;by kommuns &ouml;ppna data. All data &auml;r fritt
            tillg&auml;nglig under &ouml;ppen licens f&ouml;r alla att anv&auml;nda.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search & stats */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="relative w-full sm:w-96">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="S&ouml;k bland dataset..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006590]/50 focus:border-[#006590] bg-white"
            />
          </div>
          <div className="text-sm text-gray-500">
            Visar{" "}
            <span className="font-semibold text-gray-900">
              {filtered.length}
            </span>{" "}
            av {datasets.length} dataset
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSearch(cat)}
              className="text-xs font-medium text-[#006590] bg-[#006590]/10 px-3 py-1.5 rounded-full hover:bg-[#006590]/20 transition-colors"
            >
              {cat}
            </button>
          ))}
          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-xs font-medium text-red-600 bg-red-50 px-3 py-1.5 rounded-full hover:bg-red-100 transition-colors"
            >
              Rensa filter
            </button>
          )}
        </div>

        {/* Dataset list */}
        <div className="flex flex-col gap-4">
          {filtered.map((ds) => (
            <DatasetCard key={ds.slug} dataset={ds} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">Inga dataset matchade din s&ouml;kning.</p>
            <button
              onClick={() => setSearch("")}
              className="mt-2 text-[#006590] hover:underline"
            >
              Visa alla dataset
            </button>
          </div>
        )}

        {/* Info box */}
        <div className="mt-12 bg-[#006590]/5 border border-[#006590]/20 rounded-xl p-6">
          <h2 className="font-bold text-gray-900 mb-2">Om v&aring;ra &ouml;ppna data</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            T&auml;by kommun publicerar &ouml;ppna data enligt den svenska standarden
            DCAT-AP-SE. Datan &auml;r licensierad under CC0 1.0 och kan fritt
            anv&auml;ndas av privatpersoner, f&ouml;retag och organisationer. Vi
            publicerar &auml;ven v&aring;ra dataset till{" "}
            <a
              href="https://www.dataportal.se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#006590] hover:underline"
            >
              Sveriges dataportal
            </a>
            . Har du fr&aring;gor eller &ouml;nskem&aring;l om data? Kontakta oss p&aring;{" "}
            <span className="font-medium">oppnadata@taby.se</span>.
          </p>
        </div>
      </div>
    </>
  );
}
