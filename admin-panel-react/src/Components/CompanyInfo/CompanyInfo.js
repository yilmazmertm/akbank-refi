import React from "react";


export default function CompanyInfo() {

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
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Müşteri İsmi"
            />
          </div>
          <div className="d-flex flex-row-reverse mt-3 m-2">
            <button className="btn btn-success w-25" type="button">
              Ekle
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
