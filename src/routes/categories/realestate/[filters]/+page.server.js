import { error } from '@sveltejs/kit';

export const load = ({ locals, params }) => {
	const getProject = async (filters) => {
		const objFilters = JSON.parse(filters);
		console.log(objFilters);
		try {
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};
	return {
		posts: getProject(params.filters)
	};
};
