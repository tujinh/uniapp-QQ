<template>
	<view class="container">
		<view class="sign"></view>
		<view class="title">
			页面设置
		</view>
		<view class="introduce">
			你可以指定出现在当前页面的功能
		</view>
		<view class="main">
			<view class="item" v-for="item in 3">
				<text>猜你想搜</text>
				<switch checked style="transform:scale(0.7)" />
			</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style scoped lang="scss">
	.container{
		box-sizing: border-box;
		width: 100%;
		height: 300px;
		// z-index: 5000;
		// position: fixed;
		// bottom: 0;
		background: white;
		padding: 3px 15px;
		border-radius: 15px 15px 0 0;
		.sign{
			width: 32px;
			height: 4px;
			border-radius: 3px;
			background: lightgrey;
			margin: 0 auto;
		}
		.title{
			text-align: center;
			font-weight: 700;
			padding: 8px 0;
		}
		.introduce{
			font-size: 12px;
			color: rgb(176,176,176);
			padding: 10px 0;
		}
		.main{
			.item{
				padding: 8px 0;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
		}
	}
</style>