import { serializeNonPOJOs } from '$lib/utils';
import { error } from '@sveltejs/kit';

export const load = ({ locals, params }) => {
	const getProject = async (filters) => {
		try {
			const objFilters = JSON.parse(filters);
			const resultList = serializeNonPOJOs(
				await locals.pb.collection('real_estate_posts').getList(1, 50, {
					expand: 'property_type',
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
	if (filters.area) filterString.push(`location = ${filters.area}`);
	if (filters.propiedadType) filterString.push(`property_type = ${filters.propiedadType}`);
	if (filters.precioDesde)
		filterString.push(`price >= ${Number(filters.precioDesde.replace(/[^0-9.-]+/g, ''))}`);
	if (filters.precioHasta)
		filterString.push(`price <= ${Number(filters.precioHasta.replace(/[^0-9.-]+/g, ''))}`);
	if (filters.cuartos) filterString.push(`rooms >= ${filters.cuartos}`);

	// if (filters.opcionadas) filterString.push(`opcionada = true`);
	// else filterString.push(`opcionada = false`);
	// if (filters.reposeidas) filterString.push(`reposeida = true`);
	// else filterString.push(`reposeida = false`);
	console.log(filterString.join(' && '), filters);
	return filterString.join(' && ');
};
