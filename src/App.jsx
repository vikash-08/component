import {Table} from "./Compo/Table";
import { EditableCompo } from "./Compo/EditableCompo";
import {  useState} from "react";
import "./App.css"
function App(params) {

    const [EditableCompoOpen, setEditableCompoOpen] = useState(false)
    const [rows, setRows] = useState([
        {name: "Vikash Kumar", qualification: "MCA" , roles:"Frontend Developer"},
        {name: "Akshay Kumar", qualification: "B.Tech" , roles:"Backend Developer"},        
        {name: "Rajiv Kumar", qualification: "MBA" , roles:"Recruiter"},
        {name: "Abhinav Kumar", qualification: "BCA" , roles:"Intern "}

    ]);

    const [rowToEdit, setrowToEdit] = useState(null)

    const handleEditRow = (index) =>{
        setrowToEdit(index);

        setEditableCompoOpen(true)
    }

    const handleDeleteRow = (targetIndex) =>{
        setRows(rows.filter((_,index)=> index !== targetIndex))
    }

   const handleSubmit = (newRow) =>{
    rowToEdit===null
    ? setRows([...rows, newRow])
    : setRows(
        rows.map((currRow, index)=>{
            if (index !== rowToEdit) return currRow;
            return newRow
        })
    )
   
    } 
    return <div className="App">
    <Table rows={rows} deleteRow ={handleDeleteRow} editRow = {handleEditRow}/>
    {EditableCompoOpen && <EditableCompo closeEditableComp ={
        ()=>{
            setEditableCompoOpen(false)
        }} 
        onSubmit = {handleSubmit} 
        defaultValue = {rowToEdit !== null && rows [rowToEdit]}  />}
    <button className="addBtn" onClick={()=>{
        setEditableCompoOpen(true)
        setrowToEdit(null)
    }}>Add</button>
    </div>
}
export default App;