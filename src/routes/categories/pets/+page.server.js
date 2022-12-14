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
		throw redirect(303, '/categories/pets/' + JSON.stringify(body));
	}
};

export const load = async ({ locals }) => {};
