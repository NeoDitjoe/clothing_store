import Nav from "../navbar/nav";

export default function Layout({children}) {
  return (
    <main>
      <Nav/>
      {children}
    </main>
  )
}
