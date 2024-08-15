"use client"
import MenuStatement from "@/components/statementComponents/menuStatement"
import TitleRoute from "@/components/titleRoute"
export default function statement() {
  const size = 15
  return (
    <>
      <TitleRoute title="Extrato" />
      <div className="fixed top-0 right-0 p-5">
        <MenuStatement
          title="menu"
          editTagOnclick={() => console.log("edit tag")}
          createTagOnclick={() => console.log("create tag")}
          exportPDFonClick={() => console.log("export pdf")}
          exportXLSXonClick={() => console.log("export xlsx")}
        />
      </div>
    </>
  )
}
