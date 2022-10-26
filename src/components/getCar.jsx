import React, { useState , useEffect}from "react";
import axios from "axios";
import Carcard from "../components/carCard";
import '../styles/searchingres.css'

// ada dibagian halaman http://localhost:3002/searchresult

export default function Getcar() {
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
        <div className="editsearch-cont3">
            <p id="titleform"><b>Pencarianmu</b></p>
                <div className="search-form">
                <div className="filtered">
                  <label className="label-name2">Nama mobil</label><br />
            <input type="text" placeholder="" id='input-namaMobil' onChange={(e) => setInput(e.target.value)}/>
        </div>
                <div className="category-cont2">
                <form>
                <label className="label-Kategori">Kategori</label><br />
                <select name="kategori" id="input-search2">
                    <option value="blank">Masukan Kapasitas mobil</option>
                    <option value="2 - 4 Orang">2 - 4 Orang</option>
                    <option value="4 - 6 Orang">4 - 6 Orang</option>
                    <option value="6 - 8 Orang">6 - 8 Orang</option>
                </select>
            </form>
                    </div>  
                    <div className="price2">
                        <form action="">
                            <label className="label-Harga">Harga</label><br />
                            <select name="harga" id="input-search2">
                                <option value="blank">Masukan Harga Sewa per Hari</option>
                                <option value="< 400000">&lt; Rp. 400.000</option>
                                <option value="400000-600000">Rp. 400.000 - Rp. 600.000</option>
                                <option value="< 60000">&gt; Rp. 600.000</option>
                            </select>
                        </form>
                        </div>  
                        <div className="status2">
                        <form action="">
                            <label className="label-status">Status</label><br />
                            <select name="status" id="input-search2">
                                <option value="blank">Disewa</option>
                                <option value="sedia">Sedia</option>
                            </select>
                        </form>
                        </div>
                        </div>
                        <button id="editBtn2">
                            <b>Apply</b>
                            </button> 
                        </div> 
        <div className="carList" key={data.id}>
        {data.filter((data) => {
            if(!data || !data.name) {
                return false;
            }
            return data.name.toLowerCase().includes(input)
        }).map(d => (
              <Carcard key={d.id}
                image={d.image}
                carName={d.name}
                carPrice={d.price} 
                />
        )       
        )}
        </div>
        </>
       )
}

