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
                <a-marker preset='hiro'>
                    {/* <!--Adding a glTF 2.0 model to your scene--> */}
                    <a-entity
                        // gltf-model-next="src: url(../assets/PikachuThick_tail.gltf);"
                        gltf-model="url(../assets/PikachuThick_tail.gltf)"
                    >
                    </a-entity>

                </a-marker>
                <a-entity camera></a-entity>
            </a-scene>
        </div>
    );
}

export default AppMarker;
