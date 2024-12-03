<template>
	<view class="list">
		<image :class="`avatar-${avatarSize}`" src="../../static/one.png" mode=""></image>
		<view class="content">
			<view class="top">
				<view class="name">梦的回归</view>
				<view class="time">上午9:25</view>
			</view>
			<view class="bottom">
				<view class="msg">梦的回归梦的回归梦的回归梦的回归梦的回归梦的回归</view>
				<view class="tip"><text class="num">3</text></view>
			</view>
		</view>
		
	</view>
</template>

<script setup>
	const props = defineProps({
		avatarSize:{
			type:String,
			default:'common'
		}
	})
</script>

<style lang="scss" scoped>
	.list{
		width: 100%;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.avatar-common{
			width: 48px;
			height: 48px;
			border-radius: 50%;
			}
		.avatar-mid{
			width: 40px;
			height: 40px;
			border-radius: 50%;
		}
		
		.content{
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin-left: 8px;
			.top,.bottom{
				display: flex;
				align-items: center;
				justify-content: space-between;
				.name{
					
				}
				.msg{
					font-size: 13px;
					width: 235px;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					overflow: hidden;
					color: #8f8f8f;
				}
				.time{
					font-size: 12px;
					color: #bababc;
				}
				.tip{
					font-size: 12px;
					min-width: 16px;
					height: 16px;
					border-radius: 8px;
					background: #d9d9d9;
					color: white;
					line-height:16px;
					text-align: center;
					.num{
						margin: 1px 2px;
					}
				}
			}
		}
	}
</style>