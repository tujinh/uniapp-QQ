<template>
	<view class="top">
		<view class="container">
			<uni-icons class="left" type="left" size="25"></uni-icons>
			<view class="mid">
				<slot name="mid">设置</slot>
			</view>
			<view class="right">
				<slot name="right"></slot>
			</view>
		</view>
		
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	.top{
		z-index: 100;
		height: 45px;
		background: white;
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		padding-top:var(--status-bar-height) ;
		// border-bottom: 1px solid rgba(230,230,230);
		.container{
			height: 100%;
			width: 100%;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 8px;
			.left,.right{
				width: 40px;
			}
			.left{
				display: flex;

			}
			.mid{
				font-size: 16px;
			}
		}
		
	}
</style>