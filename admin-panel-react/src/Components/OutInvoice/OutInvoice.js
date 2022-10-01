import React from "react";

export default function OutInvoice() {
  return (
    <form>
      <div className="card-header py-3 " style={{ width: "1280px" }}>
        <h6 className="m-0 font-weight-bold text-primary ">Gelen Faturalar</h6>
      </div>
      <div className="col">
        <div class="mb-3 mt-3">
          <label for="exampleFormControlInput1">Müşteri</label>
          <input
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Müşteri İsmi"
          />
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
      </div>
    </form>
  );
}
