import React, { useState } from "react"
import data from "./components/data"

function App() {
  const [select,setSelect] = useState(null)

  const [multiSelect,setmultiSelect] = useState(false);

  const [selectData,setSelectData] = useState([]);

  function handleSingleSelect(getCurrentId){
    // console.log(getCurrentId);
    setSelect(getCurrentId === select?null:getCurrentId);

  }

  function handleMultiSelect(getCurrentId){
    
  }
  return (
    <div className="wrapper">
      <button className="multi-select-btn"
      onClick={
        ()=>setmultiSelect(!multiSelect)
      }>Enable multiple selection</button>

        <div className="accordion">
          {
          data && data.length > 0 ?
          data.map((dataItem)=>(
          <div key={dataItem.id} className="accordion-item">
            <div className="title">
              <h2>{dataItem.question}</h2>
              <span className="click-btn"  onClick={()=>handleSingleSelect(dataItem.id)}>+</span>
            </div>

            {
              select === dataItem.id ? 
              <div className="content">
                <p>{dataItem.answer}</p>
              </div>:null
            }

          </div>)) :
          <div>no data found</div>}
        </div>
    </div>
  )
}

export default App
