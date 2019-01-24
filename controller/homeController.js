

exports.generateHome = function (req, res) {
    res.render("client/home.ejs");
};

exports.DVDpage = function (req, res) {
    res.render("client/DVD.ejs");
};

exports.CDpage = function (req, res) {
    res.render("client/CD.ejs");
};

exports.Bookpage = function (req, res) {
    res.render("client/book.ejs");
};

exports.Magazinepage = function (req, res) {
    res.render("client/magazine.ejs");
};