import React, { useState } from "react";
import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

export default function Query() {
  const [code, setCode] = useState("");
  const [success, setSuccess] = useState(false)
  const [isMessageShow, setIsMessageShow] = useState(false)
  const [responseInfo, setResponseInfo] = useState([])
  const [producedProduct, setProducedProduct] = useState([])
  const [stockProductOne, setStockProductOne] = useState([])
  const [stockProductTwo, setStockProductTwo] = useState([])

  const onCodeSubmit = () => {
    api.post("product/serve-product", {
      code: code
    }).then((response) => {
      setIsMessageShow(true)
      setResponseInfo(response.data.data)
      setProducedProduct(response.data.data.producedProduct)
      setStockProductOne(response.data.data.stockProductOne)
      setStockProductTwo(response.data.data.stockProductTwo)
      setSuccess(true)
    }).catch((e) => {
      setIsMessageShow(true)
      console.error(e)
      setSuccess(false)
    })
  }

  return (
    <div>
      <div
        className="card mt-5 "
        style={{
          width: "500px",
          height: "450px",
          marginLeft: "350px",
          color: " #4e73df",
        }}
      >
        <div className="card-header bg-primary text-white">
          Blockchain Kaydını sorgula
        </div>
        <div className="card-body mt-2">Lütfen aşağıya Ürün Kodunu giriniz.</div>
        <div className="col" style={{ marginBottom: "120px" }}>
          <div style={{ marginLeft: "60px" }}>
            <label htmlFor="exampleFormControlInput1">Kod</label>
            <input
              className="form-control w-75"
              id="exampleFormControlInput1"
              placeholder="Kod"
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div
            className="d-flex flex-row-reverse mt-3"
            style={{ marginRight: "105px" }}
          >
            <button className="btn btn-success w-25" type="button" onClick={onCodeSubmit}>
              Sorgula
            </button>
          </div>
          {isMessageShow && (success ? (<div className="alert alert-success mt-5" role="alert">
            Karbon takibi verifike edilebilir ! <a href={responseInfo.link}>Buraya tıkla !</a>
          </div>) : (<div className="alert alert-danger" role="alert">
            Karbon takibi blockchainde yok!
          </div>))}
        </div>
      </div>
      {isMessageShow &&
        <div className="row mt-5" style={{ marginLeft: "170px" }}>
          <div className="card">
            <div className="card-header">Ürün Bilgileri</div>
            <div className="card-body">Kod : {stockProductTwo.code}</div>
            <div className="card-body">İsim : {stockProductTwo.name}</div>
            <div className="card-body">Miktar : {responseInfo.stockProductTwoNumber} </div>
            <div className="card-body">Ortalama KAİ : {stockProductTwo.product_kai_by_amount}</div>
          </div>
          <div className="card mx-4">
            <div className="card-header">Ürün Bilgileri</div>
            <div className="card-body">Kod : {stockProductOne.code}</div>
            <div className="card-body">İsim : {stockProductOne.name}</div>
            <div className="card-body">Miktar : {responseInfo.stockProductOneNumber} </div>
            <div className="card-body">Ortalama KAİ : {stockProductOne.product_kai_by_amount}</div>
          </div>
          <div className="card">
            <div className="card-header">Üretilen Ürün Bilgileri</div>
            <div className="card-body">Kod : {producedProduct.code}</div>
            <div className="card-body">İsim : {producedProduct.name}</div>
            <div className="card-body">Ortalama KAİ : {producedProduct.product_kai_by_amount}</div>
          </div>
        </div>
      }
    </div>
  );
}
