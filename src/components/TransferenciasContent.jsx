"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import api from '../pages/api/transferencias.json';


const TransferenciasContent = () => {
  const [data, setData] = useState([])

  useEffect(() => {
      setData(api)
  }, [])
console.log(data);

  return (
    <main className='bg-slate-200 min-h-[83vh] flex items-center'>
      <div className="flex flex-col w-full p-6 lg:flex-row">
        <div className="grid flex-grow h-32 card min-h-[450px] rounded-box place-items-center ">
          <div>
            <h1 className='text-primary text-[50px]'>Transferir</h1>
          </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-4xl bg-base">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Cuenta</span>
          </label>
          <input type="text" placeholder="cuenta" className="input input-bordered text-white" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Monto</span>
          </label>
          <input type="number" placeholder="monto" className="input input-bordered text-white" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Motivo</span>
          </label>
          <input type="text" placeholder="motivo" className="input input-bordered text-white" />
        </div>
        <div className="form-control mt-6">
          <button className="btn hover:bg-red-800 bg-primary text-white border-none text-2xl font-medium">Transferir</button>
        </div>
      </div>
    </div>
        </div> 
        <div className="divider lg:divider-horizontal"></div> 
        <div className="grid flex-grow h-32 card  min-h-[450px] rounded-box place-items-center">
          <div>
            <h2 className='text-primary text-[50px]'>Movimientos</h2>
          </div>
          <div className='overflow-x-auto shadow-4xl'>
            <table className='table min-h-[400px] lg:table-lg max-sm:table-md max-xsm:table-column-group table-pin-cols bg-base-200 label-text'>
              <thead className='xsm:flex-row xsm:flex-wrap'>
                <tr>
                  <td>Desde</td> 
                  <td>Hacia</td> 
                  <td>Monto</td> 
                  <td>Motivo</td> 
                  <td>Fecha</td> 
                </tr>
              </thead>
              <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td >{item.desde}</td> 
                  <td>{item.hacia}</td> 
                  <td>{item.monto}</td> 
                  <td>{item.motivo}</td> 
                  <td>{item.fecha}</td> 
                </tr>
              ))
                }
              </tbody>
              <tfoot>
                <tr>
                  <td >Name</td> 
                  <td >Job</td> 
                  <td >company</td> 
                  <td >location</td> 
                  <td >Last Login</td> 
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

export default TransferenciasContent