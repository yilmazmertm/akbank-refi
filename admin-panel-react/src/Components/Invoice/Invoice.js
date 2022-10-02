import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const api = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

export default function Invoice() {
  const navigate = useNavigate();
  
  const [date, setDate] = useState();
  const [piece, setPiece] = useState(0);
  const [kai, setKai] = useState(0);
  const [totalKai, setTotalKai] = useState(0);
  const [customerList, setCustomerList] = useState([]);
  const [customerId, setCustomerId] = useState(0);
  const [productName, setProductName] = useState("");

  useEffect(() => {
    setTotalKai(kai * piece);
  }, [kai, piece]);

  useEffect(() => {
    api
      .get("customer/list")
      .then((response) => {
        setCustomerList(response.data.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const onSubmitClick = () => {
    api.post("invoice/create-incoming", {
      customerId : customerId,
      productName: productName,
      amount: piece,
      productKaiForAmount : kai,
      invoiceDate: date
    }).then(() => {
      navigate("/stockpage")
    })
  }

  return (
    <form>
      <div className="card-header py-3 " style={{ width: "1280px" }}>
        <h6 className="m-0 font-weight-bold text-primary ">Gelen Faturalar</h6>
      </div>
      <div className="col">
        <div className="mb-3 mt-3">
          <label htmlFor="exampleFormControlInput1">Müşteri</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            onChange={(e) => setCustomerId(e.target.value)}
          >
            <option defaultValue={true}>Lütfen Seçiniz</option>
            {customerList.map((item, key) => (
              <option value={item.id} key={key}>
                {item.name}
              </option>
            ))}
          </select>
          <div className="d-flex flex-row-reverse mt-4">
            <button className="btn btn-success w-25" type="button" onClick={() => navigate("/companyinfo")}>
              Müşteri Ekle
            </button>
          </div>
        </div>
        <div className="mb-3 mt-4">
          <label htmlFor="exampleFormControlInput1">Ürün Adı</label>
          <input
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Ürün Adı"
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="mb-3 mt-4">
          <label htmlFor="exampleFormControlInput1">Fatura Tarihi</label>
          <input
            type="datetime-local"
            className="form-control"
            onChange={(e) => setDate(e.target.value)}
            id="exampleFormControlInput1"
            placeholder="Fatura Tarihi"
          />
        </div>
        <div className="mb-3 mt-4">
          <label htmlFor="exampleFormControlInput1">Ürün Adeti</label>
          <input
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Ürün Adeti"
            onChange={(e) => setPiece(e.target.value)}
          />
        </div>
        <div className="mb-3 mt-4">
          <label htmlFor="exampleFormControlInput1">Ürün Adet KAİ</label>
          <input
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Ürün Adet KAİ"
            onChange={(e) => setKai(e.target.value)}
          />
        </div>

        <div className="row">
          <div className="col-md-5">Toplam KAİ : {totalKai}</div>
          <div className="col-md-5 mt-5">
            <hr
              className=""
              style={{ borderStyle: "dotted", color: "#121212" }}
            />
          </div>
        </div>
        <div className="d-flex flex-row-reverse mt-4">
          <button
            className="btn btn-success w-25"
            type="button"
            onClick={onSubmitClick}
          >
            Gönder
          </button>
        </div>
      </div>
    </form>
  );
}
