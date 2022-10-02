import React, {useEffect, useState} from "react";
import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

export default function Stockitem() {
  const [stockItems, setStockItems] = useState([]);

  useEffect(() => {
    api
      .get(
        "product/list-stock-products",
      )
      .then((response) => {
        setStockItems(response.data.data)
        console.log(response.data.data)
      })
      .catch((e) => {
        console.error(e);
      });
  }, [])

  return (
    <div>
      <div className="card shadow mb-4" id="stok">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Ürün Kodu</th>
                  <th>Ürün İsmi</th>
                  <th>Stok Adet</th>
                  <th>Ortalama KAİ</th>
                  <th>Toplam KAİ</th>
                </tr>
              </thead>
              <tbody>
                {stockItems.map((item, i) => (
                  <tr key={i}>
                  <td>{item.code}</td>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                  <td>{item.product_kai_by_amount}</td>
                  <td>{item.product_kai_sum}</td>
                </tr>
                )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
