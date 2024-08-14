"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RouteSettings() {
    const pathname = usePathname();

    const isDisabled = (route: string) => pathname === route;

    return (
        <div className="p-6">
            <Link href="/settings">
                <Button
                    disabled={isDisabled("/settings")}
                    variant="ghost"
                    size="sm"
                    className="justify-start w-full gap-2 px-2 text-left"
                >
                    Perfil
                </Button>
            </Link>
            <Link href="/settings/finance">
                <Button
                    disabled={isDisabled("/settings/finance")}
                    variant="ghost"
                    size="sm"
                    className="justify-start w-full gap-2 px-2 text-left"
                >
                    Financeiro
                </Button>
            </Link>
            <Link href="/settings/collaborative">
                <Button
                    disabled={isDisabled("/settings/collaborative")}
                    variant="ghost"
                    size="sm"
                    className="justify-start w-full gap-2 px-2 text-left"
                >
                    Colaborativo
                </Button>
            </Link>
        </div>
    );
}
