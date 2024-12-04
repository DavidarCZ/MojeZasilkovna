const images = [
    { src: "images/timeline-2023_cz.webp", alt: "Fotografie 1" },
    { src: "images/timeline-2022.webp", alt: "Fotografie 2" },
    { src: "images/timeline-2021.webp", alt: "Fotografie 3" },
    { src: "images/2020.webp", alt: "Fotografie 4" },
    { src: "images/2019.webp", alt: "Fotografie 5" },
    { src: "images/2018.webp", alt: "Fotografie 6" },
    { src: "images/2017.webp", alt: "Fotografie 7" },
    { src: "images/2016.webp", alt: "Fotografie 8" },
    { src: "images/2015.webp", alt: "Fotografie 9" },
    { src: "images/2014.webp", alt: "Fotografie 10" },
    { src: "images/2013.webp", alt: "Fotografie 11" },
    { src: "images/2012.webp", alt: "Fotografie 12" },
    { src: "images/2011.webp", alt: "Fotografie 13" },
    { src: "images/2010.webp", alt: "Fotografie 14" }
];

function loadGallery() {
    const galleryContainer = document.getElementById("gallery-container");

    images.forEach(image => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-md-4", "mb-4");

        const linkElement = document.createElement("a");
        linkElement.href = image.src;
        linkElement.setAttribute("data-lightbox", "gallery");

        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.classList.add("img-fluid", "rounded");
        imgElement.alt = image.alt;

        linkElement.appendChild(imgElement);
        colDiv.appendChild(linkElement);
        galleryContainer.appendChild(colDiv);
    });

    var lightbox = new SimpleLightbox('[data-lightbox="gallery"]');
}

window.onload = loadGallery;