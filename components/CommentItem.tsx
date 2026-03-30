"use client";

import { useState } from "react";

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
  onEdit: (id: string, newContent: string) => Promise<boolean>;
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
  onEdit,
}: CommentItemProps) {
  const isOwner = currentUserId === comment.author.id;
  const initials = (comment.author.name || "?").charAt(0).toUpperCase();

  const [editing, setEditing] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    const trimmed = editContent.trim();
    if (!trimmed || saving) return;

    setSaving(true);
    const success = await onEdit(comment.id, trimmed);
    setSaving(false);

    if (success) {
      setEditing(false);
    }
  };

  const handleCancel = () => {
    setEditContent(comment.content);
    setEditing(false);
  };

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
          {isOwner && !editing && (
            <button
              onClick={() => setEditing(true)}
              className="text-xs text-teal hover:underline ml-auto"
            >
              修改
            </button>
          )}
        </div>

        {editing ? (
          <div>
            <textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              maxLength={1000}
              rows={3}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent resize-y"
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                  handleSave();
                }
              }}
            />
            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={handleSave}
                disabled={saving || editContent.trim().length === 0}
                className="bg-teal text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-teal-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? "儲存中..." : "儲存"}
              </button>
              <button
                onClick={handleCancel}
                disabled={saving}
                className="text-xs text-text-secondary hover:text-text-primary transition-colors"
              >
                取消
              </button>
              <span className="text-xs text-text-secondary ml-auto">
                {editContent.length}/1000
              </span>
            </div>
          </div>
        ) : (
          <p className="text-sm text-text-secondary whitespace-pre-wrap break-words">
            {comment.content}
          </p>
        )}
      </div>
    </div>
  );
}
