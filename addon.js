const { addonBuilder } = require("stremio-addon-sdk");
const dataset = require("./data/dataset");
const manifest = require("./data/manifest");

const builder = new addonBuilder(manifest);

// Streams handler
builder.defineStreamHandler(function (args) {
	if (dataset[args.id]) {
		return Promise.resolve({ streams: [dataset[args.id]] });
	} else {
		return Promise.resolve({ streams: [] });
	}
});

const METAHUB_URL = "https://images.metahub.space";

const generateMetaPreview = function (value, key) {
	// To provide basic meta for our movies for the catalog
	// we'll fetch the poster from Stremio's MetaHub
	// see https://github.com/Stremio/stremio-addon-sdk/blob/master/docs/api/responses/meta.md#meta-preview-object
	const imdbId = key.split(":")[0];
	return {
		id: imdbId,
		type: value.type,
		name: value.name,
		poster: METAHUB_URL + "/poster/medium/" + imdbId + "/img",
		logo: METAHUB_URL + "/poster/medium/" + imdbId + "/img",
	};
};

builder.defineCatalogHandler(function (args, cb) {
	// filter the dataset object and only take the requested type
	const metas = Object.entries(dataset)
		.filter(([_, value]) => value.type === args.type)
		.map(([key, value]) => generateMetaPreview(value, key));

	return Promise.resolve({ metas: metas });
});

module.exports = builder.getInterface();
