import './globals.css'
import Wrapper from './wrapper'
import Stats from './stats'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<html lang="en">
    <body>
      {/* @ts-expect-error Server Component */}
      <Stats />
      <Wrapper>{children}</Wrapper >
    </body>
  </html>
  )
}
