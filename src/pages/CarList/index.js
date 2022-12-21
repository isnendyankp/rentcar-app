import React from "react";
import axios from "axios";
import "./index.css";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IntlProvider, FormattedNumber } from "react-intl";
import SectionHero from "../../components/SectionHero";
import LoadingSkeleton from "../../components/LoadingSkeleton/SkeCars.js";

const CariMobil = () => {
  const BASE_URL = "https://bootcamp-rent-cars.herokuapp.com/customer/car/";

  let navigate = useNavigate();
  const [savedCars, setSavedCars] = useState([]);
  const [mobil, setMobil] = useState([]);
  const [loading, setLoading] = useState(true);
  const [namaMobil, setNamaMobil] = useState("");
  const [kategoriMobil, setKategoriMobil] = useState("");
  const [hargaMobil, setHargaMobil] = useState("");
  const [sewa, setSewa] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [catchVisible, setCatchVisible] = useState(false);

  useEffect(() => {
    setCarsList(BASE_URL);
  }, []);

  function setCarsList(URL) {
    const details = localStorage.getItem("userIn");

    axios
      .get(URL, {
        headers: {
          access_token: details.access_token,
        },
      })
      .then((response) => {
        const filterNull = response.data.filter(
          (items) =>
            items.name !== null &&
            items.category !== null &&
            items.price !== null
        );
        setMobil(filterNull);
        setSavedCars(filterNull);
        setLoading(false);
      })
      .catch(() => {
        setCatchVisible(true);
        setLoading(false);
      });
  }

  const handleNotData = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 2000);
  };

  function handlePayment(id) {
    navigate(`/cars/${id}`);
  }

  function hasilFilter(filterData) {
    if (filterData.length > 0) {
      setMobil(filterData);
    } else {
      handleNotData();
      setMobil(savedCars);
    }
  }
  const handleCariMobil = (e) => {
    e.preventDefault();
    if (savedCars) {
      if (hargaMobil) {
        if (hargaMobil === "400000") {
          const filterData = savedCars.filter(
            (items) => items.price < hargaMobil
          );
          hasilFilter(filterData);
        } else if (hargaMobil === "600000") {
          const filterData = savedCars.filter(
            (items) => items.price > hargaMobil
          );
          hasilFilter(filterData);
        } else {
          const filterData = savedCars.filter(
            (items) => items.price >= 400000 && items.price <= 600000
          );
          hasilFilter(filterData);
        }
      } else if (sewa) {
        const filterData = savedCars.filter(
          (items) => items.status.toString() === sewa
        );
        hasilFilter(filterData);
      } else if (namaMobil || kategoriMobil) {
        const filterData = savedCars.filter(
          (items) =>
            items.name.toLowerCase().includes(namaMobil.toLowerCase()) &&
            items.category.toLowerCase().includes(kategoriMobil.toLowerCase())
        );
        hasilFilter(filterData);
      }
    }
    setNamaMobil("");
    setKategoriMobil("");
    setHargaMobil("");
    setSewa("");
  };

  return (
    <div>
      <SectionHero />
      <Form className="cari-content">
        <Form.Group controlId="formNama" className="mt-3">
          <Form.Label>Nama Mobil</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ketik Nama/Tipe Mobil"
            autoComplete="off"
            onChange={(e) => setNamaMobil(e.target.value)}
            value={namaMobil}
          />
        </Form.Group>
        <Form.Group controlId="formKategori" className="mt-3">
          <Form.Label>Kategori</Form.Label>
          <Form.Select onChange={(e) => setKategoriMobil(e.target.value)}>
            <option key="blankChoice" hidden selected={!kategoriMobil && true}>
              Masukan Kapasitas Mobil
            </option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formHarga" className="mt-3">
          <Form.Label>Harga</Form.Label>
          <Form.Select onChange={(e) => setHargaMobil(e.target.value)}>
            <option key="blankChoice" hidden selected={!hargaMobil && true}>
              Masukan Harga Sewa per Hari
            </option>
            <option value="400000"> &#60; Rp.400.000 </option>
            <option value="antara">Rp.400.000 - Rp. 600.000</option>
            <option value="600000"> &#62; Rp. 600.000</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formSewa" className="mt-3">
          <Form.Label>Status</Form.Label>
          <Form.Select onChange={(e) => setSewa(e.target.value)}>
            <option key="blankChoice" hidden selected={!sewa && true}>
              Status Mobil
            </option>
            <option value="false">Sedia</option>
            <option value="true">Disewa</option>
          </Form.Select>
        </Form.Group>

        <Button
          variant="success"
          type="submit"
          className="mt-4"
          id="searchBtn"
          onClick={handleCariMobil}
          disabled={!namaMobil && !kategoriMobil && !hargaMobil && !sewa}
        >
          Cari Mobil
        </Button>
      </Form>

      <div className="mt-5 hasil-card">
        {/* Alert saat tidak terhubung dengan API */}

        {catchVisible && (
          <Alert variant="danger" style={{ textAlign: "center" }}>
            Telah terjadi kesalahan. Silahkan mencoba beberapa saat lagi.
          </Alert>
        )}

        {/* Alert saat tidak ada data yang ditemukan saat search mobil */}

        {alertVisible && (
          <Alert variant="danger" isOpen={alertVisible}>
            Data tidak ditemukan
          </Alert>
        )}

        {/* Skeleton saat loading data */}
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <div className="d-flex flex-wrap align-items-stretch justify-content-around">
            {mobil.map((result) => {
              return (
                <Card
                  key={result.id}
                  style={{ width: "18rem", margin: "1rem" }}
                  className="card-cont"
                >
                  <Card.Img
                    variant="top"
                    src={
                      result.image
                        ? result.image
                        : "https://img.freepik.com/premium-vector/car-cartoon-vehicle-transportation-isolated_138676-2473.jpg?w=740"
                    }
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{result.name}</Card.Title>
                    <IntlProvider locale="id">
                      <FormattedNumber
                        value={result.price}
                        style="currency"
                        currency="IDR"
                      />{" "}
                      / hari
                    </IntlProvider>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </Card.Text>
                    <div className="d-grid mt-auto">
                      <Button
                        variant="success"
                        onClick={() => handlePayment(result.id)}
                      >
                        Pilih Mobil
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CariMobil;
