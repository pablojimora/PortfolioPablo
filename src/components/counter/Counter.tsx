"use client"
import React,{ useEffect, useState } from 'react'
import { MiButton } from '../button/Button';
import { notification } from '@/helpers/notificacion';

export const Counter = () => {

    const [counter, setCounter] = useState<number>(0);
    const [obj, setObj] = useState({})

    //Se puede 
    const newObject = () =>{
        setObj({
            name:'david',
            age:10,
            cc:1000515555
        })
    }

    const handleAdd = () => {
        setCounter(counter+1);
    }

    const handleLess = () =>{
        setCounter(counter-1);
    }

    useEffect(()=>{
        notification('cambia','success')
    },[counter])

  return (
    <div>
        {counter}
      <MiButton
      textButton='+1'
      click={handleAdd}/>
      <MiButton
      textButton='-1'
      click={handleLess}/>
      <MiButton
      textButton='reset'
      click={()=>(setCounter(0))}/>
    </div>
  )
}


