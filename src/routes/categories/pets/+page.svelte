<script>
	import { enhance } from '$app/forms';
	import { Select, PetCategories, species } from '$lib/components';
	import Input from '$lib/components/Input.svelte';
	export let data;
</script>

<div style="text-align:-moz-center;">
	<div style="width: 26.5rem;" class="card just bg-base-100 shadow-xl">
		<div class="card-body">
			<form action="?/search" method="POST" use:enhance>
				<h2 class="card-title justify-center">Search Pets</h2>
				<div class="m-2">
					<Select id="especie" content={species.species} label="Especies" placeholder="Especies" />
				</div>
				<div class="grid grid-cols-2 gap-4">
					<Select
						id="category"
						content={PetCategories.PetCategories}
						label=""
						placeholder="Categoria"
					/>
					<Input id="clave" label="" placeholder="Palabra Clave" />
				</div>
				<div class="card-actions justify-center m-2">
					<button type="submit" class="btn btn-primary">Search</button>
				</div>
			</form>
		</div>
	</div>
</div>
