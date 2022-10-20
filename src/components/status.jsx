import React from "react";
import '../styles/payconfirm.css'

export default function Status(props) {
    const current = props.current;

    return(
        <>
        <div className="status">
          <p className={current[0]}>1</p><span className="text">Pilih Metode</span><p className="line">______</p>
          <p className={current[1]}>2</p><span className="text">Bayar</span><p className="line">______</p>
          <p className={current[2]}>3</p><span className="text">Tiket</span>
        </div>
        </>
    )
}