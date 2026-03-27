import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-bg border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-teal mb-3">AI E-News</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              每日 AI 新知平台，掌握最新技術與應用趨勢。
            </p>
          </div>

          {/* Sections */}
          <div>
            <h4 className="font-medium text-text-primary mb-3">內容專區</h4>
            <ul className="space-y-2">
              <li><Link href="/tech" className="text-sm text-text-secondary hover:text-teal transition-colors">技術新知</Link></li>
              <li><Link href="/apps" className="text-sm text-text-secondary hover:text-teal transition-colors">應用新知</Link></li>
              <li><Link href="/notes" className="text-sm text-text-secondary hover:text-teal transition-colors">PC 小筆記</Link></li>
            </ul>
          </div>

          {/* Showcase */}
          <div>
            <h4 className="font-medium text-text-primary mb-3">組織應用</h4>
            <ul className="space-y-2">
              <li><Link href="/showcase" className="text-sm text-text-secondary hover:text-teal transition-colors">投稿展示</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-text-primary mb-3">聯絡我們</h4>
            <p className="text-sm text-text-secondary">有任何建議或合作需求，歡迎聯繫。</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} AI E-News. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
