import React, {useState, useEffect} from "react";
import axios from "axios";
const api = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

export default function Products() {
  const [producedProducts, setProducedProducts] = useState([]);

  useEffect(() => {
    api
      .get(
        "product/list-produced-products",
      )
      .then((response) => {
        setProducedProducts(response.data.data)
      })
      .catch((e) => {
        console.error(e);
      });
  }, [])

  return (
    <div>
      <div className="card shadow mb-4" id="stok">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
        </div>
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
                  <th>Ürün ismi</th>
                  <th>Ortalama KAİ</th>
                  <th>Toplam KAİ</th>
                </tr>
              </thead>
              <tbody>
                {producedProducts.map((item, i) => (<tr key={i}>
                  <td>{item.code}</td>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                  <td>{item.product_kai_by_amount}</td>
                </tr>)) }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
