import { auth, signOut } from "@/lib/auth";
import Link from "next/link";

export default async function AuthButton() {
  const session = await auth();

  if (session?.user) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm text-text-secondary hidden lg:inline">
          {session.user.name || session.user.email}
        </span>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <button
            type="submit"
            className="text-sm text-text-secondary hover:text-teal transition-colors"
          >
            登出
          </button>
        </form>
      </div>
    );
  }

  return (
    <Link
      href="/auth/signin"
      className="text-sm font-medium bg-teal text-white px-4 py-1.5 rounded-full hover:bg-teal-dark transition-colors"
    >
      登入
    </Link>
  );
}
