import React,{useState} from 'react';
import '../css/navbar.css';
import { allCharacters } from '../functios/functio';
import Info from './Info';
export function Card() {
    const [cyclists, setCyclists] = useState(null)
   
    useState(()=>{
        allCharacters(setCyclists)
    },[]);
  return (
    <>
       {cyclists!= null ? (
        cyclists.map(cyclist => (
            <Info key = {cyclist.id} cyclist = {cyclist}/>
        ))
   
       ) : ('no hat personajes')}
    

    </>
 
    
  );
}
