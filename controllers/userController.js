const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs")
const db = require("../database/models");

const userController = {
	register: (req, res) => {
		db.ManagementUser.findAll()
			.then((management) => {
				res.render("users/formRegister", { management })
			}).catch((err) => {
				console.log(err);
			})
	},
	processRegister: (req, res) => {
		const resultValidation = validationResult(req)
		if (resultValidation.errors.length > 0) {
			db.ManagementUser.findAll()
				.then((management) => {
					res.render("users/formRegister", {
						errors: resultValidation.mapped(),
						oldData: req.body,
						management
					})
				}).catch(err => {
					console.log(err)
				});
		} else {

			let userSearch = db.User.findOne({ where: { email: req.body.email } });
			let managementUser = db.ManagementUser.findAll();
			Promise
				.all([userSearch, managementUser])
				.then(([userInDB, management]) => {
					if (userInDB) {
						return res.render("users/formRegister", {
							errors: {
								email: {
									msg: 'Este email ya está registrado'
								}
							},
							oldData: req.body,
							management
						})
					} else if (req.body.avatar_def) {
						console.log(req.body);
						db.User.create({
							first_name: req.body.first_name,
							last_name: req.body.last_name,
							legajo: req.body.legajo,
							management_id: req.body.managements,
							email: req.body.email,
							avatar: 'default.png',
							password: bcryptjs.hashSync(req.body.password, 10),
							category_id: 1
						}).then(() => {
							return res.redirect("/users/login")
						})
					} else {
						db.User.create({
							first_name: req.body.first_name,
							last_name: req.body.last_name,
							legajo: req.body.legajo,
							management_id: req.body.managements,
							email: req.body.email,
							avatar: req.file.filename,
							password: bcryptjs.hashSync(req.body.password, 10),
							category_id: 1
						}).then(() => {
							return res.redirect("/users/login")
						})
					}
				}).catch(err => { console.log(err) })
		}
	},

	login: (req, res) => {
		res.render("users/formLogin")
	},

	loginProcess: (req, res) => {

		db.User.findOne({ where: { email: req.body.email } })
			.then((userToLogin) => {
				if (userToLogin) {
					let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
					if (isOkThePassword) {
						delete userToLogin.password;
						req.session.userLogged = userToLogin;
						if (req.body.remember_user) {
							res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
							return res.redirect('/users/profile');
						}
					}
					return res.render("users/formLogin", {
						errors: {
							email: {
								msg: 'Las credenciales son inválidas'
							}
						}
					});
				}

				return res.render("users/formLogin", {
					errors: {
						email: {
							msg: 'No se encuentra este email en nuestra base de datos'
						}
					}
				});
			}).catch(err => { console.log(err) });
	},

	profile: (req, res) => {
		res.render("users/userProfile", { user: req.session.userLogged })
	},

	logout: (req, res) => {
		res.clearCookie("userEmail")
		req.session.destroy()
		return res.redirect("/")
	}

}

module.exports = userController