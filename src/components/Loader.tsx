"use client"
import React from 'react'
import { useEffect } from 'react';
import "../scss/components/_loader.scss"
const Loader = ({ isLoading, setIsLoading }: any) => {
    useEffect(() => {
        setTimeout(() => {
          setIsLoading();
        }, 1900);
      }, [setIsLoading]);
  return (
    <div className='loader'>
        <h2 className='loading'>
            Portfolio
        </h2>
    </div>
  )
}

export default Loader