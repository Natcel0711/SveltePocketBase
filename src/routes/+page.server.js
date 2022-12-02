import { error } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	try {
		const cats = await locals.pb.collection('categories').getFullList(200 /* batch size */, {
			sort: 'created'
		});
		let CatList = [];
		cats.forEach((cat) => {
			CatList.push({
				Title: cat.title,
				Desc: cat.description,
				Href: cat.href,
				Image: cat.image,
				collectionId: cat.collectionId,
				id: cat.id
			});
		});
		return {
			Categories: CatList
		};
	} catch (err) {
		console.log('Error: ', err);
		throw error(303, '/');
	}
};
