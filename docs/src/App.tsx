import { DocsLayout } from "./components/DocsLayout"
import { AlertPage } from "./pages/AlertPage"
import { BadgePage } from "./pages/BadgePage"
import { ButtonPage } from "./pages/ButtonPage"
import { CardPage } from "./pages/CardPage"
import { CheckboxPage } from "./pages/CheckboxPage"
import { DropdownPage } from "./pages/DropdownPage"
import { FormFieldPage } from "./pages/FormFieldPage"
import { InputPage } from "./pages/InputPage"
import { KbdPage } from "./pages/KbdPage"
import { ModalPage } from "./pages/ModalPage"
import { RadioGroupPage } from "./pages/RadioGroupPage"
import { SeparatorPage } from "./pages/SeparatorPage"
import { SkeletonPage } from "./pages/SkeletonPage"
import { SwitchPage } from "./pages/SwitchPage"
import { TextareaPage } from "./pages/TextareaPage"

const pages = {
  "/": ButtonPage,
  "/modal": ModalPage,
  "/badge": BadgePage,
  "/alert": AlertPage,
  "/card": CardPage,
  "/input": InputPage,
  "/textarea": TextareaPage,
  "/checkbox": CheckboxPage,
  "/switch": SwitchPage,
  "/radio-group": RadioGroupPage,
  "/form-field": FormFieldPage,
  "/dropdown": DropdownPage,
  "/separator": SeparatorPage,
  "/kbd": KbdPage,
  "/skeleton": SkeletonPage,
} as const

const current = {
  "/": "button",
  "/modal": "modal",
  "/badge": "badge",
  "/alert": "alert",
  "/card": "card",
  "/input": "input",
  "/textarea": "textarea",
  "/checkbox": "checkbox",
  "/switch": "switch",
  "/radio-group": "radio-group",
  "/form-field": "form-field",
  "/dropdown": "dropdown",
  "/separator": "separator",
  "/kbd": "kbd",
  "/skeleton": "skeleton",
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
