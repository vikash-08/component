import React, {useState} from 'react';

import "./EditableCompo.css"

export const EditableCompo = ({closeEditableComp, onSubmit, defaultValue} )=>{
    const [formState, setFormState] = useState(defaultValue || {
        name: "",
        qualification: "",
        roles:"",
    });

    const handleChange = (e)=>{
        setFormState({
            ...formState,
            [e.target.name] : e.target.value,
        });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
       onSubmit(formState);
       closeEditableComp();
    }
    return (
        <div className='EditableWrapper'>
            <div className='EditableCompo'>
                <form action="">
                    <div className='formelement'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="" value={formState.name} onChange={handleChange}/>
                    </div>

                    <div className='formelement'>
                        <label htmlFor="qualification">Qualification</label>
                        <input type="text" name="qualification" id="" value = {formState.qualification} onChange={handleChange}/>
                    </div>

                    <div className='formelement'>
                        <label htmlFor="roles">Roles</label>
                        <input type="text" name="roles" id="" value={formState.roles} onChange={handleChange} />
                    </div>

                    <div className='btndiv'>
                        <button className='btn' type='Submit' onClick={handleSubmit}>Submit</button>
                        <button className='btn closeBtn' onClick={closeEditableComp} >Close</button>

                       
                    </div>
                </form>
                
            </div>

        </div>
    )
}