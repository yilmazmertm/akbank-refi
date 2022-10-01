import React, { useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });


export default function OutInvoice() {
  const [invoiceDate, setInvoiceDate] = useState();
  const [customerList, setCustomerList] = useState([]);
  const [productList, setProductList] = useState([])
  const [customerId, setCustomerId] = useState(0);
  const [productId, setProductId] = useState(0)
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    api
      .get(
        "customer/list",
      )
      .then((response) => {
        setCustomerList(response.data.data);
      })
      .catch((e) => {
        console.error(e);
      });
    api
      .get(
        "product/list-produced-products",
      )
      .then((response) => {
        setProductList(response.data.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [])

  const onSubmitButtonAction = () => {
    api.post("invoice/create-outgoing", {
      customerId: customerId,
      productId: productId,
      invoiceDate: invoiceDate,
      amount: amount
    })
      .catch((e) => {
        console.error(e);
      });
  }

  return (
    <form>
      <div className="card-header py-3 " style={{ width: "1280px" }}>
        <h6 className="m-0 font-weight-bold text-primary ">Gelen Faturalar</h6>
      </div>
      <div className="col">
        <div className="mb-3 mt-3">
          <label htmlFor="exampleFormControlInput1">Müşteri</label>
          <select className="form-control" id="exampleFormControlSelect1" onChange={(e) => setCustomerId(e.target.value)}>
            <option defaultValue={true}>Lütfen Seçiniz</option>
            {customerList.map((item, key) => <option value={item.id} key={key}>{item.name}</option>)}
          </select>
          <div className="d-flex flex-row-reverse mt-4">
            <button className="btn btn-success w-25" type="button">
              Müşteri Ekle
            </button>
          </div>
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="exampleFormControlInput1">Ürün Seçimi</label>
          <select className="form-control" id="exampleFormControlSelect1" onChange={(e) => setProductId(e.target.value)}>
            <option defaultValue={true}>Lütfen Seçiniz</option>
            {productList.map((item, key) => <option value={item.id} key={key}>{item.code} {item.name}</option>)}
          </select>
        </div>
        <div className="col">
          <div className="mb-3 mt-4">
            <label htmlFor="exampleFormControlInput1">Fatura Tarihi</label>
            <input
              type="datetime-local"
              className="form-control"
              onChange={(e) => setInvoiceDate(e.target.value)}
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
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="d-flex">
            <button className="btn btn-success w-25" type="button" onClick={onSubmitButtonAction}>
              Üret
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
