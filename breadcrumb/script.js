

const breadcrumbs = document.getElementById("breadcrumbs");
const breadcrumbList = document.getElementById("breadcrumb-list");
const button = document.getElementById("breadcrumb-button");

const bc = [
    { name: "Hvidevarer", link: "/hvidevarer" },
    { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
    { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

button.addEventListener("click", () => {
    breadcrumbList.innerHTML = "";
    bc.forEach((crumb, idx) => {
        const li = document.createElement("li");
        if (idx < bc.length - 1) {
            const a = document.createElement("a");
            a.href = crumb.link;
            a.textContent = crumb.name;
            li.appendChild(a);
        } else {
            li.textContent = crumb.name;
        }
        breadcrumbList.appendChild(li);
        if (idx < bc.length - 1) {
            const sep = document.createElement("li");
            sep.textContent = " / ";
            breadcrumbList.appendChild(sep);
        }
    });
});

