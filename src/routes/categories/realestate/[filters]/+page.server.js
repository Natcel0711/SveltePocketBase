import { serializeNonPOJOs } from '$lib/utils';
import { error } from '@sveltejs/kit';

export const load = ({ locals, params }) => {
	const getProject = async (filters) => {
		try {
			const objFilters = JSON.parse(filters);
			const resultList = serializeNonPOJOs(
				await locals.pb.collection('posts').getList(1, 50, {
					expand: 'property_type'
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
