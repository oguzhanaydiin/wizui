import type { ReactNode } from "react"

const nav = [
  { href: "/", id: "button", label: "Button" },
  { href: "/badge", id: "badge", label: "Badge" },
  { href: "/alert", id: "alert", label: "Alert" },
  { href: "/card", id: "card", label: "Card" },
  { href: "/modal", id: "modal", label: "Modal" },
  { href: "/dropdown", id: "dropdown", label: "Dropdown" },
] as const

export function DocsLayout({
  children,
  current = "button",
}: {
  children: ReactNode
  current?: (typeof nav)[number]["id"]
}) {
  return (
    <div className="min-h-dvh bg-white text-neutral-900">
      <aside className="fixed inset-y-0 left-0 hidden w-56 border-r border-neutral-200 px-4 py-6 md:block">
        <a href="/" className="px-2 text-sm font-semibold tracking-tight">
          wizui
        </a>
        <p className="mt-6 px-2 text-xs font-medium uppercase tracking-wide text-neutral-400">
          Components
        </p>
        <nav className="mt-2 space-y-0.5">
          {nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={
                current === item.id
                  ? "block rounded-md bg-neutral-100 px-2 py-1.5 text-sm font-medium text-neutral-900"
                  : "block rounded-md px-2 py-1.5 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
              }
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
      <div className="md:pl-56">
        <header className="border-b border-neutral-200 px-6 py-3 md:hidden">
          <span className="text-sm font-semibold">wizui</span>
        </header>
        <div className="mx-auto max-w-3xl px-6 py-10">{children}</div>
      </div>
    </div>
  )
}

export function Section({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <section className="space-y-3">
      <div className="space-y-1">
        <h2 className="text-base font-semibold">{title}</h2>
        {description ? <p className="text-sm text-neutral-500">{description}</p> : null}
      </div>
      <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">{children}</div>
    </section>
  )
}

export function Code({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg border border-neutral-200 bg-neutral-950 p-4 text-[13px] leading-6 text-neutral-100">
      <code>{children}</code>
    </pre>
  )
}
