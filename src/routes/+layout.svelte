<script>
    import '@/global.css'
	import '@/app.css';
    import "@fontsource/roboto-condensed"
    import "@fontsource/roboto-condensed/700.css"
    import "@fontsource/cabin"
	import Header from '@/components/Header.svelte';
	import Footer from '@/components/Footer.svelte';
</script>


<Header />
<slot />
<Footer />