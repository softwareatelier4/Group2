'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

module.exports.review = {
	name: 'Review',
	data: [{
			_id: ObjectId("c00000000000000000000000"),
			title: 'R1',
			date: '2017-01-22T23:58:43.122Z',
			description: "Mi ha lasciato il muro imbiancato a metá!!!!!!!!!!!!!!!!!!!!!!!!!! :O",
			score: 1,
			photo: [
				'/uploads/test/3.jpg'
			],
			user: ObjectId("b00000000000000000000000"),
			freelancer: ObjectId("f00000000000000000000003")
		},
		{
			_id: ObjectId("c00000000000000000000001"),
			title: 'R2',
			date: '1970-01-13T23:58:43.122Z',
			description: "In questa rubrica giornaliera vi proponiamo la meditazione del Vangelo del giorno preparata da un fratello o una sorella di Bose. Il nostro desiderio è di spezzare il pane quotidiano della parola di Dio, condividendo la lectio divina fatta nella solitudine della cella monastica. Per tutti il fine è quello indicato da Ignazio d’Antiochia, “rifugiarmi nel Vangelo come nella carne di Gesù” (Lettera ai Filadelfiesi).",
			score: 5,
			photo: [
				'/uploads/test/1.jpg',
				'/uploads/test/2.jpg'
			],
			user: ObjectId("b00000000000000000000001"),
			freelancer: ObjectId("f00000000000000000000007")
		},
		{
			_id: ObjectId("c00000000000000000000002"),
			title: 'R3',
			description: "In questa rubrica giornaliera vi proponiamo la meditazione del Vangelo del giorno preparata da un fratello o una sorella di Bose. Il nostro desiderio è di spezzare il pane quotidiano della parola di Dio, condividendo la lectio divina fatta nella solitudine della cella monastica. Per tutti il fine è quello indicato da Ignazio d’Antiochia, “rifugiarmi nel Vangelo come nella carne di Gesù” (Lettera ai Filadelfiesi).",
			score: 2,
			photo: [
				'/uploads/test/4.jpg',
				'/uploads/test/5.jpg',
				'/uploads/test/6.jpg'
			],
			user: ObjectId("b00000000000000000000002"),
			freelancer: ObjectId("f00000000000000000000001")
		},
		{
			_id: ObjectId("c00000000000000000000003"),
			title: 'R4',
			date: '1972-01-13T23:58:43.122Z',
			description: "In questa rubrica giornaliera vi proponiamo la meditazione del Vangelo del giorno preparata da un fratello o una sorella di Bose. Il nostro desiderio è di spezzare il pane quotidiano della parola di Dio, condividendo la lectio divina fatta nella solitudine della cella monastica. Per tutti il fine è quello indicato da Ignazio d’Antiochia, “rifugiarmi nel Vangelo come nella carne di Gesù” (Lettera ai Filadelfiesi).",
			score: 3,
			photo: [],
			user: ObjectId("b00000000000000000000000"),
			freelancer: ObjectId("f00000000000000000000001")
		},
		{
			_id: ObjectId("c00000000000000000000004"),
			title: 'R5',
			description: "In questa rubrica giornaliera vi proponiamo la meditazione del Vangelo del giorno preparata da un fratello o una sorella di Bose. Il nostro desiderio è di spezzare il pane quotidiano della parola di Dio, condividendo la lectio divina fatta nella solitudine della cella monastica. Per tutti il fine è quello indicato da Ignazio d’Antiochia, “rifugiarmi nel Vangelo come nella carne di Gesù” (Lettera ai Filadelfiesi).",
			score: 4,
			photo: [
				'/uploads/test/7.jpg',
				'/uploads/test/8.jpg',
				'/uploads/test/9.jpg',
				'/uploads/test/10.jpg',
				'/uploads/test/11.jpg',
				'/uploads/test/1.jpg',
				'/uploads/test/2.jpg',
				'/uploads/test/3.jpg',
				'/uploads/test/4.jpg',
				'/uploads/test/5.jpg',
			],
			user: ObjectId("b00000000000000000000001"),
			freelancer: ObjectId("f00000000000000000000001")
		},
		{
			_id: ObjectId("c00000000000000000000005"),
			title: 'R6',
			description: "In questa rubrica giornaliera vi proponiamo la meditazione del Vangelo del giorno preparata da un fratello o una sorella di Bose. Il nostro desiderio è di spezzare il pane quotidiano della parola di Dio, condividendo la lectio divina fatta nella solitudine della cella monastica. Per tutti il fine è quello indicato da Ignazio d’Antiochia, “rifugiarmi nel Vangelo come nella carne di Gesù” (Lettera ai Filadelfiesi).",
			score: 3,
			photo: [
				'/uploads/test/1.jpg'
			],
			user: ObjectId("b00000000000000000000000"),
			freelancer: ObjectId("f00000000000000000000001")
		},
		{
			_id: ObjectId("c00000000000000000000006"),
			title: 'R7',
			date: '1975-01-13T23:58:43.122Z',
			description: "In questa rubrica giornaliera vi proponiamo la meditazione del Vangelo del giorno preparata da un fratello o una sorella di Bose. Il nostro desiderio è di spezzare il pane quotidiano della parola di Dio, condividendo la lectio divina fatta nella solitudine della cella monastica. Per tutti il fine è quello indicato da Ignazio d’Antiochia, “rifugiarmi nel Vangelo come nella carne di Gesù” (Lettera ai Filadelfiesi).",
			score: 5,
			photo: [
				'/uploads/test/7.jpg',
				'/uploads/test/2.jpg',
				'/uploads/test/1.jpg',
				'/uploads/test/5.jpg',
			],
			user: ObjectId("b00000000000000000000001"),
			freelancer: ObjectId("f00000000000000000000000")
		},
		{
			_id: ObjectId("c00000000000000000000007"),
			title: 'R8',
			date: '1976-01-13T23:58:43.122Z',
			description: "In questa rubrica giornaliera vi proponiamo la meditazione del Vangelo del giorno preparata da un fratello o una sorella di Bose. Il nostro desiderio è di spezzare il pane quotidiano della parola di Dio, condividendo la lectio divina fatta nella solitudine della cella monastica. Per tutti il fine è quello indicato da Ignazio d’Antiochia, “rifugiarmi nel Vangelo come nella carne di Gesù” (Lettera ai Filadelfiesi).",
			score: 4,
			photo: [],
			user: ObjectId("b00000000000000000000001"),
			freelancer: ObjectId("f00000000000000000000003")
		},
		{
			_id: ObjectId("c00000000000000000000008"),
			title: 'R10',
			description: "In questa rubrica giornaliera vi proponiamo la meditazione del Vangelo del giorno preparata da un fratello o una sorella di Bose. Il nostro desiderio è di spezzare il pane quotidiano della parola di Dio, condividendo la lectio divina fatta nella solitudine della cella monastica. Per tutti il fine è quello indicato da Ignazio d’Antiochia, “rifugiarmi nel Vangelo come nella carne di Gesù” (Lettera ai Filadelfiesi).",
			score: 1,
			photo: [
				'/uploads/test/10.jpg',
			],
			user: ObjectId("b00000000000000000000002"),
			freelancer: ObjectId("f00000000000000000000005")
		},
		{
			_id: ObjectId("c00000000000000000000009"),
			title: 'R10',
			date: '2015-01-13T23:58:43.122Z',
			description: "In questa rubrica giornaliera vi proponiamo la meditazione del Vangelo del giorno preparata da un fratello o una sorella di Bose. Il nostro desiderio è di spezzare il pane quotidiano della parola di Dio, condividendo la lectio divina fatta nella solitudine della cella monastica. Per tutti il fine è quello indicato da Ignazio d’Antiochia, “rifugiarmi nel Vangelo come nella carne di Gesù” (Lettera ai Filadelfiesi).",
			score: 5,
			photo: [],
			user: ObjectId("b00000000000000000000001"),
			freelancer: ObjectId("f00000000000000000000005")
		},
		{
			_id: ObjectId("c00000000000000000000010"),
			title: 'R11',
			date: '2003-01-13T23:58:43.122Z',
			description: "In questa rubrica giornaliera vi proponiamo la meditazione del Vangelo del giorno preparata da un fratello o una sorella di Bose. Il nostro desiderio è di spezzare il pane quotidiano della parola di Dio, condividendo la lectio divina fatta nella solitudine della cella monastica. Per tutti il fine è quello indicato da Ignazio d’Antiochia, “rifugiarmi nel Vangelo come nella carne di Gesù” (Lettera ai Filadelfiesi).",
			score: 3,
			photo: [],
			user: ObjectId("b00000000000000000000000"),
			freelancer: ObjectId("f00000000000000000000006")
		},
	]
}
