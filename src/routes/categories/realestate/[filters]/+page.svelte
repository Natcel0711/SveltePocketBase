<script>
	import { getImageURL } from '$lib/utils';
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	});
	export let data;
	console.log(data.posts.items[0].expand.property_type.name);
</script>

<div class="grid grid-cols-3 gap-8">
	{#each data.posts.items as post}
		<div class="card w-auto bg-base-100 shadow-xl">
			<figure>
				<img
					src={post.images[0]
						? getImageURL(post.collectionId, post.id, post.images[0])
						: `https://ui-avatars.com/api/?name=${post.title}`}
					alt={post.description}
				/>
			</figure>
			<div class="p-6">
				<h2 class="card-title">{post.title}</h2>
				<p class="my-1">
					{formatter.format(post.price)}
					- {post.rooms} Cuartos | {post.bathroom} baños
				</p>
				<em>{post.location}</em>
				<div class="badge badge-ghost">{post.expand.property_type.name}</div>
			</div>
		</div>
	{/each}
</div>
