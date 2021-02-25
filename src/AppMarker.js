import "./App.css";

function AppMarker() {
    return (
        <div className="App">
            <div className="arjs-loader">
                <div><img src="../assets/favicon.ico" alt="test" />Loading, please wait...</div>
            </div>
            <a-scene embedded arjs>
                <a-marker-camera type='pattern' url='../assets/pattern-marker.patt'>
                    <a-entity gltf-model="url(../assets/PikachuThick_tail.gltf)"></a-entity>
                </a-marker-camera>
                <a-entity camera></a-entity>
            </a-scene>
        </div>
    );
}

export default AppMarker;
