import Link from "next/link";
import { Dataset } from "@/data/datasets";

export default function DatasetCard({ dataset }: { dataset: Dataset }) {
  return (
    <Link
      href={`/oppna-data/${dataset.slug}`}
      className="block bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-[#006590]/30 transition-all p-6 group"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <span className="text-xs font-medium text-[#006590] bg-[#006590]/10 px-2 py-1 rounded">
            {dataset.category}
          </span>
          <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-[#006590] transition-colors">
            {dataset.title}
          </h3>
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">
            {dataset.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {dataset.keywords.map((kw) => (
              <span
                key={kw}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          {dataset.format.map((f) => (
            <span
              key={f}
              className="text-xs font-mono bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
      <div className="text-xs text-gray-400 mt-4">
        Uppdaterad: {dataset.updated} &middot; {dataset.publisher}
      </div>
    </Link>
  );
}
