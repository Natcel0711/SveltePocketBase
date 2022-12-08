<script>
	import { getImageURL } from '$lib/utils';
	export const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	});
	export let data;
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
					- {post.species}
				</p>
				<em>{post.location}</em>
				<div class="badge badge-ghost">{post.category}</div>
			</div>
		</div>
	{/each}
</div>
