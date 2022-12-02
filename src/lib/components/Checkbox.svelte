<script>
	export let label;
	export let checked = true;
	export let id;
</script>

<div class="form-control">
	<label class="label cursor-pointer">
		<span class="label-text">{label}</span>
		<input {id} name={id} type="checkbox" {checked} class="checkbox checkbox-primary" />
	</label>
</div>
