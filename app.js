const express = require("express");
const path = require("path");
const emailjs = require('@emailjs/nodejs');
require("dotenv").config();

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

// App configuration
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.get("/", (req, res) => {
    res.render("index");
})

app.get("/success", (req, res) => {
    res.render("success");
})

app.get("/error", (req, res) => {
    res.render("error");
})

app.post("/contact", (req, res) => {
    const { name, email, phone, company, message, emailTo } = req.body;
    var option = "";
    var tipoConsulta = "";

    if (emailTo === 'sales') {
        // TODO CHANGE TO REAL EMAIL'S
        option = 'sales@ssnegroup.com';
        tipoConsulta = "Quotation";
    } else if (emailTo === 'services') {
        option = 'customer.service@ssnegroup.com';
        tipoConsulta = "Services";
    } else if (emailTo === 'accounting') {
        option = 'accounting@ssnegroup.com';
        tipoConsulta = "Accounting";
    }

    var templateParams = {
        name: name,
        email: email,
        phone: phone,
        company: company,
        message: message,
        typeQ: tipoConsulta,
        emailTo: option
    };

    emailjs
        .send(
            process.env.EMAILJS_SERVICE_ID,
            process.env.EMAILJS_TEMPLATE_ID, templateParams, 
        {
            publicKey: process.env.EMAILJS_PUBLIC_KEY,
            privateKey: process.env.EMAILJS_PRIVATE_KEY, // Optional but recommended
        })
        .then(
            function (response) {
                console.log('SUCCESS!', response.status, response.text);
                res.redirect("/success");
            },
            function (err) {
                console.log('FAILED...', err);
                res.redirect("/error");
            },
        );
})

app.use((req, res) => {
    res.render("404");
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

module.exports = app;