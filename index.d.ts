declare module 'svelte5-skeleton' {
	import { SvelteComponent, type Snippet } from 'svelte'

	export class Skeleton extends SvelteComponent {
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
}
