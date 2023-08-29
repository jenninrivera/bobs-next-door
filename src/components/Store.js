import React from 'react'

function Store({store, onUpdateStore, onDeleteStore}) {
    
    return (
        <>
    <tr>
        <td className="row-name">
            <span>{store.name}</span>
        </td>
        <td>
            <a href={store.image} target="_blank"><b>&#8599;</b></a>
        </td>
        <td>
            <span>{store.season}</span>
        </td>
        <td>
            <span>{store.episode}</span>
        </td>
    </tr>
    <div>
        <form onSubmit={event => onUpdateStore(event, store.id)}>
            <input name="name" type="text" placeholder="Update Store Name"/>   
            <input name="image" type="text" placeholder="Update Image Name"/>   
            <input name="season" type="number" placeholder="Update Season Name"/>   
            <input name="episode" type="number" placeholder="Update Episode Name"/>   
            <input type="submit" value="Update"/>   
        </form>
        <button onClick={() => onDeleteStore(store.id)}>DELETE STORE</button> 
    </div>
        
          
        
       
    
    </>
    
    );
}

export default Store