<script>
	export let label;
	export let checked = true;
</script>

<div class="form-control">
	<label class="label cursor-pointer">
		<span class="label-text">{label}</span>
		<input type="checkbox" {checked} class="checkbox checkbox-primary" />
	</label>
</div>
