import {useState} from "react"

function App() {
  const [color,setColor]= useState("olive")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap 
     bottom-12 inset-x-0 px-2 justify-center" >
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl ">
        <button className="outline-none px-4 py-1 rounded-xl text-white shadow-sm "
         style={{backgroundColor: "red"}} 
         onClick={()=>{setColor("red")}}>red</button>
        <button className="outline-none px-4 py-1 rounded-xl text-white shadow-sm "
          style={{ backgroundColor: "pink" }}
            onClick={() => { setColor("pink") }}>pink</button>
         <button className="outline-none px-4 py-1 rounded-xl text-white shadow-sm "
          style={{ backgroundColor: "lavender" }}
            onClick={() => { setColor("lavender") }}>lavender</button>
        <button className="outline-none px-4 py-1 rounded-xl text-white shadow-sm "
           style={{ backgroundColor: "blue" }}
            onClick={() => { setColor("blue") }}>blue</button>
        <button className="outline-none px-4 py-1 rounded-xl text-white shadow-sm "
            style={{ backgroundColor: "purple" }}
            onClick={() => { setColor("purple") }}>purple</button>
        <button className="outline-none px-4 py-1 rounded-xl text-white shadow-sm "
            style={{ backgroundColor: "yellow" }}
            onClick={() => { setColor("yellow") }}>yellow</button>
      </div>
     </div>
    </div>
   
  )
}

export default App
