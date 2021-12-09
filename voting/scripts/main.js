var scene, renderer, camera, controls;
var bag_geo, bag;
var container = document.getElementById("canvas-container");

var init = () => {

    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
    camera.position.z = 7;

    controls = new THREE.OrbitControls(camera, container);

    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.shadowMap.enabled = true;
    renderer.setSize(800, 600);

    container.append(renderer.domElement);
    container.appendChild(document.getElementById("download-button"));

    bag_geo = new THREE.BoxGeometry(5, 5, 2);

    var bag_face = [
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("./media/right_face.png"), side: THREE.DoubleSide, transparent: true, color: 0xffffff}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("./media/left_face.png"), side: THREE.DoubleSide, transparent: true, color: 0xffffff}),
        new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true, opacity: 0}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("./media/bottom_face.png"), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("./media/front_face.png"), side: THREE.DoubleSide, transparent: true, color: 0xffffff}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("./media/back_face.png"), side: THREE.DoubleSide, transparent: true, color: 0xffffff})
    ];

    var bag_face_material = new THREE.MeshFaceMaterial(bag_face);
    bag = new THREE.Mesh(bag_geo, bag_face_material);
    scene.add(bag);

    console.log(bag);
}

var render = () => {

    renderer.render(scene, camera);

    bag.rotation.y += 0.005;
}

var animate = () => {

    requestAnimationFrame(animate);

    render();
}

init();
animate();

$(document).ready(function() {

    $("#view-submissions").click(function() {

        $("#submissions-container").stop().animate({bottom: "0px"}, 1000); 
    });

    $("#close-submissions-button").click(function() {

        $("#submissions-container").stop().animate({bottom: "-1000px"}, 1000); 
    });
});