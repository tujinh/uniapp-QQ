<template>
	<view class="main" >
		<slot name="search">
			<search @click="emit('search')">
				搜索
			</search>
		</slot>
		<slot></slot>
	</view>
</template>

<script setup>
	import { useCommonStore } from '../../stores/common';
	import {ref} from 'vue'
	const emit =defineEmits(['search'])
	let isSearch = ref(false)
	let {pageHeight} = useCommonStore()
</script>

<style lang="scss" scoped>
	.main{
		background: white;
		width: 100vw;
		border-radius: 40rpx 40rpx 0 0;
		padding: 12px 0 0;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		
		
	}
</style>