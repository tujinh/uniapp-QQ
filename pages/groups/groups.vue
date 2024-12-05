<template>
	<view class="content">
		<commontb>
			<template #mid>
				群通知
			</template>
			<template #right>
				清空
			</template>
		</commontb>
		<!-- <view class="main">
		</view> -->
		<view class="nomsg">
			<uni-icons class="bell" type="notification" size="50"></uni-icons>
			<text>暂无通知</text>
		</view>
			
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.content{
		width: 100%;
		min-height:100vh ;
		background: #f0f4ff;
		position: relative;
	}
	.nomsg{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		text-align: center;
		.bell{
			display: block;
			width: 70px;
			height: 70px;
			border-radius: 50%;
			border: 1px solid black;
			text-align: center;
			line-height: 70px;
			margin-bottom: 20px;
		}
	}
	.main{
		width: 100%;
		background: white;
		position: absolute;
		top: calc(var(--status-bar-height) + 46px) ;
		
	}
</style>
