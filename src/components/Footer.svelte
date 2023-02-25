<script>
	import imgCrossfit from '@assets/crossfit.jpg';
	import Button from './Button.svelte';
</script>

<footer class="footer">
	<div class="footer__wrapper wrap">
		<div class="footer__img">
			<img src={imgCrossfit} alt="crossfit" />
		</div>

		<div class="footer__info">
			<h2>Venha fazer seu<br>primeiro treinoo grátis.</h2>
			<p>Entre em contato via Whatsapp ou e-mail e fale com um treinador especialista da equipe.</p>
			<div class="footer__btns">
				<Button href="https://api.whatsapp.com/send?phone=5511920009489" class="btn primary sm "
					>Whatsapp</Button
				>
				<Button href="mailto: eder.sena@live.com" class="btn primary sm">E-mail</Button>
			</div>
		</div>
	</div>
	<div class="credits">
		<div class="footer__credits">
			<span>@ Academia Chupisco, 2023</span>
		</div>
	</div>
</footer>

<style lang="postcss">
	.footer {
		@apply mt-24 mx-1;
	}

	.footer__wrapper {
		@apply grid grid-cols-2 gap-6 items-center;
	}

	.footer__img {
		@apply relative
            after:absolute
            after:inset-0
            after:bg-slate-900/60;
	}

	img {
		@apply rounded-2xl;
	}
	p {
		@apply mt-5 max-w-sm;
	}
	h2 {
		@apply text-[calc(36_/_16_*_1rem)];
	}
	.footer__btns {
		@apply flex gap-2 mt-5;
	}

	.credits {
		@apply mt-16;
	}
	.footer__credits {
		@apply before:block
        before:w-full
        before:h-1
        before:bg-slate-50/80;
	}
	span {
		@apply
            text-[calc(14_/_16_*_1rem)]
            pt-7
            pb-7
            inline-block;
	}
</style>
