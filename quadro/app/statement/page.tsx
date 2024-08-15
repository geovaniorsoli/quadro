import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import TitleRoute from "@/components/titleRoute"
import * as lucide from "lucide-react"
export default function statement() {

  const size = 15
  return (
    <>
      <TitleRoute title="Extrato" />

      <div className="fixed top-0 right-0 p-5">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger><lucide.Menu /></MenubarTrigger>
            <MenubarContent>
              <MenubarSub>
                <MenubarSubTrigger className="gap-2"> <lucide.Tag size={size} /> Etiquetas </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem className="gap-2"><lucide.Tags size={size} /> Criar etiqueta </MenubarItem>
                  <MenubarItem className="gap-2"><lucide.Pencil size={size} /> Editar/Excluir etiqueta</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger className="gap-2"> <lucide.DownloadIcon size={size} /> Exportar </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem className="gap-2"><lucide.FileText size={size}/> Exportar PDF</MenubarItem>
                  <MenubarItem className="gap-2"><lucide.FileSpreadsheet size={size}/> Exportar XLSX</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </>
  )
}
