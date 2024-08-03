<svelte:options runes={true} />

<script lang="ts">
	import { onMount, type Snippet } from 'svelte'

	interface Props {
		secondaryColor?: string
		primaryColor?: string
		height?: number | string
		width?: number | string
		speed?: number
		animate?: boolean
		secondaryColorPercentWidth?: number
		ariaLabel?: string
		children: Snippet
	}

	const {
		secondaryColor = '#F5F5F7',
		primaryColor = '#EBECEF',
		height = 200,
		width = 400,
		speed = 2,
		animate = true,
		secondaryColorPercentWidth = 100,
		ariaLabel,
		children,
	}: Props = $props()

	let prefersReducedMotion = $state(true)
	let idClip = getUniqueId()
	let idGradient = getUniqueId()

	function getUniqueId() {
		return 's' + Math.random().toString(36).substring(5)
	}

	onMount(() => {
		prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
	})
</script>

<svg {width} {height} aria-label={ariaLabel} preserveAspectRatio="none">
	<rect fill="url(#{idGradient})" clip-path="url(#{idClip})" {width} {height} x="0" y="0" />
	<defs>
		<clipPath id={idClip}>
			{@render children()}
		</clipPath>
		<linearGradient id={idGradient} x1="-{secondaryColorPercentWidth}%" y1="50%" x2="0%" y2="50%">
			{#if animate && !prefersReducedMotion}
				<animate
					attributeName="x1"
					from="-{secondaryColorPercentWidth}%"
					to="100%"
					dur="{speed}s"
					repeatCount="indefinite"
				/>
				<animate
					attributeName="x2"
					from="0%"
					to="{100 + secondaryColorPercentWidth}%"
					dur="{speed}s"
					repeatCount="indefinite"
				/>
			{/if}

			<stop stop-color={primaryColor} offset="0%" />
			<stop stop-color={secondaryColor} offset="50%" />
			<stop stop-color={primaryColor} offset="100%" />
		</linearGradient>
	</defs>
</svg>
