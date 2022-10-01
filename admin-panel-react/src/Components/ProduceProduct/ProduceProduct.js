import React from "react";

export default function ProduceProduct() {
  return (
    <div>
      <div className="col">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label for="exampleFormControlInput1">Kullanılan kaynak</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Çip</option>
              <option>Let</option>
              <option>Kablo</option>
            </select>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Text input with dropdown button"
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label for="exampleFormControlInput1">Kullanılan kaynak</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Çip</option>
              <option>Let</option>
              <option>Kablo</option>
            </select>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Text input with dropdown button"
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
              <label for="exampleFormControlInput1">Çalışan İşçi Kaynağı</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Yazılımcı</option>
                <option>Kaynakçı</option>
              </select>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Text input with dropdown button"
            />
          </div>
          <div className="row">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label for="exampleFormControlInput1">
                  Çalışan İşçi Kaynağı
                </label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>Yazılımcı</option>
                  <option>Kaynakçı</option>
                </select>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with dropdown button"
              />
            </div>
            <div className="d-flex">
              <button className="btn btn-success " type="button">
                Ekle
              </button>
            </div>
          </div>
        </div>
        <div class="mb-3 mt-4">
          <label for="exampleFormControlInput1">Üretilen Ürün Adeti</label>
          <input
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Adet"
          />
        </div>
        <div className="d-flex">
          <button className="btn btn-success w-50" type="button">
            Üret
          </button>
        </div>
      </div>
    </div>
  );
}
