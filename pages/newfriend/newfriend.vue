<template>
	<view class="content">
		<commontb>
			<template #mid>
				新朋友
			</template>
			<template #right>
				添加
			</template>
		</commontb>
		<view class="main">
			<view class="part-top">
				<view class="notice">
					好友通知
				</view>
				<view class="apply-list">
					<friendItem class="list" v-for="item in 5"></friendItem>
				</view>
				<view class="more">
					<text>查看更多</text>
					<uni-icons color="#908f94"  type="right" size="15"></uni-icons>
				</view>
				<view class="space"></view>
			</view>
			<view class="part-bottom">
				<view class="notice">
					你可能认识他们
				</view>
				<view class="apply-list">
					<friendItem class="list" v-for="item in 5"></friendItem>
				</view>
				<view class="more">
					<text>查看更多</text>
					<uni-icons color="#908f94"  type="right" size="15"></uni-icons>
				</view>
			</view>
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
	.main{
		width: 100%;
		background: white;
		position: absolute;
		top: calc(var(--status-bar-height) + 46px) ;
		.part-top{
			padding: 18px 0 0;
			width: 100%;
			box-sizing: border-box;
			// padding-bottom: 8px;
			position: relative;
			.space{
				position: absolute;
				left: 0;
				width: 100vw;
				height: 10px;
				background:#f3f2f7 ;
			}
		}
		.part-bottom{
			margin-top: 10px;
			padding: 18px 0 0;
			width: 100%;
			box-sizing: border-box;
		}
		.notice{
			padding: 0 15px 8px;
			font-size: 14px;
		}
		.more{
			font-size: 13px;
			color: #908f94;
			text-align: center;
			padding-bottom: 8px;
		}
		.apply-list{
			.list{
				margin-bottom: 5px;
			}
		}
		
	}
</style>
