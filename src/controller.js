export default {
  index: (req, res, next) => {
    return res.send("Hello World!");
  },
  create: (req, res, next) => {
    const new_payment_ticket = {
      ...req.body,
      nfe: req.file,
    };

    console.log(new_payment_ticket);

    return res.status(200).send({ data: new_payment_ticket });
  },
};
