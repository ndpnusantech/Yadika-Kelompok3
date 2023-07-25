const { Kamar } = require("../helper/relation.js");
const multer = require("multer");
const path = require("path");

exports.GetAllKamar = async (req, res) => {
  try {
    const response = await Kamar.findAll();
    res.status(200).json({ msg: "Success Get All Kamar", response });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.GetKamarById = async (req, res) => {
  try {
    const response = await Kamar.findOne({ where: { id: req.params.id } });
    res.status(200).json({ msg: "Success", response });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Atur folder tujuan penyimpanan gambar.
    // Sesuaikan jalur folder sesuai kebutuhan.
    cb(null, "public/kamar");
  },
  filename: function (req, file, cb) {
    // Tetapkan nama file agar unik untuk menghindari penimpaan file.
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename =
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname);
    // Dapatkan URL gambar dengan menggabungkan URL lengkap dengan nama file
    const imageURL = `${req.protocol}://${req.get("host")}/kamar/${filename}`;
    // Simpan URL gambar di req object agar bisa diakses di CreateKamar function
    req.imageURL = imageURL;
    cb(null, filename);
  },
});

// Fungsi untuk menyaring file agar hanya gambar yang diperbolehkan
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Hanya gambar yang diizinkan."));
  }
};

// Inisialisasi middleware Multer
const upload = multer({ storage: storage, fileFilter: fileFilter });

// Contoh fungsi untuk menangani endpoint CreateKamar
exports.CreateKamar = async (req, res) => {
  const {
    type_kamar,
    fasilitas_kamar,
    id_kasurKamar,
    deskripsi_kamar,
    status_kamar,
  } = req.body;

  try {
    // Upload gambar menggunakan middleware multer
    upload.fields([
      { name: "image_kamar", maxCount: 1 },
      { name: "url_image", maxCount: 1 },
    ])(req, res, async function (err) {
      if (err) {
        // Tangani error dari Multer
        return res.status(400).json({ msg: err.message });
      }

      // Dapatkan URL gambar dari req object, yang telah disimpan oleh multer diskStorage
      const image_kamarURL =
        req.files && req.files.image_kamar ? req.imageURL : null;
      // URL untuk url_image juga akan dihasilkan oleh multer dan disimpan dalam req.imageURL
      const url_imageURL =
        req.files && req.files.url_image ? req.imageURL : null;

      // Contoh penggunaan model Kamar untuk operasi database
      const response = await Kamar.create({
        type_kamar,
        fasilitas_kamar,
        id_kasurKamar,
        deskripsi_kamar,
        status_kamar,
        image_kamar: image_kamarURL,
        url_image: url_imageURL,
      });

      res.status(201).json({ msg: "Kamar berhasil dibuat", response });
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.UpdateKamar = async (req, res) => {
  try {
    const response = await Kamar.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Kamar Updated", response });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ msg: error.message });
  }
};

exports.DeleteKamar = async (req, res) => {
  try {
    await Kamar.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Kamar Deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ msg: error.message });
  }
};

// exports.storage = multer.diskStorage({
//   destination: (req, file, cb) =>{
//     cb(null, 'public/kasur')
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname)
//   }
// })

// const upload = multer({storage : storage})
