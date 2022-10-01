import React from "react";

export default function Query() {
  return (
    <div>
      <div
        class="card mt-5 "
        style={{
          width: "500px",
          height: "450px",
          marginLeft: "350px",
          color: " #4e73df",
        }}
      >
        <div class="card-header bg-primary text-white">
          Blockchain Kaydını sorgula
        </div>
        <div class="card-body mt-2">Lütfen aşağıya Ürün Kodunu giriniz.</div>
        <div className="col" style={{ marginBottom: "120px" }}>
          <div style={{ marginLeft: "60px" }}>
            <label htmlFor="exampleFormControlInput1">Kod</label>
            <input
              class="form-control w-75"
              id="exampleFormControlInput1"
              placeholder="Kod"
            />
          </div>
          <div
            className="d-flex flex-row-reverse mt-3"
            style={{ marginRight: "105px" }}
          >
            <button className="btn btn-success w-25" type="button">
              Sorgula
            </button>
          </div>
          <div className="alert alert-success mt-5" role="alert">
            Karbon takibi Blockchainde var şimdi görüntüle
          </div>
          <div className="alert alert-danger" role="alert">
            Karbon takibi blockchainde yok!
          </div>
        </div>
      </div>
      <div className="row mt-5" style={{marginLeft: "170px"}}>
        <div className="card">
          <div className="card-header">Basic Card Example</div>
          <div className="card-body">This is an example of a basic card.</div>
        </div>
        <div className="card mx-4">
          <div className="card-header">Basic Card Example</div>
          <div className="card-body">This is an example of a basic card.</div>
        </div>
        <div className="card">
          <div className="card-header">Basic Card Example</div>
          <div className="card-body">This is an example of a basic card.</div>
        </div>
      </div>
    </div>
  );
}
