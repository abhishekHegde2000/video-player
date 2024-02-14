import "./App.css";
import ProductList from "./components/ProductList";
import Player from "./components/test-player/Player";

function App() {
  return (
    <div className="">
      {/* <ProductList /> */}
      <Player
        src={
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }
        autoplay={true}
        muted={true}
      />
    </div>
  );
}

export default App;
