const dataset = {
	// Some examples of streams we can serve back to Stremio ; see https://github.com/Stremio/stremio-addon-sdk/blob/master/docs/api/responses/stream.md
	tt0051744: {
		name: "House on Haunted Hill",
		type: "movie",
		infoHash: "9f86563ce2ed86bbfedd5d3e9f4e55aedd660960",
	}, // torrent
	tt1254207: {
		name: "Big Buck Bunny",
		type: "movie",
		url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
	}, // HTTP stream
	tt0031051: { name: "The Arizone Kid", type: "movie", ytId: "m3BKVSpP80s" }, // YouTube stream
	tt0137523: {
		name: "Fight Club",
		type: "movie",
		externalUrl: "https://www.netflix.com/watch/26004747",
	}, // redirects to Netflix
	"tt1748166:1:1": {
		name: "Pioneer One",
		type: "series",
		infoHash: "07a9de9750158471c3302e4e95edb1107f980fa6",
	}, // torrent for season 1, episode 1
};

module.exports = dataset;
