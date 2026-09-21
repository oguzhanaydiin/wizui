import { useEffect, useState } from "react"
import { WizProvider } from "wizui"
import { DocsLayout } from "./components/DocsLayout.tsx"
import { AccordionPage } from "./pages/AccordionPage.tsx"
import { AlertPage } from "./pages/AlertPage.tsx"
import { AvatarPage } from "./pages/AvatarPage.tsx"
import { AvatarGroupPage } from "./pages/AvatarGroupPage.tsx"
import { BadgePage } from "./pages/BadgePage.tsx"
import { ButtonPage } from "./pages/ButtonPage.tsx"
import { ButtonGroupPage } from "./pages/ButtonGroupPage.tsx"
import { CardPage } from "./pages/CardPage.tsx"
import { CheckboxPage } from "./pages/CheckboxPage.tsx"
import { ChipPage } from "./pages/ChipPage.tsx"
import { CodeBlockPage } from "./pages/CodeBlockPage.tsx"
import { ContainerPage } from "./pages/ContainerPage.tsx"
import { DropdownPage } from "./pages/DropdownPage.tsx"
import { FormFieldPage } from "./pages/FormFieldPage.tsx"
import { InputPage } from "./pages/InputPage.tsx"
import { KbdPage } from "./pages/KbdPage.tsx"
import { LinkPage } from "./pages/LinkPage.tsx"
import { ModalPage } from "./pages/ModalPage.tsx"
import { PaginationPage } from "./pages/PaginationPage.tsx"
import { PopoverPage } from "./pages/PopoverPage.tsx"
import { ProgressPage } from "./pages/ProgressPage.tsx"
import { RadioGroupPage } from "./pages/RadioGroupPage.tsx"
import { SelectPage } from "./pages/SelectPage.tsx"
import { SeparatorPage } from "./pages/SeparatorPage.tsx"
import { SkeletonPage } from "./pages/SkeletonPage.tsx"
import { SliderPage } from "./pages/SliderPage.tsx"
import { SlideoverPage } from "./pages/SlideoverPage.tsx"
import { SwitchPage } from "./pages/SwitchPage.tsx"
import { TablePage } from "./pages/TablePage.tsx"
import { TextareaPage } from "./pages/TextareaPage.tsx"
import { ToastPage } from "./pages/ToastPage.tsx"
import { TooltipPage } from "./pages/TooltipPage.tsx"

const pages = {
  "/": ButtonPage,
  "/accordion": AccordionPage,
  "/avatar": AvatarPage,
  "/avatar-group": AvatarGroupPage,
  "/modal": ModalPage,
  "/badge": BadgePage,
  "/alert": AlertPage,
  "/button-group": ButtonGroupPage,
  "/card": CardPage,
  "/chip": ChipPage,
  "/input": InputPage,
  "/textarea": TextareaPage,
  "/checkbox": CheckboxPage,
  "/code-block": CodeBlockPage,
  "/container": ContainerPage,
  "/switch": SwitchPage,
  "/radio-group": RadioGroupPage,
  "/select": SelectPage,
  "/form-field": FormFieldPage,
  "/dropdown": DropdownPage,
  "/separator": SeparatorPage,
  "/kbd": KbdPage,
  "/link": LinkPage,
  "/skeleton": SkeletonPage,
  "/slider": SliderPage,
  "/slideover": SlideoverPage,
  "/table": TablePage,
  "/pagination": PaginationPage,
  "/popover": PopoverPage,
  "/progress": ProgressPage,
  "/toast": ToastPage,
  "/tooltip": TooltipPage,
} as const

const current = {
  "/": "button",
  "/accordion": "accordion",
  "/avatar": "avatar",
  "/avatar-group": "avatar-group",
  "/modal": "modal",
  "/badge": "badge",
  "/alert": "alert",
  "/button-group": "button-group",
  "/card": "card",
  "/chip": "chip",
  "/input": "input",
  "/textarea": "textarea",
  "/checkbox": "checkbox",
  "/code-block": "code-block",
  "/container": "container",
  "/switch": "switch",
  "/radio-group": "radio-group",
  "/select": "select",
  "/form-field": "form-field",
  "/dropdown": "dropdown",
  "/separator": "separator",
  "/kbd": "kbd",
  "/link": "link",
  "/skeleton": "skeleton",
  "/slider": "slider",
  "/slideover": "slideover",
  "/table": "table",
  "/pagination": "pagination",
  "/popover": "popover",
  "/progress": "progress",
  "/toast": "toast",
  "/tooltip": "tooltip",
} as const

function pathOf() {
  return window.location.pathname.replace(/\/$/, "") || "/"
}

export default function App() {
  const [path, setPath] = useState(pathOf)

  useEffect(() => {
    function sync() {
      setPath(pathOf())
      window.scrollTo(0, 0)
    }
    window.addEventListener("popstate", sync)
    return () => window.removeEventListener("popstate", sync)
  }, [])

  const Page = path in pages ? pages[path as keyof typeof pages] : pages["/"]
  const nav = path in current ? current[path as keyof typeof current] : "button"

  return (
    <WizProvider>
      <DocsLayout current={nav}>
        <Page />
      </DocsLayout>
    </WizProvider>
  )
}
