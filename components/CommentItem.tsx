"use client";

interface CommentItemProps {
  comment: {
    id: string;
    content: string;
    createdAt: string;
    author: {
      id: string;
      name: string | null;
      image: string | null;
    };
  };
  currentUserId?: string;
  isAdmin?: boolean;
  onDelete: (id: string) => void;
}

function timeAgo(dateString: string): string {
  const now = Date.now();
  const then = new Date(dateString).getTime();
  const diff = Math.floor((now - then) / 1000);

  if (diff < 60) return "剛剛";
  if (diff < 3600) return `${Math.floor(diff / 60)} 分鐘前`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} 小時前`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)} 天前`;
  if (diff < 31536000) return `${Math.floor(diff / 2592000)} 個月前`;
  return `${Math.floor(diff / 31536000)} 年前`;
}

export default function CommentItem({
  comment,
  currentUserId,
  isAdmin,
  onDelete,
}: CommentItemProps) {
  const canDelete =
    currentUserId === comment.author.id || isAdmin;
  const initials = (comment.author.name || "?").charAt(0).toUpperCase();

  return (
    <div className="flex gap-3 py-4">
      {/* Avatar */}
      {comment.author.image ? (
        <img
          src={comment.author.image}
          alt={comment.author.name || "使用者"}
          className="w-8 h-8 rounded-full flex-shrink-0"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
          {initials}
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-bold text-text-primary">
            {comment.author.name || "匿名"}
          </span>
          <span className="text-xs text-text-secondary">
            {timeAgo(comment.createdAt)}
          </span>
          {canDelete && (
            <button
              onClick={() => onDelete(comment.id)}
              className="text-xs text-red-500 hover:underline ml-auto"
            >
              刪除
            </button>
          )}
        </div>
        <p className="text-sm text-text-secondary whitespace-pre-wrap break-words">
          {comment.content}
        </p>
      </div>
    </div>
  );
}
