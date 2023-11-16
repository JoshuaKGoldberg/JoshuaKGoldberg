import { githubSponsorsToMarkdown } from "github-sponsors-to-markdown";

export async function buildSponsorsTable() {
	return await githubSponsorsToMarkdown({
		login: "JoshuaKGoldberg",
		tiers: {
			Bronze: {
				label: "Bronze Sponsors (&gt;=$5/mo)",
				minimum: 5,
				size: 50,
			},
			Gold: {
				label: "Gold Sponsors (&gt;=$25/mo)",
				minimum: 25,
				size: 75,
			},
			Platinum: {
				label: "Platinum Sponsors (&gt;=$100/mo)",
				minimum: 100,
				size: 100,
			},
			Silver: {
				label: "Silver Sponsors (&gt;=$10/mo)",
				minimum: 10,
				size: 50,
			},
		},
		verbose: true,
	});
}
