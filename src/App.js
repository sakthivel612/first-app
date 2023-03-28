import {Badge, Card} from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { useState } from "react";

function App() {
  const data = [
    {
    productImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEH5nXdwB38Ke_KDVb1oOY1Cz84Xk2HIUee9m-ENRgMEC9neIwV8oxokUrMx16wzTxTiSg6_sVDI&usqp=CAU&ec=48665699",
    productName : "Iphone 14pro max",
    price : "150000 Rs",
    rating : "⭐⭐⭐⭐⭐",
  },
  {
    productImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSlJBouZAZgUalXUWyMEbWLOhmDvFg6X-jsfKNe4bSw&usqp=CAU&ec=48665699",
    productName : "Oneplus 11R 5G",
    price : "80000 Rs",
    rating : "⭐⭐⭐⭐",
  },
  {
    productImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb1mi4LPnfLSOj9NYDlSrNaPIaM7TkC6KZG-DtgVf8rA&usqp=CAU&ec=48665699",
    productName : "Pixel 7pro",
    price : "70000 Rs",
    rating : "⭐⭐⭐⭐",
  },
  {
    productImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGsWjKmTrLwPPMQzY2jN0vlK8WaPLXX5LmXJ2zOoF8Q&usqp=CAU&ec=48665699",
    productName : "Samsung",
    price : "120000 Rs",
    rating : "⭐⭐⭐⭐⭐",
  },
  {
    productImage : "https://images.livemint.com/img/2023/01/05/1600x900/redmi_noye_12_5g_1672916298458_1672916306277_1672916306277.png",
    productName : "Redmi Note 12",
    price : "25000 Rs",
    rating : "⭐⭐⭐⭐",
  },
  {
    productImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-6DNz3A6o0Kha6TtAemLhQHVUdk4VR4XZ0mAtRS4SQ&usqp=CAU&ec=48665699",
    productName : "Vivo X90 pro",
    price : "32000 Rs",
    rating : "⭐⭐⭐⭐",
  },
  {
    productImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5bC1miaW1pdALmGqYQWSUNY5R6I3rj7wxllhsdOyQRPdPYMuYhHO0t0RJc2WlglFgr7I6DujlN-M&usqp=CAU&ec=48665699",
    productName : "Realme T3",
    price : "30000 Rs",
    rating : "⭐⭐⭐⭐",
  },
  {
    productImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCza8YO-L7Pyv_f3ZpXZWNjOiN0ng3m7lHl_D1y4fEDg&usqp=CAU&ec=48665699",
    productName : "OPPO A17",
    price : "20000 Rs",
    rating : "⭐⭐⭐⭐",
  },
];

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="cart-value">
        <Badge bg="primary">
          CART {count}
        </Badge>
      </div>

      <div className="card-container">
        {data.map((prod, idx)=> <Cards
          idx = {idx}
          prod = {prod}
          setCount = {setCount}
          count = {count}
        />)}
      </div>
    </div>
  );
}

export default App;

function Cards ({prod, idx, setCount, count}){
    const [show, setShow] = useState(false);

    function addToCart(){
      setShow(!show)
      setCount(count + 1)
    }

    function removeTocart(){
      setShow(!show)
      setCount(count - 1)
    }

    return (
      <Card key = {idx} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.productImage} />
      <Card.Body>
        <Card.Title>{prod.productName}</Card.Title>
        <Card.Text>{prod.price}</Card.Text>
        <Card.Text>{prod.rating}</Card.Text>

        {/* events handling */}
        {!show ?<Button variant="primary"
        onClick={()=>addToCart()}
        >Add To Cart</Button>: ""}{" "}

        {/* conditional rendering */}
          {show ? <Button variant="danger" 
          onClick={()=>removeTocart()}
          >Remove To Cart</Button> : ""}

      </Card.Body>
    </Card>
    )
}