import React from 'react'
import "./Table.css"
export const Table = ({rows, deleteRow, editRow}) => {
  return (
    <div >
        <table className='Table'>
            <thead>
                <tr>

               <th>Name</th>
               <th>Qualification</th>
               <th>Roles</th>
               <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {
                    rows.map((row, index) => {
                        return <tr key={index}>
                            <td>{row.name}</td>
                            <td>{row.qualification}</td>
                            <td>{row.roles}</td>
                            <td>
                        <span> <button className='Edit' onClick={()=>editRow(index)}>Edit</button> </span><span> <button className='Delete' onClick={()=>deleteRow(index)}>Delete</button> </span>
                    </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
