function fromMagnet(name, type, uri) {
	const parsed = magnet.decode(uri);
	const infoHash = parsed.infoHash.toLowerCase();
	const tags = [];
	if (uri.match(/720p/i)) tags.push("720p");
	if (uri.match(/1080p/i)) tags.push("1080p");
	return {
		name: name,
		type: type,
		infoHash: infoHash,
		sources: (parsed.announce || [])
			.map(function (x) {
				return "tracker:" + x;
			})
			.concat(["dht:" + infoHash]),
		tag: tags,
		title: tags[0], // show quality in the UI
	};
}

const dataset = {
	// Some examples of streams we can serve back to Stremio ; see https://github.com/Stremio/stremio-addon-sdk/blob/master/docs/api/responses/stream.md
	tt0326098: {
		name: "С деца на море",
		type: "movie",
		ytId: "nYcgKY9RQUA",
	},
	tt0205306: {
		name: "Оркестър без име",
		type: "movie",
		ytId: "PslR4nGyeEo",
	},
	tt0170783: {
		name: "Вчера",
		type: "movie",
		ytId: "ME3419RfmYc",
	},
	tt0298350: {
		name: "Господин за един ден",
		type: "movie",
		ytId: "HJhEb5Fm5Ok",
	},
	tt0246739: {
		name: "Комбина",
		type: "movie",
		ytId: "iDImKwjCbb8",
	},
	tt0222426: {
		name: "Комбина",
		type: "movie",
		ytId: "77-5TjwpOoU",
	},
	tt1705120: {
		name: "Love.net",
		type: "movie",
		ytId: "1WrL6H-p2KA",
	},
	tt1127702: {
		name: "Мисия Лондон",
		type: "movie",
		ytId: "5RCcHraR7Ek",
	},
};

module.exports = dataset;
