import Link from "next/link";
import { notFound } from "next/navigation";
import { datasets, getDatasetBySlug } from "@/data/datasets";

export function generateStaticParams() {
  return datasets.map((ds) => ({ slug: ds.slug }));
}

export default async function DatasetPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dataset = getDatasetBySlug(slug);

  if (!dataset) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#006590]">
            Hem
          </Link>
          <span className="mx-2">/</span>
          <Link href="/oppna-data" className="hover:text-[#006590]">
            &Ouml;ppna Data
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{dataset.title}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <span className="text-xs font-medium text-[#006590] bg-[#006590]/10 px-2 py-1 rounded">
              {dataset.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mt-3">
              {dataset.title}
            </h1>
            <p className="text-gray-600 mt-4 leading-relaxed text-lg">
              {dataset.description}
            </p>

            {/* Keywords */}
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-900 mb-2">
                Nyckelord
              </h2>
              <div className="flex flex-wrap gap-2">
                {dataset.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Formats / Download */}
            <div className="mt-8">
              <h2 className="text-sm font-semibold text-gray-900 mb-3">
                Tillg&auml;ngliga format
              </h2>
              <div className="flex flex-wrap gap-3">
                {dataset.format.map((f) => (
                  <button
                    key={f}
                    className="flex items-center gap-2 bg-white border border-gray-300 hover:border-[#006590] hover:text-[#006590] px-4 py-2.5 rounded-lg transition-colors group"
                  >
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-[#006590]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="font-mono text-sm font-medium">{f}</span>
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Demo: Nedladdning &auml;r inte aktiv i denna version.
              </p>
            </div>

            {/* API info */}
            <div className="mt-8 bg-gray-50 rounded-lg p-5">
              <h2 className="text-sm font-semibold text-gray-900 mb-2">
                API-&aring;tkomst
              </h2>
              <code className="block text-sm bg-gray-900 text-green-400 rounded p-3 font-mono">
                GET /api/datasets/{dataset.slug}
              </code>
              <p className="text-xs text-gray-500 mt-2">
                I produktion ansluts detta mot EntryStore API f&ouml;r live-data.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm sticky top-4">
              <h2 className="font-bold text-gray-900 mb-4">Metadata</h2>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-gray-500">Utgivare</dt>
                  <dd className="font-medium text-gray-900 mt-0.5">
                    {dataset.publisher}
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-500">Licens</dt>
                  <dd className="font-medium text-gray-900 mt-0.5">
                    {dataset.license}
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-500">Uppdaterad</dt>
                  <dd className="font-medium text-gray-900 mt-0.5">
                    {dataset.updated}
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-500">Uppdateringsfrekvens</dt>
                  <dd className="font-medium text-gray-900 mt-0.5">
                    {dataset.frequency}
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-500">Kategori</dt>
                  <dd className="font-medium text-gray-900 mt-0.5">
                    {dataset.category}
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-500">Standard</dt>
                  <dd className="font-medium text-gray-900 mt-0.5">
                    DCAT-AP-SE
                  </dd>
                </div>
              </dl>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  href="/oppna-data"
                  className="text-[#006590] hover:underline text-sm font-medium"
                >
                  &larr; Tillbaka till alla dataset
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
