<template>
	<view class="search" @click="clickSearch">
		<view class="input" :style="{width:`${width}%`}">
			<view class="content" :style="{left: `${left}%`}">
				<uni-icons class="icon-search" color="#7f8082" type="search" size="18"></uni-icons><slot></slot>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	const emit = defineEmits(['search'])
	let left = ref(50)
	let width =ref(100)
	const clickSearch =()=>{
		// uni.hideTabBar()
		emit('search')
		// left.value=12
		// width.value=85
	}
</script>

<style scoped lang="scss">
	.search{
		width: 100%;
		padding: 0 13px 18px;
		box-sizing: border-box;
		.input{
			position: relative;
			// margin: 0 13px 18px;
			box-sizing: border-box;
				height: 32px;
				width: 100%;
				background:#f5f8ff ;
				border-radius: 5px;
				// text-align: center;
				// line-height: 32px;
				color: #7f8082;
				// margin-bottom: 18px;
				.content{
					position: absolute;
					// height: 32px;
					// width: 100%;
					left: 50%;
					top: 50%;
					transform: translate(-50%,-50%);
					text-align: center;
					line-height: 32px;
					transition: .3s;
				}
				.icon-search{
					margin-right: 3px;
				}
			}
	}
</style>