const locations = [
    { name: "New York City, New York", message: "Walking through Times Square and exploring Central Park! 🏙️", images: ["nyc1.jpg", "nyc2.jpg", "nyc3.jpg", "nyc4.jpg", "nyc5.jpg"], coords: [40.7128, -74.0060] },
    { name: "Cincinnati, Ohio", message: "Eating chili and enjoying the riverfront views! 🌉", images: ["cincinnati1.jpg", "cincinnati2.jpg", "cincinnati3.jpg", "cincinnati4.jpg", "cincinnati5.jpg"], coords: [39.1031, -84.5120] },
    { name: "Atlanta, Georgia", message: "Visiting the Georgia Aquarium and grabbing some Southern BBQ! 🍑", images: ["atlanta1.jpg", "atlanta2.jpg", "atlanta3.jpg", "atlanta4.jpg", "atlanta5.jpg"], coords: [33.7490, -84.3880] },
    { name: "Louisville, Kentucky", message: "Derby time! And exploring the bourbon trail 🏇🥃", images: ["louisville1.jpg", "louisville2.jpg", "louisville3.jpg", "louisville4.jpg", "louisville5.jpg"], coords: [38.2527, -85.7585] },
    { name: "New Orleans, Louisiana", message: "Jazz, beignets, and a stroll down Bourbon Street 🎷🍩", images: ["neworleans1.jpg", "neworleans2.jpg", "neworleans3.jpg", "neworleans4.jpg", "neworleans5.jpg"], coords: [29.9511, -90.0715] },
    { name: "Pigeon Forge, Tennessee", message: "Riding roller coasters at Dollywood! 🎢", images: ["pigeonforge1.jpg", "pigeonforge2.jpg", "pigeonforge3.jpg", "pigeonforge4.jpg", "pigeonforge5.jpg"], coords: [35.7884, -83.5543] },
    { name: "Panama City Beach, Florida", message: "Sun, sand, and beautiful sunsets 🌅", images: ["pcb1.jpg", "pcb2.jpg", "pcb3.jpg", "pcb4.jpg", "pcb5.jpg"], coords: [30.1766, -85.8055] }
];

const map = L.map('map').setView([37.0902, -95.7129], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

locations.forEach(location => {
    const marker = L.marker(location.coords).addTo(map);
    marker.bindPopup(`<b>${location.name}</b>`).on("click", () => {
        document.getElementById("location-text").textContent = location.message;
        const imageGallery = document.getElementById("image-gallery");
        imageGallery.innerHTML = ""; // Clear previous images

        location.images.forEach(img => {
            let imgElement = document.createElement("img");
            imgElement.src = `images/${location.name.toLowerCase().replace(/[^a-z]/g, '')}/${img}`;
            imgElement.alt = location.name;
            imageGallery.appendChild(imgElement);
        });
    });
});
