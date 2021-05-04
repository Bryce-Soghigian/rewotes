import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
 import Material from './Material'
export default function Materials() {
 const {state} = useContext(GlobalContext)
    return (
        <div className="materials-list-container">
            <h3 className="materials-header">Imported Materials</h3>
            {state.materials.map(material => {
                return <Material name={material.fileName}/>
            })}
        </div>
    )
}
