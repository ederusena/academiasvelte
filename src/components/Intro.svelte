<script>
	import Button from '@components/Button.svelte';

	import iconMuscle from '@assets/icon-muscle.png';
	import iconWeight from '@assets/icon-weight.png';
	
	import imgExercicios from '@assets/exercicios-grupo.jpg';
	import imgMusculacao from '@assets/musculacao.jpg';

	export let title = "Trocar citulo";
	export let content = "Trocar conteudo";
	export let btn = "Trocar titulo botao";
	export let href = "/";
	export let img = 'musculacao';
	export let icon = 'muscle';

	if (img === 'musculacao') img = imgMusculacao;
	if (img === 'exercicios') img = imgExercicios;

	if (icon === 'muscle') icon = iconMuscle;
	if (icon === 'weight') icon = iconWeight;
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
		{#if btn && href}
			<Button {href} class="btn primary sm mx-6">{btn}</Button>
		{/if}
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
