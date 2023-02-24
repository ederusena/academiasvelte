<script>
	let buttonProps = {
		class: [$$restProps.class]
	};
	export let href;

</script>

<a href="{href}" {...buttonProps}>
	<slot />
</a>

<style lang="postcss">
	.btn {
		@apply rounded-md
            transition
            ease-linear;
	}
	.primary {
		@apply text-white
            border
            border-white
            hover:bg-white
            hover:text-black;
	}
	.danger {
		@apply text-red-600
            border 
            border-red-600
            hover:bg-red-500
            hover:text-white;
	}
	.sm {
		@apply text-base p-2;
	}
	.lg {
		@apply text-lg p-2;
	}
</style>
