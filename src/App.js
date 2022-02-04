import "./App.css";
import 'aframe';
import 'aframe-gif-shader';

function App() {
  return (
    <div className="App">
      {/* <div className="arjs-loader">
        <div><img src="../assets/favicon.ico" alt="test" />Loading, please wait...</div>
      </div> */}
      <a-scene
        vr-mode-ui="enabled: false;"
        loading-screen="enabled: false;"
        arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
        id="scene"
        embedded
        gesture-detector
      >
        <a-marker
          id="animated-marker"
          type="pattern"
          preset="custom"
          url="assets/marker.patt"
          raycaster="objects: .clickable"
          emitevents="true"
          cursor="fuse: false; rayOrigin: mouse;"
          id="markerA"
        >
          <a-image
            src="assets/asset.gif"
            scale="1 1 1"
            class="clickable"
            rotation="-90 0 0"
            gesture-handler
          ></a-image>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </div >
  );
}

export default App;
