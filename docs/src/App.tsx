import { DocsLayout } from "./components/DocsLayout.tsx"
import { AlertPage } from "./pages/AlertPage.tsx"
import { AvatarPage } from "./pages/AvatarPage.tsx"
import { BadgePage } from "./pages/BadgePage.tsx"
import { ButtonPage } from "./pages/ButtonPage.tsx"
import { CardPage } from "./pages/CardPage.tsx"
import { CheckboxPage } from "./pages/CheckboxPage.tsx"
import { CodeBlockPage } from "./pages/CodeBlockPage.tsx"
import { DropdownPage } from "./pages/DropdownPage.tsx"
import { FormFieldPage } from "./pages/FormFieldPage.tsx"
import { InputPage } from "./pages/InputPage.tsx"
import { KbdPage } from "./pages/KbdPage.tsx"
import { ModalPage } from "./pages/ModalPage.tsx"
import { PaginationPage } from "./pages/PaginationPage.tsx"
import { PopoverPage } from "./pages/PopoverPage.tsx"
import { RadioGroupPage } from "./pages/RadioGroupPage.tsx"
import { SeparatorPage } from "./pages/SeparatorPage.tsx"
import { SkeletonPage } from "./pages/SkeletonPage.tsx"
import { SwitchPage } from "./pages/SwitchPage.tsx"
import { TablePage } from "./pages/TablePage.tsx"
import { TextareaPage } from "./pages/TextareaPage.tsx"
import { TooltipPage } from "./pages/TooltipPage.tsx"

const pages = {
  "/": ButtonPage,
  "/avatar": AvatarPage,
  "/modal": ModalPage,
  "/badge": BadgePage,
  "/alert": AlertPage,
  "/card": CardPage,
  "/input": InputPage,
  "/textarea": TextareaPage,
  "/checkbox": CheckboxPage,
  "/code-block": CodeBlockPage,
  "/switch": SwitchPage,
  "/radio-group": RadioGroupPage,
  "/form-field": FormFieldPage,
  "/dropdown": DropdownPage,
  "/separator": SeparatorPage,
  "/kbd": KbdPage,
  "/skeleton": SkeletonPage,
  "/table": TablePage,
  "/pagination": PaginationPage,
  "/popover": PopoverPage,
  "/tooltip": TooltipPage,
} as const

const current = {
  "/": "button",
  "/avatar": "avatar",
  "/modal": "modal",
  "/badge": "badge",
  "/alert": "alert",
  "/card": "card",
  "/input": "input",
  "/textarea": "textarea",
  "/checkbox": "checkbox",
  "/code-block": "code-block",
  "/switch": "switch",
  "/radio-group": "radio-group",
  "/form-field": "form-field",
  "/dropdown": "dropdown",
  "/separator": "separator",
  "/kbd": "kbd",
  "/skeleton": "skeleton",
  "/table": "table",
  "/pagination": "pagination",
  "/popover": "popover",
  "/tooltip": "tooltip",
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
