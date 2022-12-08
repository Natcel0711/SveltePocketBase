import { serializeNonPOJOs } from '$lib/utils';
import { error } from '@sveltejs/kit';

export const load = ({ locals, params }) => {
	const getProject = async (filters) => {
		try {
			const objFilters = JSON.parse(filters);
			const resultList = serializeNonPOJOs(
				await locals.pb.collection('pets_posts').getList(1, 50, {
					filter: await getFilters(objFilters)
				})
			);
			return resultList;
		} catch (err) {
			console.log('Error: ', err);
			// @ts-ignore
			throw error(err.status, err.message);
		}
	};
	return {
		posts: getProject(params.filters)
	};
};

const getFilters = async (filters) => {
	let filterString = [];
	return filterString.join(' && ');
};
