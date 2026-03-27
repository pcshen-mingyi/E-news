import Link from "next/link";

interface SectionBlockProps {
  title: string;
  description: string;
  href: string;
  imageUrl: string;
  reverse?: boolean;
}

export default function SectionBlock({
  title,
  description,
  href,
  imageUrl,
  reverse = false,
}: SectionBlockProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-8 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden`}
      >
        {/* Text */}
        <div className="flex-1 p-8">
          <h2 className="text-teal font-bold text-lg mb-1 flex items-center gap-2">
            {title}
            <span className="flex-1 h-px bg-teal-light ml-2" />
          </h2>
          <p className="text-text-primary font-bold text-xl md:text-2xl leading-relaxed mt-4 mb-6">
            {description}
          </p>
          <Link
            href={href}
            className="inline-flex items-center gap-2 bg-teal text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-teal-dark transition-colors"
          >
            了解更多
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Image */}
        <div className="flex-1 min-h-[250px] bg-gray-100 flex items-center justify-center">
          <div className="text-6xl">{imageUrl}</div>
        </div>
      </div>
    </div>
  );
}
