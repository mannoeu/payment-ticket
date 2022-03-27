import multer from "multer";

const parseDate = (_date) =>
  String(new Date(_date).toLocaleDateString("pt-BR")).replace(/[/]/g, "-");

const parseCnpj = (_str) => _str.replace(/[^\w\s]/gi, "");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    let extension = file.originalname.substring(
      file.originalname.lastIndexOf("."),
      file.originalname.length
    );

    let uploaded_file_name =
      parseDate(req.body.competence) +
      "__" +
      parseCnpj(req.body.cnpj) +
      extension;

    cb(null, uploaded_file_name);
  },
});

const upload = multer({ storage: storage });

export { upload };
