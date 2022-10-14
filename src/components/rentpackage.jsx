import Footer from "./footer";
import NavBar from "./navbar";
import '../styles/rentpackage.css'
import Carpack from "./packagecard";
import React, { useState , useEffect}from "react";
import axios from "axios";



function Rentpackage() {
    const [data, setData] = useState([])
    const [input, setInput] = useState('')

    const cars = async () => {
        try{
          const response = await axios.get("https://bootcamp-rent-car.herokuapp.com/admin/car");
  
          
          if(!response.data) {
            throw new Error('invalid data response');
            
          }
          setData(response.data)
        }
        catch(err){
          console.error(err)
        }
      }
      
      useEffect(() => {
        cars();
       }, []); 

    return(
        <>
        <NavBar />
        <div className="editsearch-cont">
            <div className="form-title">
                    <b>Pencarianmu</b>
                </div>
                <div className="search-form">
            <div className="name-filter2">
                <form action="">
                <label id="label">Nama Mobil</label><br/>
                <input type="text" name="carname" placeholder="" className="inputs-rent" id="name" disabled/>
                </form>
                </div>
                <div className="category-cont2">
                <form>
                <label id="label">Kategori</label><br />
                <input type="text" placeholder="" className="inputs-rent" id="in-1" disabled/>
            </form>
                    </div>  
                    <div className="price2">
                        <form action="">
                            <label id="label">Harga</label><br />
                            <input type="text" className="inputs-rent" id="in-2" disabled/>
                        </form>
                        </div>  
                        <div className="status2">
                        <form action="">
                            <label id="label">Status</label><br />
                            <input type="text" className="inputs-rent" id="in-3" disabled/>
                        </form>
                        </div>
                        </div>
                        </div>

                        <div className="detail-cont">
                            <div className="detail-content">
                            <p className="titles">
                                <b>Tentang Paket</b>
                                </p>
                                <p className="titles">
                                <b>Include</b>
                                </p>
                                <ul className="detail-list">
                                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                    <li>Sudah termasuk bensin selama 12 jam</li>
                                    <li>Sudah termasuk Tiket Wisata</li>
                                    <li>Sudah termasuk pajak</li>
                                </ul>
                                <p className="titles">
                                    <b>Exclude</b>
                                    </p>
                                <ul className="detail-list">
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                </ul>
                                <p className="titles">
                                    <b>Refund, Reschedule, Overtime</b>
                                    </p>
                                    <ul className="detail-list">
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                </ul>
                                <div className="selectedCard">
                                <div className="seletedcar" key={data.id}>
                                    {data.filter((data) => {
                                        if(!data || !data.name) {
                                            return false;
                                        }
                                        return data.name.toLowerCase().includes(input)
                                            }).map(d => (
                                                <Carpack 
                                                key={d.id}
                                                image={d.image}
                                                carName={d.name}
                                                carCat = {d.category}
                                                carPrice={d.price} />
                                            )       
                                            ).slice(0,1)}
                                            </div>
                                </div>
                                
                            </div>   
                        </div>
                        
        <Footer />
        </>
    )
}

export default Rentpackage;