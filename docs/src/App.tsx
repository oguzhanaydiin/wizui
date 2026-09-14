import { DocsLayout } from "./components/DocsLayout"
import { AlertPage } from "./pages/AlertPage"
import { BadgePage } from "./pages/BadgePage"
import { ButtonPage } from "./pages/ButtonPage"
import { DropdownPage } from "./pages/DropdownPage"
import { ModalPage } from "./pages/ModalPage"

const pages = {
  "/": ButtonPage,
  "/modal": ModalPage,
  "/badge": BadgePage,
  "/alert": AlertPage,
  "/dropdown": DropdownPage,
} as const

const current = {
  "/": "button",
  "/modal": "modal",
  "/badge": "badge",
  "/alert": "alert",
  "/dropdown": "dropdown",
} as const

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/"
  const Page = path in pages ? pages[path as keyof typeof pages] : pages["/"]
  const nav = path in current ? current[path as keyof typeof current] : "button"

  return (
    <DocsLayout current={nav}>
      <Page />
    </DocsLayout>
  )
}
