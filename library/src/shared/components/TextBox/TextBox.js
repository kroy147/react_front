import React from 'react';

function TextBox({label,inputType,placeholder,id,name,value,onChangeHandler}){
    debugger
    return (

        <div>
            <label for="formGroupExampleInput2" class="form-label">{label}</label>
                     <input type={inputType}
                     class="form-control"
                     id={id}
                     name={name}
                     value={value}
                     placeholder={placeholder}
                     onChange={onChangeHandler}/>
        </div>

    );
    
}
export default TextBox;