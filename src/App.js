import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center flex-1 w-screen h-screen bg-background-main ">
      <div
        // style={{ height: "95%", width: "85%" }}
        className="flex flex-col w-5/6 border-2 rounded-md bg-background-card md:flex-row h-5/6 md:h-3/6 md:w-3/6"
      >
        <div className="border-2 h-1/2 md:h-full md:w-1/2">
          <img
            className="object-fit"
            // src="image-product-desktop.jpg"
            alt="product-display"
          />
        </div>
        <div className="flex flex-col justify-between px-2 py-2 h-1/2 md:h-full md:w-1/2">
          <div>Category</div>
          <div>Title</div>
          <div>Description</div>
          <div>
            <div>Price</div>
            <div>old price</div>
          </div>
          <div>
            <button>Buy Button</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
