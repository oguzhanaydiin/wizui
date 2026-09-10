import { DocsLayout } from "./components/DocsLayout"
import { ButtonPage } from "./pages/ButtonPage"
import { ModalPage } from "./pages/ModalPage"

const pages = {
  "/": ButtonPage,
  "/modal": ModalPage,
} as const

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/"
  const Page = path === "/modal" ? pages["/modal"] : pages["/"]

  return (
    <DocsLayout current={path === "/modal" ? "modal" : "button"}>
      <Page />
    </DocsLayout>
  )
}
