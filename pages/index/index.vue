<template>
	<view class="content">
		<topBar>
			<template #info>
				<view class="nick">,</view>
				<view class="status">
					<view class="dot"></view>
					<view class="device">手机在线-WiFi <uni-icons type="right" size="9"></uni-icons></view>
				</view>
			</template>
			<template #rightbtn>
				<uni-icons type="gift" size="25"></uni-icons>
				<uni-icons class="plus" type="plusempty" size="25"></uni-icons>
			</template>
		</topBar>
		<PageMain>
			<view class="friend-list">
				<friendItem></friendItem>
				<friendItem></friendItem>
				<friendItem></friendItem>
			</view>
		</PageMain>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	
	//2
</script>

<style lang="scss" scoped>
	.content{
		width: 100vw;
		height: 100vh;
		background: #f0f4ff;
		position: relative;
		.plus{
			margin-left: 7px;
		}
		.friend-list{
			width: 100%;
		}
		.nick{
			padding-left: 1px;
		}
		.status{
			display: flex;
			align-items: center;
			.dot{
				width: 9px;
				height: 9px;
				border-radius: 50%;
				background: #1de583;
				margin-right: 5px;
			}
			.device{
				font-size: 9px;
			}
		}
			
	}
	
		
	
</style>
