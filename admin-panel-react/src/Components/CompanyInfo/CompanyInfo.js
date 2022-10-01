import React from "react";

export default function CompanyInfo() {
  return (
    <>
      <form>
        <div className="card-header py-3 " style={{width: "1280px"}}>
          <h6 className="m-0 font-weight-bold text-primary ">
            Firma Bilgileri
          </h6>
        </div>
        <div class="mb-3 mt-3">
          <label for="exampleFormControlInput1">Firma ADI</label>
          <input
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Firma Adı"
          />
        </div>
        <div class="mb-3 mt-4">
          <label for="exampleFormControlInput1">Aylık Ortalama KAİ</label>
          <input
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Firma Adı"
          />
        </div>
      </form>
    </>
  );
}
