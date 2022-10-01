import React, { useState, useEffect } from "react";

export default function Invoice() {
  const [date, setDate] = useState();
  const [piece, setPiece] = useState(0);
  const [kai, setKai] = useState(0);
  const [totalKai, setTotalKai] = useState(0);
  useEffect(() => {
    setTotalKai(kai * piece);
  });
  console.log(date);
  return (
    <form>
      <div className="card-header py-3 " style={{ width: "1280px" }}>
        <h6 className="m-0 font-weight-bold text-primary ">Gelen Faturalar</h6>
      </div>
      <div className="col">
        <div class="mb-3 mt-3">
          <label htmlFor="exampleFormControlInput1">Müşteri</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Teknosa</option>
            <option>AkBank</option>
            <option>Lojistik A.Ş</option>
          </select>
          <div className="d-flex flex-row-reverse mt-4">
            <button className="btn btn-success w-25" type="button">
             Müşteri Ekle
            </button>
          </div>
        </div>
        <div class="mb-3 mt-4">
          <label htmlFor="exampleFormControlInput1">Ürün Adı</label>
          <input
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Ürün Adı"
          />
        </div>

        <div class="mb-3 mt-4">
          <label htmlFor="exampleFormControlInput1">Fatura Tarihi</label>
          <input
            type="datetime-local"
            class="form-control"
            onChange={(e) => setDate(e.target.value)}
            id="exampleFormControlInput1"
            placeholder="Fatura Tarihi"
          />
        </div>
        <div class="mb-3 mt-4">
          <label htmlFor="exampleFormControlInput1">Ürün Adeti</label>
          <input
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Ürün Adeti"
            onChange={(e) => setPiece(e.target.value)}
          />
        </div>
        <div class="mb-3 mt-4">
          <label htmlFor="exampleFormControlInput1">Ürün Adet KAİ</label>
          <input
            class="form-control"
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
      </div>
    </form>
  );
}
