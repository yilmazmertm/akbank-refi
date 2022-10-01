import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Invoice() {
  const navigate = useNavigate();
  const [date, setDate] = useState();
  console.log(date);
  return (
    <form>
      <div className="card-header py-3 " style={{ width: "1280px" }}>
        <h6 className="m-0 font-weight-bold text-primary ">Gelen Faturalar</h6>
      </div>
      <div className="col">
        <div class="mb-3 mt-3">
          <label for="exampleFormControlInput1">Müşteri</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Teknosa</option>
            <option>AkBank</option>
            <option>Lojistik A.Ş</option>
          </select>
          <div className="d-flex">
            <button
              className="btn btn-success"
              type="button"
              onClick={navigate("/customeradd")}
            >
              Success
            </button>
          </div>
        </div>
        <div class="mb-3 mt-4">
          <label for="exampleFormControlInput1">Ürün Adı</label>
          <input
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Ürün Adı"
          />
        </div>

        <div class="mb-3 mt-4">
          <label for="exampleFormControlInput1">Fatura Tarihi</label>
          <input
            type="datetime-local"
            class="form-control"
            onChange={(e) => setDate(e.target.value)}
            id="exampleFormControlInput1"
            placeholder="Fatura Tarihi"
          />
        </div>
        <div class="mb-3 mt-4">
          <label for="exampleFormControlInput1">Ürün Adeti</label>
          <input
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Ürün Adeti"
          />
        </div>
        <div class="mb-3 mt-4">
          <label for="exampleFormControlInput1">Ürün Adet KAİ</label>
          <input
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Ürün Adet KAİ"
          />
        </div>

        <div className="row">
          <div className="col-md-5">Toplam KAİ : 12</div>
          <div className="col-md-5 mt-5">
            <hr
              className=""
              style={{ borderStyle: "dotted", color: "#121212" }}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
