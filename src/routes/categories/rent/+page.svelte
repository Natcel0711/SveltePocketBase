<script>
	import { enhance } from '$app/forms';
	import { Select, Checkbox, MoneyJson, PueblosJson } from '$lib/components';
	import { formatter } from '$lib/utils';
	export let data;

	let content = ['1', '2', '3', '4', '5', '+6'];
	let props = data.property_types.items.map((a) => a.name);
	let precios = [];
	MoneyJson.Money.forEach((element) => {
		precios.push(formatter.format(element + 1));
	});
</script>

<div style="text-align:-moz-center;">
	<div style="width: 26.5rem;" class="card just bg-base-100 shadow-xl">
		<div class="card-body">
			<form action="?/search" method="POST" use:enhance>
				<h2 class="card-title justify-center">Search for Rent/Vacation</h2>
				<div class="m-2">
					<Select
						id="area"
						content={PueblosJson.Pueblos.sort()}
						label="Localizacion"
						placeholder="Region o Pueblos"
					/>
				</div>
				<div class="m-2">
					<Select
						id="propiedadType"
						content={props}
						label="Tipo de propiedad"
						placeholder="Propiedad"
					/>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<Select id="precioDesde" content={precios} label="" placeholder="Precio desde" />
					<Select id="precioHasta" content={precios} label="" placeholder="Precio hasta" />
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
