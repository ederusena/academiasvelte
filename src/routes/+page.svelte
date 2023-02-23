<script>
	import imgHome from '../assets/musculacao.jpg';
	import Button from './Button.svelte';
</script>

<section class="intro" style="background-image: url({imgHome})">
	<div class="intro__wrapper wrap">
		<h1 class="text-4xl">Voce está pronto para o desafio?</h1>
		<p>
			A academia local está pronta para te ajudar a chegar mais longe e alcançar sua melhor
			performance.
		</p>
		<!-- <a class="btn" href="/sobre">Modalidades</a> -->
		<Button class="btn primary sm">Modalidades</Button>
	</div>
</section>

<style lang="postcss">
	.intro {
		@apply 
			min-h-[360px]
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

	.intro__wrapper {
		@apply z-10;
	}
	.wrap {}
</style>
