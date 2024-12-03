<template>
	<view class="main" :style="{height:(pageHeight-45)+'px'}">
		<slot name="search">
			<view class="search"><uni-icons class="icon-search" color="#7f8082" type="search" size="18"></uni-icons>搜索</view>
		</slot>
		<slot></slot>
	</view>
</template>

<script setup>
	import { useCommonStore } from '../../stores/common';
	let {pageHeight} = useCommonStore()
</script>

<style lang="scss" scoped>
	.main{
		position: absolute;
		top: calc(var(--status-bar-height) + 45px);
		left: 0;
		background: white;
		width: 100vw;
		border-radius: 45rpx 45rpx 0 0;
		padding: 12px 13px 0;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		.search{
				height: 32px;
				width: 98%;
				background:#f5f8ff ;
				border-radius: 5px;
				text-align: center;
				line-height: 32px;
				color: #7f8082;
				margin-bottom: 18px;
				.icon-search{
					margin-right: 3px;
				}
			}
	}
</style>