"use client"

interface menuProps {
    createTagOnclick: () => void,
    editTagOnclick: () => void,
    exportPDFonClick: () => void,
    exportXLSXonClick: () => void,
    title: string;
}

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import * as lucide from "lucide-react"

export default function menuStatement({
    createTagOnclick,
    editTagOnclick,
    exportPDFonClick,
    exportXLSXonClick,
    title
}: menuProps) {

    const size = 15
    return (
        <>
            <div className="fixed top-0 right-0 p-5">
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>{title}</MenubarTrigger>
                        <MenubarContent>
                            <MenubarSub>
                                <MenubarSubTrigger className="gap-2"> <lucide.Tag size={size} /> Etiquetas </MenubarSubTrigger>
                                <MenubarSubContent>
                                    <MenubarItem onClick={createTagOnclick} className="gap-2"><lucide.Tags size={size} /> Criar etiqueta </MenubarItem>
                                    <MenubarItem onClick={editTagOnclick} className="gap-2"><lucide.Pencil size={size} /> Editar/Excluir etiqueta</MenubarItem>
                                </MenubarSubContent>
                            </MenubarSub>
                            <MenubarSeparator />
                            <MenubarSub>
                                <MenubarSubTrigger className="gap-2"> <lucide.DownloadIcon size={size} /> Exportar </MenubarSubTrigger>
                                <MenubarSubContent>
                                    <MenubarItem onClick={exportPDFonClick} className="gap-2"><lucide.FileText size={size} /> Exportar PDF</MenubarItem>
                                    <MenubarItem onClick={exportXLSXonClick} className="gap-2"><lucide.FileSpreadsheet size={size} /> Exportar XLSX</MenubarItem>
                                </MenubarSubContent>
                            </MenubarSub>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
        </>
    )
}
