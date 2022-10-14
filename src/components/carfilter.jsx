import '../styles/searching.css'
import React from "react";


function Carfilter() {
       function handleClick(e) {
        e.preventDefault();
        window.location.href='/searchresult';
       }
    return(
        <>
        <div className="form-cont">
        <div className="filtered">
        <label className='label-name'>Nama Mobil</label><br />
            <input type="text" placeholder="Ketik nama/tipe mobil" id='name-input3'/>
            </div>
                <div className="category-cont">
                <form>
                <label className="labels">Kategori</label><br />
                <select name="kategori" id="category">
                    <option value="blank" >Masukan Kapasitas mobil</option>
                    <option value="2 - 4 Orang">2 - 4 Orang</option>
                    <option value="4 - 6 Orang">4 - 6 Orang</option>
                    <option value="6 - 8 Orang">6 - 8 Orang</option>
                    <option value="8 - 10 Orang">8 - 10 Orang</option>
                </select>
            </form>
                    </div>  
                    <div className="price">
                        <form action="">
                            <label className="labels">Harga</label><br />
                            <select name="harga" id="category">
                                <option value="blank">Masukan Harga Sewa per Hari</option>
                                <option value="2 - 4 Orang">2 - 4 Orang</option>
                                <option value="4 - 6 Orang">4 - 6 Orang</option>
                                <option value="6 - 8 Orang">6 - 8 Orang</option>
                                <option value="8 - 10 Orang">8 - 10 Orang</option>
                            </select>
                        </form>
                        </div>  
                        <div className="status">
                        <form action="">
                            <label className="labels">Status</label><br />
                            <select name="status" id="category">
                                <option value="blank">Disewa</option>
                                <option value="2 - 4 Orang">2 - 4 Orang</option>
                                <option value="4 - 6 Orang">4 - 6 Orang</option>
                                <option value="6 - 8 Orang">6 - 8 Orang</option>
                                <option value="8 - 10 Orang">8 - 10 Orang</option>
                            </select>
                        </form>
                        </div>  
                        <button id="searchBtn" onClick={handleClick}>
            Cari Mobil
            </button>

        </div>
        </>
    )
    
}

 
export default Carfilter;