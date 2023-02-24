<script>
	import imgHome from '../assets/musculacao.jpg';
	import icon from '../assets/icon-muscle.png';
	import Button from './Button.svelte';
</script>

<section class="intro">
	<div class="wrap">
		<h1 class="px-6 text-4xl mb-4 leading-2">
			Voce está pronto<br />para o desafio?<img class="muscle" src={icon} alt="muscle alt" />
		</h1>
		<div class="px-6 w-[390px]">
			<p class="mb-4">
				A academia local está pronta para te ajudar a chegar mais longe e alcançar sua melhor
				performance.
			</p>
		</div>
		<Button class="btn primary sm mx-6">Modalidades</Button>
	</div>
</section>

<style lang="postcss">
	.intro {
		@apply min-h-[360px]
			bg-[url('../assets/musculacao.jpg')]
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
