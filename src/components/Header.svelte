<script>
	import logo from '@assets/logo.png';
	import Button from './Button.svelte';
</script>

<div class="header">
	<div class="header__wrapper wrap">
		<a href="/">
			<img class="logo" src={logo} alt="logo" />
		</a>
		<nav>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/sobre">Sobre</a></li>
				<li><a href="/modalidades">Home</a></li>
				<li><Button href="#contato" class="btn primary sm mx-6">Contato</Button></li>
			</ul>
		</nav>
	</div>
</div>

<style lang="postcss">
	.header__wrapper {
		@apply flex
        items-center
        px-6
        min-h-[120px];
	}

	.logo {
		@apply max-w-xs;
	}	

	nav {
		@apply ml-auto;
	}

	ul {
		@apply flex
            items-center
            gap-7;
	}

    a {
        @apply text-white
            text-lg
            font-semibold
            hover:text-gray-300
            hover:underline;
    }
</style>
