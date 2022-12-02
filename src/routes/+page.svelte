<script>
	export let data;

	import { getImageURL } from '$lib/utils';
</script>

<div class="grid grid-cols-3 gap-4">
	{#each data.Categories as cat}
		<div class="card card-compact w-96 bg-base-100 shadow-xl">
			<figure>
				<a href={cat.Href}
					><img
						src={cat.Image
							? getImageURL(cat.collectionId, cat.id, cat.Image)
							: `https://ui-avatars.com/api/?name=${cat.Title}`}
						alt={cat.Desc}
					/></a
				>
			</figure>
			<div class="card-body">
				<h2 class="card-title">{cat.Title}</h2>
				<p>{cat.Desc}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	img {
		width: 400px;
		height: 300px;
	}
</style>
