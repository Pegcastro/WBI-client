import { useEffect, useState } from "react";
import "./App.css";
import FilterBar from "./components/FilterBar";
import { Card, List } from "antd";
import "antd/dist/antd.css";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);

  // Retrieving the initial data
  useEffect(() => {
    fetch("/api/sneakers")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      });
  }, []);

  // Generate all the brand data
  const generateBrandData = () => {
    return [...new Set(data.map((item) => item.brand))];
  };

  // Generate all the model data
  const generateModelData = () => {
    return [...new Set(data.map((item) => item.model))];
  };

  // Generate all the model data
  const generateDateData = () => {
    return [...new Set(data.map((item) => item.date))];
  };

  // Generate all the stores data
  const generateStoresData = () => {
    return [...new Set(data.map((item) => item.store))];
  };

  return (
    <div className="App">
      <h>𝚂𝚗𝚎𝚊𝚔𝚎𝚛 𝙷𝚎𝚊𝚍</h>
      <FilterBar
        data={data}
        setFilteredData={setFilteredData}
        brands={generateBrandData()}
        models={generateModelData()}
        dates={generateDateData()}
        stores={generateStoresData()}
      />

      <div className="list-container">
        <List
          dataSource={filteredData}
          pagination={{pageSize: 3, responsive: true, position: "top"}}
          grid={{
            gutter: 30
          }}
          itemLayout="horizontal"
          renderItem={(item) => (
            <List.Item>
              <Card title={item.name} bordered={true}>
                <b>Brand</b>: {item.brand} <br></br>
                <b>Model</b>: {item.model} <br></br>
                <b>Launch Date</b>: {new Date(item.date).toLocaleDateString()}{" "}
                <br></br>
                <b>Store</b>: {item.store} <br></br>
                <img src={item.image_url} width="200" height="200" />
              </Card>
            </List.Item>
          )}
        />
      </div>

      {/* <div className="site-card-wrapper">
        <Row gutter={[30,16]}>
          {filteredData.length == 0 && data !== undefined ? (
            <h>NO RESULTs FOUND</h>
          ) : data === undefined ? (
            <h>LOADING...</h>
          ) : (
            filteredData.map((sneaker) => (
              <Col span={8}>
                <Card title={sneaker.name} bordered={true}>
                  Brand: {sneaker.brand} <br></br>
                  Model: {sneaker.model} <br></br>
                  Launch Date: {new Date(sneaker.date).toLocaleDateString()} <br></br>
                  Store: {sneaker.store} <br></br>
                  <img src={sneaker.image_url} width="100" height="100" />
                </Card>
              </Col>
            ))
          )}
        </Row>
      </div> */}
    </div>
  );
}

export default App;
