import "./App.css";

function AppMarker() {
    return (
        <div className="App">
            <div className="arjs-loader">
                <div><img src="../assets/favicon.ico" alt="test" />Loading, please wait...</div>
            </div>
            <a-scene embedded arjs='sourceType: webcam;'>
                {/* <!-- create your content here. just a box for now --> */}
                <a-box position='0 0.5 0' material='opacity: 0.5;'></a-box>
                <a-assets>
                    <a-asset-item id="tree" src="../assets/PikachuThick_tail.gltf"></a-asset-item>
                </a-assets>
                <a-entity gltf-model="url(../assets/PikachuThick_tail.gltf)"></a-entity>
                {/* <!-- define a camera which will move according to the marker position --> */}
                <a-marker-camera preset='hiro'></a-marker-camera>
            </a-scene>
        </div>
    );
}

export default AppMarker;
