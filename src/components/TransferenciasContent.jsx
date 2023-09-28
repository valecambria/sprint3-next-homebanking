"use client"
import React from 'react'
import { useState, useEffect } from 'react'


const TransferenciasContent = () => {
/*   const [data, setData] = useState([])

  useEffect(() => {
    fetch(api)
    .then((res) => res.json())
    .then((data) => {
      setData(data)
    })
  }, [])
console.log(data); */

  return (
    <main>
        <div className="hero min-h-[83vh] bg-slate-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-primary">Transferir</h1>
      <p className="py-6 text-slate-800">Transferí tu dinero a otras cuentas de la forma más simple y sencilla! Solamente tenés que ingresar el número de cuenta a transferir, el monto, el motivo, y LISTO!</p>
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
</div>
    </main>
  )
}

export default TransferenciasContent