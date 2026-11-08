
// ================================
// 1. MOBILE NAVIGATION MENU
// ================================

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Menutup menu setelah salah satu navigasi diklik
navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});


// ================================
// 2. SCROLL REVEAL ANIMATION
// ================================

// Elemen akan muncul secara perlahan
// ketika masuk ke area layar.

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");

                // Menghentikan pengamatan setelah muncul
                revealObserver.unobserve(entry.target);
            }

        });
    },
    {
        threshold: 0.12
    }
);

// Mengambil semua elemen dengan class reveal
document.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
});


// ================================
// 3. AUTOMATIC FOOTER YEAR
// ================================

// Tahun footer akan berubah otomatis
// mengikuti tahun saat website dibuka.

document.getElementById("year").textContent =
    new Date().getFullYear();
