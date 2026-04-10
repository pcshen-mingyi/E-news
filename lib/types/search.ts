export interface SearchResult {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  summary: string;
  thumbnail?: string;
  snippet: string;
  score: number;
}
