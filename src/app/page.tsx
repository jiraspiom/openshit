export default function Home() {
  const nome = process.env.GBS
  return (
    <>
    <h1 className="col-auto flex  bg-slate-400">inicio {nome}</h1>
    </>
  )
}
