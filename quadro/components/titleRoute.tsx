interface titleRouteProps {
    title: string,
}

export default function ({ title }: titleRouteProps) {
    return (
        <>
            <header className="w-full px-4 py-6 md:px-6 md:py-8">
                <div className="container mx-auto">
                    <h1 className="font-bold text-3xl">
                        {title}
                    </h1>
                </div>
            </header>
        </>
    )
}