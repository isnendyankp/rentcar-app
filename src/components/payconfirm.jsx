import React , {useEffect} from "react";
import useState from 'react-usestateref';
import NavBar from "./navbar";
import Footer from "./footer";
import '../styles/payconfirm.css'
import {MdKeyboardBackspace} from 'react-icons/md'
import {FiCopy} from 'react-icons/fi'
import Tab from "./payinstruction";
import Status from "./status";
import {BsCheck2} from 'react-icons/bs'
import {FiImage} from 'react-icons/fi'
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'


export default function Confirm(props) {
    const [payment, setPayment, paymentRef] = useState([23, 59, 59]);
    const [time, setTime, timeRef] = useState ([9, 59]);
    const [isclicked, setIsClicked] = useState(false);
    const [copied, setCopied] = useState(false);
    const [confirmation, setConfirmation] = useState(false);
    const [uploaded, setUploaded] = useState(false);

    const number = '54104257877'

    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

    const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove());
    setUploaded(true)
  }

    
    useEffect(() => {
        setInterval(() => {
          let [hour, minute, second] = paymentRef.current;
    
          if (second === 0) {
            minute = minute - 1;
            second = 60;
          }
    
          if (minute === 0) {
            if (second === 0) {
              hour = hour - 1;
              minute = 60;
              second = 60;
            } else {
              hour = hour - 1;
              minute = 60;
            }
          }
    
          second = second - 0.5;
          setPayment([hour, minute, second]);
        }, 1000);
      }, [paymentRef, setPayment]);

      const uploadtime = () => {
        setConfirmation(true);
        setInterval(() => {
          let [minute, second] = timeRef.current;
    
          if (second === 0) {
            minute = minute - 1;
            second = 59;
          } else {
            second -= 1;
          }
          setTime([minute, second]);
        }, 1000);
      };
    

      const Copy = () => {
        navigator.clipboard.writeText(number)
        setCopied(true)
      };

      const Copy2 = () => {
        navigator.clipboard.writeText('Car price')
        setIsClicked(true)
      }
      
    return(
        <>
        <NavBar />
        <div className="head">
        <div className="header">
            <a href="/payment" id="paylink"><MdKeyboardBackspace size={27}/><span id="type">BCA Transfer</span></a>
            <p id="orderid">Order ID: 86754231</p>
        </div>
        <Status 
        current={['current', 'current', 'num']}/>
        </div>
        <div className="first-row">
        <div className="countdown-cont">
            <div className="deadlinedesc">
            <h6><b>Selesaikan Pembayaran Sebelum</b></h6>
            <p>Rabu, 19 Mei 2022 jam 13.00 WIB</p>
            </div>
            <div className="countdown">
            <h6>
              <span className="time">
                {payment[0] < 10 ? `0${payment[0]}` : payment[0]}
              </span>
              <span>:</span>
              <span className="time">
                {payment[1] < 10 ? `0${payment[1]}` : payment[1]}
              </span>
              <span>:</span>
              <span className="time">
                {payment[2] < 10 ? `0${payment[2]}` : payment[2]}
              </span>
            </h6>
            </div>
            </div>
            {confirmation ? (<div className="transfercont">
              <div className="header">
              <p><b>Konfirmasi Pembayaran</b></p>
              <div className="countdown10">
                <span className='time'>
                {time[0] < 10 ? `0${time[0]}` : time[0]}
                  </span>:
                  <span className="time">
                  {time[1] < 10 ? `0${time[1]}` : time[1]}
                  </span>
              </div>
              </div>
              <p id="thank">Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</p>
              <p>Upload Bukti Pembayaran</p>
              <p id="thank">Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</p>
              <div className="upload-cont">
              <div className="up-field">
                <Dropzone 
                  getUploadParams={getUploadParams}
                  onChangeStatus={handleChangeStatus}
                  onSubmit={handleSubmit}
                  maxFiles={1}
                  accept="image/*"/><div id="img-icon"><FiImage size={20}/></div>
              </div>
              {uploaded ? (<button id="uploadBtn"><b>Upload</b></button>) : (<button id="uploadBtn" disabled><b>Upload</b></button>)}
              </div>
            </div>):(<div className="confirmation">
                <p id="instruction">Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
                <button id="confirmBtn" onClick={uploadtime}>Konfirmasi Pembayaran</button>
            </div>)}
        </div>
        <div className="transfer">
              <p><b>Lakukan Transfer Ke</b></p>
              <div className="transferid">
                <button id='selectedbank' disabled>BCA</button>
                <p id="selectedmethod">BCA Transfer</p>
                </div>
                <p id="transferid">a.n Binar Car Rental</p>
                <div className="input-cont">
                    <div className="Number-cont">
                      <label htmlFor="accnumber">Nomor Rekening</label><br />
                      <input type="text" value={number} className='Number' disabled/>{copied ? (<div className="copied"><BsCheck2 size={27}/></div>):(<i className="icon" onClick={Copy}><FiCopy/></i>)} 
                    </div>
                    <div className="Price-cont">
                    <label htmlFor="totalprice">Total Bayar</label><br />
                    <input type="text" value='Car price' className='Number' disabled/> 
                    {isclicked ? (<div className="copied"><BsCheck2 size={27}/></div>):(<i className="icon" onClick={Copy2}><FiCopy/></i>) }
                    </div>
                  </div>
            </div>
            <Tab />
        <Footer />
        </>
    )
}