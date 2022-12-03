<script>
	import { enhance } from '$app/forms';
	import { Select, Checkbox } from '$lib/components';
	let content = [1, 2, 3, 4, 5];
</script>

<div style="text-align:-moz-center;">
	<div style="width: 26.5rem;" class="card just bg-base-100 shadow-xl">
		<div class="card-body">
			<form action="?/search" method="POST" use:enhance>
				<h2 class="card-title justify-center">Search Real Estate</h2>
				<div class="m-2">
					<Select id="area" {content} label="Localizacion" placeholder="Region o Pueblos" />
				</div>
				<div class="m-2">
					<Select id="propiedadType" {content} label="Tipo de propiedad" placeholder="Propiedad" />
				</div>
				<div class="grid grid-cols-2 gap-4">
					<Select id="precioDesde" {content} label="" placeholder="Precio desde" />
					<Select id="precioHasta" {content} label="" placeholder="Precio hasta" />
				</div>
				<div class="m-2">
					<Select id="cuartos" {content} label="Cantidad de habitaciones" placeholder="Cantidad" />
				</div>
				<div class="grid grid-cols-2 gap-4">
					<Checkbox id="opcionadas" label="Incluir opcionadas" checked={false} />
					<Checkbox id="reposeidas" label="Incluir reposeidas" checked={false} />
				</div>
				<div class="card-actions justify-center m-2">
					<button type="submit" class="btn btn-primary">Search</button>
				</div>
			</form>
		</div>
	</div>
</div>
