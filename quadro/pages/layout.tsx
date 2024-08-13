import { ThemeProvider } from 'next-themes'
import "@/styles/globals.css"

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider attribute="class">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
