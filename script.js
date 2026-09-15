/* =====================================================
   DATABASE GEJALA
===================================================== */

const gejala = [

    {
        kode: "G01",
        nama: "Motor sulit dihidupkan"
    },

    {
        kode: "G02",
        nama: "Starter elektrik tidak bekerja"
    },

    {
        kode: "G03",
        nama: "Lampu indikator atau lampu motor redup"
    },

    {
        kode: "G04",
        nama: "Klakson terdengar lemah"
    },

    {
        kode: "G05",
        nama: "Motor terasa bergetar saat langsam"
    },

    {
        kode: "G06",
        nama: "Putaran mesin tidak stabil"
    },

    {
        kode: "G07",
        nama: "Motor tersendat saat berakselerasi"
    },

    {
        kode: "G08",
        nama: "Akselerasi terasa berat"
    },

    {
        kode: "G09",
        nama: "Suara tidak normal dari area CVT"
    },

    {
        kode: "G10",
        nama: "Motor bergetar saat mulai berjalan"
    },

    {
        kode: "G11",
        nama: "Kecepatan motor sulit bertambah"
    },

    {
        kode: "G12",
        nama: "Mesin cepat panas"
    },

    {
        kode: "G13",
        nama: "Kipas radiator sering bekerja"
    },

    {
        kode: "G14",
        nama: "Lampu indikator mesin menyala"
    },

    {
        kode: "G15",
        nama: "Konsumsi bahan bakar terasa lebih boros"
    },

    {
        kode: "G16",
        nama: "Rem terasa kurang pakem"
    },

    {
        kode: "G17",
        nama: "Terdengar bunyi saat mengerem"
    },

    {
        kode: "G18",
        nama: "Ban terasa kurang stabil saat dikendarai"
    }

];


/* =====================================================
   DATABASE KERUSAKAN
===================================================== */

const kerusakan = [

    {
        kode: "K01",

        nama: "Aki lemah atau bermasalah",

        penyebab:
            "Aki yang lemah dapat menyebabkan sistem kelistrikan "
            + "motor tidak bekerja secara optimal.",

        solusi:
            "Periksa kondisi aki dan sistem pengisian. "
            + "Jika diperlukan, lakukan pemeriksaan lebih lanjut "
            + "di bengkel."
    },


    {
        kode: "K02",

        nama: "Sistem bahan bakar atau pembakaran bermasalah",

        penyebab:
            "Gangguan pada sistem bahan bakar atau pembakaran "
            + "dapat menyebabkan mesin sulit hidup dan performanya "
            + "menurun.",

        solusi:
            "Periksa sistem bahan bakar, busi, dan komponen "
            + "pendukung pembakaran."
    },


    {
        kode: "K03",

        nama: "Sistem CVT mengalami gangguan",

        penyebab:
            "Komponen CVT yang mengalami keausan atau masalah "
            + "dapat menyebabkan getaran, suara tidak normal, "
            + "dan akselerasi yang kurang optimal.",

        solusi:
            "Lakukan pemeriksaan dan perawatan CVT secara berkala "
            + "di bengkel."
    },


    {
        kode: "K04",

        nama: "Sistem pendinginan bermasalah",

        penyebab:
            "Gangguan sistem pendinginan dapat menyebabkan "
            + "temperatur mesin meningkat.",

        solusi:
            "Periksa sistem pendinginan dan lakukan pemeriksaan "
            + "lebih lanjut apabila mesin mengalami panas berlebih."
    },


    {
        kode: "K05",

        nama: "Sistem injeksi atau sensor mengalami gangguan",

        penyebab:
            "Gangguan pada sistem injeksi atau sensor dapat "
            + "memengaruhi kinerja mesin.",

        solusi:
            "Jika indikator mesin menyala, lakukan pemeriksaan "
            + "menggunakan peralatan diagnosis yang sesuai."
    },


    {
        kode: "K06",

        nama: "Sistem pengereman perlu diperiksa",

        penyebab:
            "Gejala pada sistem pengereman dapat berkaitan "
            + "dengan kondisi komponen rem yang perlu diperiksa.",

        solusi:
            "Periksa sistem pengereman dan segera lakukan "
            + "pemeriksaan apabila performa pengereman menurun."
    },


    {
        kode: "K07",

        nama: "Sistem ban atau kaki-kaki perlu diperiksa",

        penyebab:
            "Ketidakstabilan kendaraan dapat berkaitan dengan "
            + "kondisi ban atau komponen kaki-kaki.",

        solusi:
            "Periksa kondisi ban, tekanan ban, dan komponen "
            + "kaki-kaki kendaraan."
    }

];


/* =====================================================
   RULE BASE
===================================================== */

const rules = [

    {
        kode: "R01",

        gejala: [
            "G01",
            "G02",
            "G03",
            "G04"
        ],

        kerusakan: "K01"
    },


    {
        kode: "R02",

        gejala: [
            "G01",
            "G05",
            "G06",
            "G07"
        ],

        kerusakan: "K02"
    },


    {
        kode: "R03",

        gejala: [
            "G07",
            "G08",
            "G09",
            "G10",
            "G11"
        ],

        kerusakan: "K03"
    },


    {
        kode: "R04",

        gejala: [
            "G12",
            "G13"
        ],

        kerusakan: "K04"
    },


    {
        kode: "R05",

        gejala: [
            "G06",
            "G07",
            "G14",
            "G15"
        ],

        kerusakan: "K05"
    },


    {
        kode: "R06",

        gejala: [
            "G16",
            "G17"
        ],

        kerusakan: "K06"
    },


    {
        kode: "R07",

        gejala: [
            "G18"
        ],

        kerusakan: "K07"
    }

];


/* =====================================================
   MENAMPILKAN GEJALA
===================================================== */

const gejalaContainer =
    document.getElementById("gejalaContainer");


function tampilkanGejala() {

    gejalaContainer.innerHTML = "";

    gejala.forEach(item => {

        const card =
            document.createElement("label");

        card.className = "gejala-card";

        card.innerHTML = `

            <input
                type="checkbox"
                value="${item.kode}"
            >

            <div>

                <div class="gejala-code">
                    ${item.kode}
                </div>

                <div class="gejala-name">
                    ${item.nama}
                </div>

            </div>

        `;

        gejalaContainer.appendChild(card);

    });

}


tampilkanGejala();


/* =====================================================
   EVENT CHECKBOX
===================================================== */

gejalaContainer.addEventListener(
    "change",
    function(event) {

        if (
            event.target.tagName !==
            "INPUT"
        ) {
            return;
        }

        const card =
            event.target.closest(".gejala-card");

        if (event.target.checked) {

            card.classList.add("selected");

        } else {

            card.classList.remove("selected");

        }

        updateProgress();

    }
);


/* =====================================================
   UPDATE PROGRESS
===================================================== */

function updateProgress() {

    const checkbox =
        document.querySelectorAll(
            '#gejalaContainer input[type="checkbox"]'
        );

    const selected =
        document.querySelectorAll(
            '#gejalaContainer input[type="checkbox"]:checked'
        );

    const jumlah =
        selected.length;

    const persen =
        (jumlah / checkbox.length) * 100;

    document.getElementById(
        "jumlahGejala"
    ).textContent = jumlah;

    document.getElementById(
        "progress"
    ).style.width = `${persen}%`;

}


/* =====================================================
   MENGAMBIL GEJALA YANG DIPILIH
===================================================== */

function getSelectedSymptoms() {

    const selected =
        document.querySelectorAll(
            '#gejalaContainer input[type="checkbox"]:checked'
        );

    return Array.from(selected)
        .map(input => input.value);

}


/* =====================================================
   FORWARD CHAINING
===================================================== */

function forwardChaining(fakta) {

    const hasil = [];

    /*
        fakta berisi kode gejala yang dipilih user.

        Contoh:

        [
            "G01",
            "G02",
            "G03"
        ]
    */


    rules.forEach(rule => {

        /*
            Menghitung berapa gejala
            dari rule yang ditemukan
            pada fakta.
        */

        const cocok =
            rule.gejala.filter(
                kode => fakta.includes(kode)
            );


        /*
            Persentase kecocokan:

            jumlah gejala cocok
            ------------------- × 100
            jumlah gejala rule
        */

        const persentase =
            Math.round(
                (cocok.length /
                rule.gejala.length) * 100
            );


        /*
            Rule dianggap aktif jika
            minimal terdapat gejala
            yang cocok.

            Semakin banyak gejala yang
            cocok maka semakin tinggi
            nilai diagnosis.
        */

        if (cocok.length > 0) {

            hasil.push({

                rule: rule,

                cocok: cocok,

                persentase: persentase

            });

        }

    });


    /*
        Urutkan diagnosis berdasarkan
        persentase kecocokan terbesar.
    */

    hasil.sort(
        (a, b) =>
            b.persentase -
            a.persentase
    );


    return hasil;

}


/* =====================================================
   DIAGNOSA
===================================================== */

document.getElementById(
    "btnDiagnosa"
).addEventListener(
    "click",
    function() {

        const fakta =
            getSelectedSymptoms();


        if (fakta.length === 0) {

            alert(
                "Silakan pilih minimal satu gejala."
            );

            return;

        }


        const hasil =
            forwardChaining(fakta);


        tampilkanHasil(
            hasil,
            fakta
        );

    }
);


/* =====================================================
   MENAMPILKAN HASIL
===================================================== */

function tampilkanHasil(
    hasil,
    fakta
) {

    const section =
        document.getElementById(
            "hasilSection"
        );

    const container =
        document.getElementById(
            "hasilContainer"
        );


    section.classList.remove(
        "hidden"
    );


    if (hasil.length === 0) {

        container.innerHTML = `

            <div class="hasil-card">

                <h3>
                    Diagnosis belum ditemukan
                </h3>

                <p>
                    Gejala yang dipilih belum memiliki
                    aturan diagnosis yang sesuai.
                    Silakan konsultasikan kondisi motor
                    kepada teknisi.
                </p>

            </div>

        `;

        section.scrollIntoView({
            behavior: "smooth"
        });

        return;

    }


    /*
        Ambil diagnosis terbaik.
    */

    const terbaik =
        hasil[0];


    const dataKerusakan =
        kerusakan.find(
            item =>
                item.kode ===
                terbaik.rule.kerusakan
        );


    /*
        Membuat daftar gejala
        yang cocok.
    */

    const daftarGejala =
        terbaik.cocok
            .map(kode => {

                const item =
                    gejala.find(
                        g => g.kode === kode
                    );

                return `
                    <span>
                        ${kode} - ${item.nama}
                    </span>
                `;

            })
            .join("");


    container.innerHTML = `

        <div class="hasil-card">

            <div class="result-header">

                <div class="result-title">

                    <p>
                        Diagnosis utama
                    </p>

                    <h3>
                        ${dataKerusakan.nama}
                    </h3>

                    <p>
                        Rule:
                        ${terbaik.rule.kode}
                    </p>

                </div>


                <div class="score">

                    <strong>
                        ${terbaik.persentase}%
                    </strong>

                    kecocokan

                </div>

            </div>


            <div class="result-box">

                <h4>
                    🔎 Gejala yang cocok
                </h4>

                <div class="matched">

                    ${daftarGejala}

                </div>

            </div>


            <div class="result-box">

                <h4>
                    🧠 Analisis
                </h4>

                <p>
                    Berdasarkan metode Forward Chaining,
                    sistem menemukan kecocokan gejala
                    dengan ${terbaik.rule.kode}.
                    Diagnosis yang memiliki tingkat
                    kecocokan tertinggi ditampilkan
                    sebagai diagnosis utama.
                </p>

            </div>


            <div class="result-box">

                <h4>
                    ⚠️ Kemungkinan Penyebab
                </h4>

                <p>
                    ${dataKerusakan.penyebab}
                </p>

            </div>


            <div class="result-box">

                <h4>
                    🔧 Saran Pemeriksaan
                </h4>

                <p>
                    ${dataKerusakan.solusi}
                </p>

            </div>


            ${
                hasil.length > 1
                ?
                `
                <div class="result-box">

                    <h4>
                        📊 Kemungkinan Lain
                    </h4>

                    <p>
                        Sistem menemukan
                        ${hasil.length}
                        kemungkinan berdasarkan
                        gejala yang dipilih.
                    </p>

                </div>
                `
                :
                ""
            }

        </div>

    `;


    section.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   RESET
===================================================== */

document.getElementById(
    "btnReset"
).addEventListener(
    "click",
    function() {

        const checkbox =
            document.querySelectorAll(
                '#gejalaContainer input[type="checkbox"]'
            );


        checkbox.forEach(
            input => {

                input.checked = false;

                input
                    .closest(".gejala-card")
                    .classList
                    .remove("selected");

            }
        );


        updateProgress();


        document.getElementById(
            "hasilSection"
        ).classList.add(
            "hidden"
        );


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);
