<template>
	<view class="main" >
		<slot name="search">
			<view class="search" @click="emit('search')">
				<view class="input">
					<uni-icons class="icon-search" color="#7f8082" type="search" size="18"></uni-icons>搜索
				</view>
			</view>
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
		// position: absolute;
		// top: calc(var(--status-bar-height) + 45px);
		// left: 0;
		
		background: white;
		width: 100vw;
		border-radius: 40rpx 40rpx 0 0;
		padding: 12px 0 0;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		.search{
			width: 100%;
			padding: 0 13px 18px;
			box-sizing: border-box;
			.input{
				// margin: 0 13px 18px;
				box-sizing: border-box;
					height: 32px;
					width: 100%;
					background:#f5f8ff ;
					border-radius: 5px;
					text-align: center;
					line-height: 32px;
					color: #7f8082;
					// margin-bottom: 18px;
					.icon-search{
						margin-right: 3px;
					}
				}
		}
		
	}
</style>