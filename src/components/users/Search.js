import React, {useState, useContext} from 'react'
import FinderContext from '../../context/finder/finderContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () =>  {
    const finderContext= useContext(FinderContext)
    const alertContext= useContext(AlertContext)

    const[text,setText] = useState('')
    const {setAlert} = alertContext
    
    const onChange = (e) =>{
        setText( e.target.value)
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        if(text ===''){
            setAlert('Please enter something','light')
        }else{
            finderContext.searchUsers(text)
            setText('')
        }
    }

    return (
        <div>
            <form onSubmit = {onSubmit} className="form">
                <input type="text" 
                    name="text" 
                    placeholder="Search Users..."
                    value={text}
                    onChange = {onChange}
                />
                <input 
                    type="submit" 
                    value="Search" 
                    className="btn btn-dark btn-block">

                </input>
            </form>
            {finderContext.users.length > 0 &&(
                <button className="btn btn-light btn-block" onClick={finderContext.clearUsers}>clear</button>
            )}
        </div>
    )
    
}

export default Search
