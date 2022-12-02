<script>
	export let label;
	export let placeholder;
	export let content;
	export let required = false;
	export let id;
</script>

<div class="form-control w-full max-w-xs">
	<label class="label">
		<span class="label-text">{label}</span>
	</label>
	<select name={id} {id} {required} class="select select-bordered">
		<option disabled selected>{placeholder}</option>
		{#each content as cont}
			<option>{cont}</option>
		{/each}
	</select>
</div>
