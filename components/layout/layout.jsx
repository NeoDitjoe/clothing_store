import Navbar from "../navbar/nav";

export default function Layout({children}) {
  return (
    <main>
      <Navbar/>
      {children}
    </main>
  )
}
