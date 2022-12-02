<script>
	import { Select, Checkbox } from '$lib/components';
	let content = [1, 2, 3, 4, 5];
</script>

<div style="text-align:-moz-center;">
	<div style="width: 26.5rem;" class="card just bg-base-100 shadow-xl">
		<div class="card-body">
			<form>
				<h2 class="card-title justify-center">Search Real Estate</h2>
				<div class="m-2">
					<Select {content} label="Localizacion" placeholder="Region o Pueblos" />
				</div>
				<div class="m-2">
					<Select {content} label="Tipo de propiedad" placeholder="Propiedad" />
				</div>
				<div class="grid grid-cols-2 gap-4">
					<Select {content} label="" placeholder="Precio desde" />
					<Select {content} label="" placeholder="Precio hasta" />
				</div>
				<div class="m-2">
					<Select {content} label="Cantidad de habitaciones" placeholder="Cantidad" />
				</div>
				<div class="grid grid-cols-2 gap-4">
					<Checkbox label="Incluir opcionadas" checked={false} />
					<Checkbox label="Incluir reposeidas" checked={false} />
				</div>
				<div class="card-actions justify-center m-2">
					<button type="submit" class="btn btn-primary">Search</button>
				</div>
			</form>
		</div>
	</div>
</div>
