let coll = document.querySelector(".details-list");
let show = document.querySelector("#show");
let i;

for (i = 0; i < coll.length; i++) {
    show.addEventListener("click", function() {

        if (this.innerText === 'Show More') {
            coll[7].style.display = "block";
            coll[8].style.display = "block";
            coll[9].style.display = "block";
            coll[10].style.display = "block";
            this.innerHTML = 'Show Less<i class="fas fa-chevron-up"></i>';
        }
        if (this.innerText === 'Show Less') {
            coll[7].style.display = "none";
            coll[8].style.display = "none";
            coll[9].style.display = "none";
            coll[10].style.display = "none";
            this.innerHTML = 'Show More<i class="fas fa-chevron-down"></i>';
        }

    });
}