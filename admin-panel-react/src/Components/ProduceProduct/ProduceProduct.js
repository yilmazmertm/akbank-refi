import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const api = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

export default function ProduceProduct() {
  let navigate = useNavigate();

  const [stockItems, setStockItems] = useState([]);
  const [productName, setProductName] = useState("")
  const [stockItemOne, setStockItemOne] = useState(0);
  const [stockItemTwo, setStockItemTwo] = useState(0);
  const [stockItemOneAmount, setStockItemOneAmount] = useState(0);
  const [stockItemTwoAmount, setStockItemTwoAmount] = useState(0);
  const [employeeAmountOne, setEmployeeAmountOne] = useState(0);
  const [employeeAmountTwo, setEmployeeAmountTwo] = useState(0);
  const [totalNumber, setTotalNumber] = useState(0);

  useEffect(() => {
    api
      .get(
        "product/list-stock-products",
      )
      .then((response) => {
        setStockItems(response.data.data)
      })
      .catch((e) => {
        console.error(e);
      });
  }, [])


  const onProduceSubmit = () => {
    api.post("product/create", {
      productName: productName,
      resourceOneId: stockItemOne,
      resourceOneAmount: stockItemOneAmount,
      resourceTwoId: stockItemTwo,
      resourceTwoAmount: stockItemTwoAmount,
      employeeOneId: "1",
      employeeTwoId: "2",
      employeeOneAmount: employeeAmountOne,
      employeeTwoAmount: employeeAmountTwo,
      producedProductAmount: totalNumber
    }).then(() => {
      navigate("productspage")
    })
  }

  return (
    <div>
      <div className="col">
        <div className="input-group mb-3">
        <div className="input-group mb-3">
            <label htmlFor="exampleFormControlInput1">Ürün İsmi</label>
            <input
            type="text"
            className="form-control"
            aria-label="Text input with dropdown button"
            onChange={(e) => setProductName(e.target.value)}
          />
          </div>
          <div className="input-group-prepend">
            <label htmlFor="exampleFormControlInput1">Kullanılan kaynak</label>
            <select className="form-control" id="exampleFormControlSelect1" onChange={(e) => setStockItemOne(e.target.value)}>
              <option defaultValue={true}>Lütfen Seçiniz</option>
              {stockItems.map((item, index) => <option value={item.id} key={index}>{item.name}</option>)}
            </select>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Text input with dropdown button"
            onChange={(e) => setStockItemOneAmount(e.target.value)}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label htmlFor="exampleFormControlInput1">Kullanılan kaynak</label>
            <select className="form-control" id="exampleFormControlSelect1" onChange={(e) => setStockItemTwo(e.target.value)}>
              <option defaultValue={true}>Lütfen Seçiniz</option>
              {stockItems.map((item, index) => <option value={item.id} key={index}>{item.name}</option>)}
            </select>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Text input with dropdown button"
            onChange={(e) => setStockItemTwoAmount(e.target.value)}
          />
        </div>
        <div className="d-flex">
          <button className="btn btn-success " type="button">
            Ekle
          </button>
        </div>
      </div>
      <div className="col">
        <div className="col">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label htmlFor="exampleFormControlInput1">Çalışan İşçi Kaynağı</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Yazılım Departmanı</option>
                <option>Halkla İlişkiler</option>
                <option>Ağır İşçilik</option>
              </select>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Text input with dropdown button"
              onChange={(e) => setEmployeeAmountOne(e.target.value)}
            />
          </div>
          <div className="row">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label htmlFor="exampleFormControlInput1">
                  Çalışan İşçi Kaynağı
                </label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>Yazılım Departmanı</option>
                  <option>Halkla İlişkiler</option>
                  <option>Ağır İşçilik</option>
                </select>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with dropdown button"
                onChange={(e) => setEmployeeAmountTwo(e.target.value)}
              />
            </div>
            <div className="d-flex">
              <button className="btn btn-success " type="button">
                Ekle
              </button>
            </div>
          </div>
        </div>
        <div className="mb-3 mt-4">
          <label htmlFor="exampleFormControlInput1">Üretilen Ürün Adeti</label>
          <input
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Adet"
            onChange={(e) => setTotalNumber(e.target.value)}
          />
        </div>
        <div className="d-flex">
          <button className="btn btn-success w-50" type="button" onClick={onProduceSubmit}>
            Üret
          </button>
        </div>
      </div>
    </div>
  );
}
