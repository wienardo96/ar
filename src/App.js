import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="arjs-loader">
        <div><img src="../assets/favicon.ico" alt="test" />Loading, please wait...</div>
      </div>
      <a-scene
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
        {/* <!-- a-nft is the anchor that defines an Image Tracking entity -->
      <!-- on 'url' use the path to the Image Descriptors created before. -->
      <!-- the path should end with the name without the extension e.g. if file is trex.fset' the path should end with trex --> */}
        <a-nft
          type="nft"
          url="../assets/testing"
          smooth="true"
          smoothCount="10"
          smoothTolerance=".01"
          smoothThreshold="5">
          {/* <!-- as a child of the a-nft entity, you can define the content to show. here's a GLTF model entity --> */}
          <a-entity
            gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
            scale="5 5 5"
            position="100 100 0"
          >
          </a-entity>
        </a-nft>
        {/* <!-- static camera that moves according to the device movemenents --> */}
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}

export default App;
