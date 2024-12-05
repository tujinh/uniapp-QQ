<template>
	<view class="topBar">
		<view class="container">
			<view class="left">
				<view @click="emit('popLeft')" class="avatar">
					<image src="../../static/one.png" mode=""></image>
				</view>
				<view class="info">
					<slot name="info"></slot>
				</view>
			</view>
			<view class="right" >
				<slot name="rightbtn"></slot>
			</view>
			
		</view>
	</view>
</template>

<script setup>
	const emit = defineEmits(['popLeft'])
	// const toInfo =()=>{
	// 	uni.navigateTo({
	// 		url:'/pages/userinfo/userinfo'
	// 	})
	// }
	// const totest =()=>{
	// 	uni.navigateTo({
	// 		url:'/pages/test/test'
	// 	})
	// }
</script>

<style lang="scss" scoped>
	.topBar{
		z-index: 100;
		width: 100%;
		height: 45px;
		position: fixed;
		top: 0;
		left: 0;
		background: #f0f4ff;
		// box-sizing: border-box;
		padding-top: var(--status-bar-height);
		.container{
			width: 100%;
			height: 100%;
			padding: 7.5px 15px;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.left{
			display: flex;
			// justify-content: flex-end;
			align-items: center;
			.avatar{
				width: 32.5px;
				height: 32.5px;
				border-radius: 50%;
				border:1px solid white;
				image{
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}
			.info{
				margin-left: 10px;
				display: flex;
				flex-direction: column;
				
				
				
			}
		}
		.right{
			display: flex;
			align-items: center;
			
		}
	}
</style>