import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
const api = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

export default function CompanyInfo() {
  const navigate = useNavigate();

  const [customer, setCustomer] = useState();
  const customerAdd = () => {
    api
      .post("customer/create", {
        customerName: customer,
      })
      .then(() => {
        navigate("/invoicepage");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <>
      <form>
        <div className="card-header py-3 " style={{ width: "1280px" }}>
          <h6 className="m-0 font-weight-bold text-primary ">
            Müşteri Bilgileri
          </h6>
        </div>
        <div class="mb-3 mt-3">
          <label for="exampleFormControlInput1" className="mx-3">
            Müşteri
          </label>
          <div className="col">
            <input
              onChange={(e) => setCustomer(e.target.value)}
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Müşteri İsmi"
            />
          </div>
          <div className="d-flex flex-row-reverse mt-3 m-2">
            <button
              className="btn btn-success w-25"
              type="button"
              onClick={customerAdd}
            >
              Ekle
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
