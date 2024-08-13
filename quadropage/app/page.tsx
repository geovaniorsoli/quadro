"use client"
import Nav from "@/components/nav"
export default function home() {
  return (
    <>
    <Nav/> 
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Quadro
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Organize suas financas em um lugar só.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}