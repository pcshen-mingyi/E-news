import Link from "next/link";
import Image from "next/image";

interface SectionBlockProps {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  priority?: boolean;
}

export default function SectionBlock({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
  reverse = false,
  priority = false,
}: SectionBlockProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden`}
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
            aria-label={`${title} — 了解更多`}
            className="inline-flex items-center gap-2 bg-teal text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-teal-dark transition-colors"
          >
            了解更多
            <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Image */}
        <div className="flex-1 relative min-h-[280px] md:min-h-[320px] bg-gray-100">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}
