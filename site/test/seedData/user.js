'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

module.exports.user = {
	name: 'User',
	data: [{
		_id: ObjectId("b00000000000000000000001"),
		firstName: 'Costanza',
		lastName: 'Volpini',
		password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
		email: 'c.v@usi.ch',
		level: 0,
		active: true
	}, {
		_id: ObjectId("b00000000000000000000000"),
		firstName: 'Marco',
		lastName: 'Tollini',
		password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
		email: 'm.t@usi.ch',
		level: 0,
		active: true
	}, {
		_id: ObjectId("b00000000000000000000002"),
		firstName: 'Daniele',
		lastName: 'Lo Preiato',
		password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
		email: 'd.l@usi.ch',
		level: 0,
		active: true
	}, {
		_id: ObjectId("b00000000000000000000003"),
		firstName: 'Lorenzo',
		lastName: 'Ferri',
		password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
		email: 'l.f@usi.ch',
		level: 0,
		active: true
	}, {
		_id: ObjectId("b00000000000000000000004"),
		firstName: 'Riccardo',
		lastName: 'Gabriele',
		password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
		email: 'r.g@usi.ch',
		level: 0,
		active: true
	}, {
		_id: ObjectId("b00000000000000000000005"),
		firstName: 'Zeno',
		lastName: 'Trevisan',
		password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
		email: 'z.t@usi.ch',
		level: 0,
		active: true
	}, {
		_id: ObjectId("b00000000000000000000006"),
		firstName: 'Vanessa',
		lastName: 'Braglia',
		password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
		email: 'v.b@usi.ch',
		level: 0,
		active: true
	}, {
		_id: ObjectId("b00000000000000000000007"),
		firstName: 'Nevio',
		lastName: 'Valsangiacomo',
		password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
		email: 'n.v@usi.ch',
		level: 1,
		active: true,
		favorites: [
			ObjectId('f00000000000000000000046'),
			ObjectId('f00000000000000000000003'),
			ObjectId('f00000000000000000000029'),
		]
	}, {
		_id: ObjectId("b00000000000000000000008"),
		firstName: 'Francesca',
		lastName: 'Rossi',
		password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
		email: 'f.r@usi.ch',
		level: 1,
		active: false
	}, {
		_id: ObjectId("b00000000000000000000009"),
		firstName: 'Marco',
		lastName: 'Bersagli',
		password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
		email: 'm.b@usi.ch',
		level: 1,
		active: true
	}, {
		_id: ObjectId("b00000000000000000000010"),
		firstName: 'Simon',
		lastName: 'Reding',
		freeLancerId: ObjectId("f00000000000000000000009"),
		password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
		email: 's.r@usi.ch',
		level: 1,
		active: true
	}, {
		_id: ObjectId("b00000000000000000000011"),
		firstName: 'Katia',
		lastName: 'Gianfrancesco',
		password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
		email: 'k.g@usi.ch',
		level: 1,
		active: true
	}, {
		_id: ObjectId("b00000000000000000000012"),
		firstName: 'Lorenzo',
		lastName: 'Didone',
		password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
		email: 'j.u@usi.ch',
		level: 1,
		active: true
	}, {
		_id: ObjectId("b00000000000000000000013"),
		firstName: 'Nicholas',
		lastName: 'Gerard',
		password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
		email: 'n.g@usi.ch',
		level: 1,
		active: false
	}, {
		_id: ObjectId("b00000000000000000000014"),
		firstName: 'Pierino',
		lastName: 'Balucchi',
		password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
		email: 'p.b@usi.ch',
		level: 1,
		active: true
	}, {
		_id: ObjectId("b00000000000000000000015"),
		firstName: 'Kirill',
		lastName: 'Kozlov',
		freeLancerId: ObjectId("f00000000000000000000025"),
		password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
		email: 'o.g@usi.ch',
		level: 1,
		active: true,
		favorites: [
			ObjectId('f00000000000000000000032'),
			ObjectId('f00000000000000000000051'),
			ObjectId('f00000000000000000000013'),
			ObjectId('f00000000000000000000024'),
			ObjectId('f00000000000000000000011'),
			ObjectId('f00000000000000000000033'),
			ObjectId('f00000000000000000000043'),
			ObjectId('f00000000000000000000019'),
			ObjectId('f00000000000000000000044'),
			ObjectId('f00000000000000000000022'),
			ObjectId('f00000000000000000000039'),
			ObjectId('f00000000000000000000014'),
			ObjectId('f00000000000000000000027'),
			ObjectId('f00000000000000000000012'),
			ObjectId('f00000000000000000000049'),
			ObjectId('f00000000000000000000052'),
		]
	}, {
		_id: ObjectId("b00000000000000000000016"),
		firstName: 'Tommaso',
		lastName: 'Tommasini',
		password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
		email: 't.t@usi.ch',
		level: 1,
		active: true
	}, {
		_id: ObjectId("b00000000000000000000017"),
		firstName: 'Juliette',
		lastName: 'Foxy',
		freeLancerId: ObjectId("f00000000000000000000040"),
		password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
		email: 'j.f@usi.ch',
		level: 1,
		active: true,
		favorites: [
			ObjectId('f00000000000000000000042'),
			ObjectId('f00000000000000000000054'),
			ObjectId('f00000000000000000000032'),
			ObjectId('f00000000000000000000023'),
			ObjectId('f00000000000000000000011'),
			ObjectId('f00000000000000000000033'),
			ObjectId('f00000000000000000000048'),
			ObjectId('f00000000000000000000028'),
			ObjectId('f00000000000000000000049'),
			ObjectId('f00000000000000000000002'),
			ObjectId('f00000000000000000000048'),
			ObjectId('f00000000000000000000004'),
			ObjectId('f00000000000000000000039'),
			ObjectId('f00000000000000000000003'),
			ObjectId('f00000000000000000000001'),
			ObjectId('f00000000000000000000005'),
			ObjectId('f00000000000000000000008'),
			ObjectId('f00000000000000000000021'),
			ObjectId('f00000000000000000000052'),
			ObjectId('f00000000000000000000050'),
		]
	}, {
		_id: ObjectId("b00000000000000000000018"),
		firstName: 'Riccardo',
		lastName: 'Waslo',
		password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
		email: 'r.w@usi.ch',
		level: 1,
		active: false
	}]
}
