'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

module.exports.user = {
	name: 'User',
	data: [{
			_id: ObjectId("b00000000000000000000001"),
			freeLancerId: ObjectId("f00000000000000000000005"),
			firstName: 'Costanza',
			lastName: 'Volpini',
			password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
			email: 'c.v@usi.ch',
			level: 0,
			active: true
		},
		{
			_id: ObjectId("b00000000000000000000000"),
			freeLancerId: ObjectId("f00000000000000000000000"),
			firstName: 'Marco',
			lastName: 'Tollini',
			password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
			email: 'm.t@usi.ch',
			level: 0,
			active: true
		},
		{
			_id: ObjectId("b00000000000000000000002"),
			freeLancerId: ObjectId("f00000000000000000000003"),
			firstName: 'Daniele',
			lastName: 'Lo Preiato',
			password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
			email: 'd.l@usi.ch',
			level: 0,
			active: true
		},
		{
			_id: ObjectId("b00000000000000000000003"),
			firstName: 'Lorenzo',
			lastName: 'Ferri',
			password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
			email: 'l.f@usi.ch',
			level: 0,
			active: true
		},
		{
			_id: ObjectId("b00000000000000000000004"),
			firstName: 'Riccardo',
			lastName: 'Gabriele',
			password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
			email: 'r.g@usi.ch',
			level: 0,
			active: true
		},
		{
			_id: ObjectId("b00000000000000000000005"),
			freeLancerId: ObjectId("f00000000000000000000006"),
			firstName: 'Zeno',
			lastName: 'Trevisan',
			password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
			email: 'z.t@usi.ch',
			level: 0,
			active: true
		},
		{
			_id: ObjectId("b00000000000000000000006"),
			firstName: 'Vanessa',
			lastName: 'Braglia',
			password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
			email: 'v.b@usi.ch',
			level: 0,
			active: true
		},
		{
			_id: ObjectId("b00000000000000000000007"),
			freeLancerId: ObjectId("f00000000000000000000001"),
			firstName: 'Nevio',
			lastName: 'Valsangiacomo',
			password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
			email: 'n.v@usi.ch',
			level: 0,
			active: true
		},
		{
			_id: ObjectId("b00000000000000000000008"),
			firstName: 'Francesca',
			lastName: 'Rossi',
			password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
			email: 'f.r@usi.ch',
			level: 1,
			active: false
		},
		{
			_id: ObjectId("b00000000000000000000009"),
			firstName: 'Marco',
			lastName: 'Bersagli',
			password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
			email: 'm.b@usi.ch',
			level: 1,
			active: true
		},
		{
			_id: ObjectId("b00000000000000000000010"),
			firstName: 'Jessica',
			lastName: 'Urbino',
			password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
			email: 'j.u@usi.ch',
			level: 1,
			active: true
		},
		{
			_id: ObjectId("b00000000000000000000010"),
			firstName: 'Katia',
			lastName: 'Gianfrancesco',
			password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
			email: 'j.u@usi.ch',
			level: 1,
			active: true
		},
		{
			_id: ObjectId("b00000000000000000000010"),
			firstName: 'Lorenzo',
			lastName: 'Didone',
			password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
			email: 'j.u@usi.ch',
			level: 1,
			active: true
		}
	]
}
