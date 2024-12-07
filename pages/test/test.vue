<template>
	<view>
		<button type="primary" @click="open">fade</button>
		<uni-transition ref="dp" :styles="styles" :show="show" >
			<DownPop ></DownPop>
		</uni-transition>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			styles:{
				'zIndex':'5000',
				'position':'fixed',
				'bottom':'0',
				'transform':'translateY(100%)',
				'width': '100vw'
			}
		}
	},
	onLoad() {},
	methods: {
		open(mode) {
			this.show = !this.show
			this.$refs.dp.init({
				duration:300
			})
			this.$refs.dp.step({
				translateY:'0'
			})
			this.$refs.dp.run()
		},
		change() {
			console.log('触发动画')
		}
	}
}
</script>