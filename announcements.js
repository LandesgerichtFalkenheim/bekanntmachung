document.addEventListener("DOMContentLoaded", () => {
    loadAnnouncements();
});

function loadAnnouncements() {
    fetch("data/announcements.json")
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById("announcement-list");
            if (!list) return;

            list.innerHTML = "";

            data.forEach(a => {
                const div = document.createElement("div");
                div.className = `item ${a.category}`;
                div.innerHTML = `<h2>${a.title}</h2><p>${a.text}</p>`;
                list.appendChild(div);
            });
        });
}
