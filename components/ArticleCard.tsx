import Link from "next/link";

interface ArticleCardProps {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  href: string;
  category: string;
}

export default function ArticleCard({
  title,
  summary,
  date,
  tags,
  href,
  category,
}: ArticleCardProps) {
  const categoryColors: Record<string, string> = {
    tech: "bg-blue-100 text-blue-700",
    apps: "bg-green-100 text-green-700",
    notes: "bg-orange-100 text-orange-700",
  };

  const categoryLabels: Record<string, string> = {
    tech: "技術新知",
    apps: "應用新知",
    notes: "PC 小筆記",
  };

  return (
    <Link href={href} className="group">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
        {/* Image placeholder */}
        <div className="h-48 bg-gradient-to-br from-teal/10 to-teal-light/20 flex items-center justify-center">
          <span className="text-4xl opacity-50">
            {category === "tech" ? "🔬" : category === "apps" ? "🚀" : "📝"}
          </span>
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[category] || "bg-gray-100 text-gray-600"}`}>
              {categoryLabels[category] || category}
            </span>
            <span className="text-xs text-text-secondary">{date}</span>
          </div>
          <h3 className="font-bold text-text-primary group-hover:text-teal transition-colors mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-text-secondary line-clamp-2 flex-1">
            {summary}
          </p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs text-teal bg-teal/5 px-2 py-0.5 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
