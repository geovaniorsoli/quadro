interface titleRouteProps {
    title: string,
}

export default function ({ title }: titleRouteProps) {
    return (
        <>
            <header className="w-full bg-background px-4 py-6 md:px-6 md:py-8">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                        {title}
                    </h1>
                </div>
            </header>
        </>
    )
}