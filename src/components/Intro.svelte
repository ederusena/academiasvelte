<script>
	import Button from '@components/Button.svelte';
	import iconMuscle from '@assets/icon-muscle.png';
	import imgMusculacao from '@assets/musculacao.jpg';

	export let title;
	export let content;
	export let btn;
	export let href;

	export let img;
	if (img === 'musculacao') img = imgMusculacao;

	export let icon;
	if (icon === 'muscle') icon = iconMuscle;
</script>

<section class="intro" style="background-image: url({img});">
	<div class="wrap">
		<h1 class="px-6 text-4xl mb-4 leading-2">
			{@html title}<img class="muscle" src={icon} alt="muscle alt" />
		</h1>
		<div class="px-6 w-[390px]">
			<p class="mb-4">
				{content}
			</p>
		</div>
		<Button {href} class="btn primary sm mx-6">{btn}</Button>
	</div>
</section>

<style lang="postcss">
	.intro {
		@apply min-h-[360px]
			relative
			bg-cover
			bg-center
			grid
			content-center
			justify-start
			after:absolute
			after:inset-0
			after:bg-slate-900/50;
	}

	.wrap {
		@apply z-10 mx-auto;
	}

	.muscle {
		@apply inline max-w-[30px] mb-3;
	}
</style>
