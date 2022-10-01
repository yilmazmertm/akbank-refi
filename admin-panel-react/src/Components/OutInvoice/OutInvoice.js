import React from "react";

export default function OutInvoice() {
  return (
    <form>
      <div className="card-header py-3 " style={{ width: "1280px" }}>
        <h6 className="m-0 font-weight-bold text-primary ">Gelen Faturalar</h6>
      </div>
      <div className="col">
        <div className="col">
          <div class="mb-3 mt-3">
            <label for="exampleFormControlInput1">Müşteri</label>
            <input
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Müşteri İsmi"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlSelect1">Ürün seçimi</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Televizyon</option>
              <option>Çip</option>
              <option>3</option>
            </select>
          </div>
        </div>
        <div className="col">
          <div class="mb-3 mt-4">
            <label for="exampleFormControlInput1">Fatura Tarihi</label>
            <input
              type="datetime-local"
              class="form-control"
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
          <div className="d-flex">
            <button className="btn btn-success w-25" type="button">
              Üret
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
