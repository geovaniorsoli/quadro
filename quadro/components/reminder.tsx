"use client"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Button } from "@/components/ui/button"

import * as lucide from "lucide-react"

interface reminderProps {
    content: string,
    price: number,
    date: string,
    editOnClick: () => void,
    deleteOnClick: () => void,
}

const currentDate = new Date()


export default function Reminder({ reminders }: { reminders: reminderProps[] }) {
    return (
        <>
            {reminders.map((item, index) => {
                const itemDate = new Date(item.date)
                const isLate = itemDate > currentDate

                return (
                    <Alert className="mt-2 mb-2" variant={isLate ? "default" : "destructive"} key={index}>
                        <div className="flex items-center justify-content gap-2">
                            <Button onClick={item.editOnClick} variant={isLate ? "secondary" : "destructive"} size="icon">
                                <lucide.Bell className="h-4 w-4" />
                            </Button>
                            <AlertTitle>Lembrete</AlertTitle>
                        </div>
                        <AlertDescription>
                            Pagar {item.content} em R${item.price}
                        </AlertDescription>
                        <AlertDescription className={isLate ? "flex gap-2" : "flex gap-2 text-red-500"}>
                            <lucide.Calendar className="h-4 w-4" />
                            {item.date} {!isLate && "(Atrasado)"}
                        </AlertDescription>
                    </Alert>
                )
            })}


        </>
    )
}