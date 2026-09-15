import { DocsLayout } from "./components/DocsLayout"
import { AlertPage } from "./pages/AlertPage"
import { BadgePage } from "./pages/BadgePage"
import { ButtonPage } from "./pages/ButtonPage"
import { CardPage } from "./pages/CardPage"
import { DropdownPage } from "./pages/DropdownPage"
import { FormFieldPage } from "./pages/FormFieldPage"
import { InputPage } from "./pages/InputPage"
import { ModalPage } from "./pages/ModalPage"
import { TextareaPage } from "./pages/TextareaPage"

const pages = {
  "/": ButtonPage,
  "/modal": ModalPage,
  "/badge": BadgePage,
  "/alert": AlertPage,
  "/card": CardPage,
  "/input": InputPage,
  "/textarea": TextareaPage,
  "/form-field": FormFieldPage,
  "/dropdown": DropdownPage,
} as const

const current = {
  "/": "button",
  "/modal": "modal",
  "/badge": "badge",
  "/alert": "alert",
  "/card": "card",
  "/input": "input",
  "/textarea": "textarea",
  "/form-field": "form-field",
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
