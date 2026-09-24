import type { ReactNode } from "react"
import { WCodeBlock, WLink, WNav, type WNavItem } from "wizui"

const nav: WNavItem[] = [
  {
    type: "label",
    label: "Element",
    children: [
      { href: "/", label: "Button" },
      { href: "/button-group", label: "Button Group" },
      { href: "/badge", label: "Badge" },
      { href: "/chip", label: "Chip" },
      { href: "/alert", label: "Alert" },
      { href: "/avatar", label: "Avatar" },
      { href: "/avatar-group", label: "Avatar Group" },
      { href: "/card", label: "Card" },
      { href: "/container", label: "Container" },
      { href: "/separator", label: "Separator" },
      { href: "/skeleton", label: "Skeleton" },
      { href: "/progress", label: "Progress" },
      { href: "/kbd", label: "Kbd" },
      { href: "/code-block", label: "Code Block" },
    ],
  },
  {
    type: "label",
    label: "Form",
    children: [
      { href: "/input", label: "Input" },
      { href: "/textarea", label: "Textarea" },
      { href: "/form-field", label: "Form Field" },
      { href: "/checkbox", label: "Checkbox" },
      { href: "/switch", label: "Switch" },
      { href: "/radio-group", label: "Radio Group" },
      { href: "/select", label: "Select" },
      { href: "/slider", label: "Slider" },
    ],
  },
  {
    type: "label",
    label: "Overlay",
    children: [
      { href: "/modal", label: "Modal" },
      { href: "/slideover", label: "Slideover" },
      { href: "/popover", label: "Popover" },
      { href: "/tooltip", label: "Tooltip" },
      { href: "/dropdown", label: "Dropdown" },
      { href: "/toast", label: "Toast" },
    ],
  },
  {
    type: "label",
    label: "Navigation",
    children: [
      { href: "/link", label: "Link" },
      { href: "/nav", label: "Nav" },
      { href: "/nav-menu", label: "Nav Menu" },
      { href: "/breadcrumb", label: "Breadcrumb" },
      { href: "/tabs", label: "Tabs" },
      { href: "/pagination", label: "Pagination" },
    ],
  },
  {
    type: "label",
    label: "Data",
    children: [
      { href: "/table", label: "Table" },
      { href: "/accordion", label: "Accordion" },
    ],
  },
]

export function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-white text-neutral-900">
      <aside className="fixed inset-y-0 left-0 hidden w-56 overflow-y-auto border-r border-neutral-200 px-4 py-6 md:block">
        <WLink raw href="/" className="px-2 text-sm font-semibold tracking-tight text-neutral-900">
          wizui
        </WLink>
        <WNav className="mt-6" color="neutral" items={nav} />
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
