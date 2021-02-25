import "./App.css";

function AppMarker() {
    return (
        <div className="App">
            <div className="arjs-loader">
                <div><img src="../assets/favicon.ico" alt="test" />Loading, please wait...</div>
            </div>
            <a-scene embedded arjs='sourceType: webcam;'>
                {/* <!-- we use cors proxy to avoid cross-origin problems --> */}
                {/* <a-nft
                    type="nft"
                    url="../assets/testing"
                    smooth="true"
                    smoothCount="10"
                    smoothTolerance=".01"
                    smoothThreshold="5"
                >
                    <a-entity
                        gltf-model="../assets/PikachuThick_tail.gltf"
                    // scale="5 5 5"
                    // position="50 150 0"
                    ></a-entity>
                </a-nft> */}
                <a-marker-camera type='pattern' url='../assets/pattern-marker.patt'>
                    <a-assets>
                        <a-asset-item id="pika" src="../assets/PikachuThick_tail.gltf"></a-asset-item>
                    </a-assets>
                    <a-entity gltf-model="##pika"></a-entity>

                </a-marker-camera>
                <a-entity camera></a-entity>
            </a-scene>
        </div>
    );
}

export default AppMarker;
