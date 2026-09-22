import type { ReactNode } from "react"
import { WCodeBlock, WLink } from "wizui"

const nav = [
  { href: "/accordion", id: "accordion", label: "Accordion" },
  { href: "/alert", id: "alert", label: "Alert" },
  { href: "/avatar", id: "avatar", label: "Avatar" },
  { href: "/avatar-group", id: "avatar-group", label: "Avatar Group" },
  { href: "/badge", id: "badge", label: "Badge" },
  { href: "/breadcrumb", id: "breadcrumb", label: "Breadcrumb" },
  { href: "/", id: "button", label: "Button" },
  { href: "/button-group", id: "button-group", label: "Button Group" },
  { href: "/card", id: "card", label: "Card" },
  { href: "/checkbox", id: "checkbox", label: "Checkbox" },
  { href: "/chip", id: "chip", label: "Chip" },
  { href: "/code-block", id: "code-block", label: "Code Block" },
  { href: "/container", id: "container", label: "Container" },
  { href: "/dropdown", id: "dropdown", label: "Dropdown" },
  { href: "/form-field", id: "form-field", label: "Form Field" },
  { href: "/input", id: "input", label: "Input" },
  { href: "/kbd", id: "kbd", label: "Kbd" },
  { href: "/link", id: "link", label: "Link" },
  { href: "/modal", id: "modal", label: "Modal" },
  { href: "/pagination", id: "pagination", label: "Pagination" },
  { href: "/popover", id: "popover", label: "Popover" },
  { href: "/progress", id: "progress", label: "Progress" },
  { href: "/radio-group", id: "radio-group", label: "Radio Group" },
  { href: "/select", id: "select", label: "Select" },
  { href: "/separator", id: "separator", label: "Separator" },
  { href: "/skeleton", id: "skeleton", label: "Skeleton" },
  { href: "/slider", id: "slider", label: "Slider" },
  { href: "/slideover", id: "slideover", label: "Slideover" },
  { href: "/switch", id: "switch", label: "Switch" },
  { href: "/table", id: "table", label: "Table" },
  { href: "/tabs", id: "tabs", label: "Tabs" },
  { href: "/textarea", id: "textarea", label: "Textarea" },
  { href: "/toast", id: "toast", label: "Toast" },
  { href: "/tooltip", id: "tooltip", label: "Tooltip" },
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
        <WLink raw href="/" className="px-2 text-sm font-semibold tracking-tight text-neutral-900">
          wizui
        </WLink>
        <p className="mt-6 px-2 text-xs font-medium uppercase tracking-wide text-neutral-400">
          Components
        </p>
        <nav className="mt-2 space-y-0.5">
          {nav.map((item) => (
            <WLink
              key={item.id}
              raw
              href={item.href}
              active={current === item.id}
              className="block px-2 py-1.5 text-sm"
              activeClass="rounded-md bg-neutral-100 font-medium text-neutral-900"
              inactiveClass="rounded-md text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
            >
              {item.label}
            </WLink>
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
  return <WCodeBlock hideHeader language="tsx" code={children} />
}
