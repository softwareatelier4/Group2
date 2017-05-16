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
		},
		{
			_id: ObjectId("b00000000000000000000000"),
			firstName: 'Marco',
			lastName: 'Tollini',
			password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
			email: 'm.t@usi.ch',
			level: 0,
			active: true
		},
		{
			_id: ObjectId("b00000000000000000000002"),
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
			firstName: 'Samantha',
			lastName: 'Scotti',
			freeLancerId: ObjectId("f00000000000000000000004"),
			password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
			email: 's.s@usi.ch',
			level: 1,
			active: true
		},
		{
			_id: ObjectId("b00000000000000000000011"),
			firstName: 'Katia',
			lastName: 'Gianfrancesco',
			password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
			email: 'j.u@usi.ch',
			level: 1,
			active: true
		},
		{
			_id: ObjectId("b00000000000000000000012"),
			firstName: 'Lorenzo',
			lastName: 'Didone',
			password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
			email: 'j.u@usi.ch',
			level: 1,
			active: true
		},
		{
			_id: ObjectId("b00000000000000000000013"),
			firstName: 'Federica',
			lastName: 'Rossetti',
			password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
			email: 'f.r@usi.ch',
			level: 1,
			active: false
		},
		{
			_id: ObjectId("b00000000000000000000014"),
			firstName: 'Pierino',
			lastName: 'Balucchi',
			password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
			email: 'p.b@usi.ch',
			level: 1,
			active: true
		},
		{
			_id: ObjectId("b00000000000000000000015"),
			firstName: 'Kirill',
			lastName: 'Kozlov',
			freeLancerId: ObjectId("f00000000000000000000025"),
			password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
			email: 'o.g@usi.ch',
			level: 1,
			active: true
		},
		{
			_id: ObjectId("b00000000000000000000016"),
			firstName: 'Tommaso',
			lastName: 'Tommasini',
			password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
			email: 't.t@usi.ch',
			level: 1,
			active: true
		},
		{
			_id: ObjectId("b00000000000000000000017"),
			firstName: 'Juliette',
			lastName: 'Foxy',
			freeLancerId: ObjectId("f00000000000000000000040"),
			password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
			email: 'j.f@usi.ch',
			level: 1,
			active: true
		},
		{
			_id: ObjectId("b00000000000000000000018"),
			firstName: 'Riccardo',
			lastName: 'Waslo',
			password: '$2a$08$f5U8b6fwQ6Uiagx4pwFW7eg0ZuU7de/ZZRt1bSRzFkj1iaBBIhxrK',
			email: 'r.w@usi.ch',
			level: 1,
			active: false
		}
	]
}
