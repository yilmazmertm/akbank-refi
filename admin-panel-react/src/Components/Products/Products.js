import React from "react";

export default function Products() {
  return (
    <div>
      <div className="card shadow mb-4" id="products">
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
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Ürün Kodu</th>
                  <th>KAİ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>NK - 001</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>NK - 001</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>NK - 001</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>NK - 001</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>NK - 001</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>NK - 001</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>NK - 001</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>NK - 001</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>NK - 001</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>NK - 001</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>NK - 001</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>NK - 001</td>
                  <td>20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
