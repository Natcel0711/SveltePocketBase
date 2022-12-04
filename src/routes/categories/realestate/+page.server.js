import { serializeNonPOJOs } from '$lib/utils';
import { error, redirect } from '@sveltejs/kit';

export const actions = {
	search: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());
		try {
		} catch (err) {
			console.log('Error: ', err);
			throw error(400, 'Something went wrong updating your profile');
		}
		throw redirect(303, '/categories/realestate/' + JSON.stringify(body));
	}
};

export const load = async ({ locals }) => {
	try {
		const resultList = serializeNonPOJOs(
			await locals.pb.collection('property_type').getList(1, 50)
		);
		return {
			property_types: resultList
		};
	} catch (err) {
		console.log('Error: ', err);
		throw error(303, '/');
	}
};
