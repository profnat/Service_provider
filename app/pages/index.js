import web_Layout from "@/component/web/layout/layout"


export default function Home () {
  const child = () => {
    <>
      <h1>Hello world</h1>
    </> 
  }

  return(
    <>
      <web_Layout title = {"Home"} content = {"Description"} child = {<child/> } />
    </>
  )
}


