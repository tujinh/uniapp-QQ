<template>
	<view class="content">
		<view class="top">
			<view class="clock-in">
				<uni-icons type="calendar" color="white" size="20"></uni-icons>
				<view class="text">
					今天还没打卡哦
				</view>
			</view>
			<uni-icons class="close" type="closeempty" color="white" size="20"></uni-icons>
		</view>
		<image class="bg" src="../../static/one.png" mode="aspectFill"></image>
		<view class="main">
			<view class="main-top">
				<image class="avatar" src="../../static/one.png" mode=""></image>
				<view class="info">
					<text class="nick">,</text>
					<text class="sign">好事多模</text>
				</view>
				<view class="change">
					<text class="text">切换账号</text>
					<uni-icons type="down" size="12"></uni-icons>
				</view>
			</view>
			<view class="main-bottom">
				<view class="list" v-for="(item,index) in 9" :key="index" >
					<uni-icons class="preicon"  type="color-filled" size="20"></uni-icons>
					<text class="title">测试列表</text>
					<uni-icons class="more" type="right" color="#909092" size="15"></uni-icons>
				</view>
			</view>
		</view>
		<view class="fixed-bottom">
			<view class="setting">
				<uni-icons  type="gear" size="20"></uni-icons>
				<text class="name">设置</text>
			</view>
			<view class="night">
				<uni-icons type="home"  size="20"></uni-icons>
				<text class="name">夜间</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	.content{
		width: 100vw;
		height: 100vh;
		position: relative;
		.bg{
			width: 100%;
			height: 200px;
		}
		.top{
			z-index: 100;
			padding-top: calc(var(--status-bar-height) + 10px) ;
			padding-left: 10px;
			padding-bottom: 10px;
			padding-right: 10px;
			width: 100%;
			position: fixed;
			box-sizing: border-box;
			top: 0;
			left: 0;
			display: flex;
			justify-content: space-between;
			.clock-in{
				display: flex;
				align-items: center;
				border-radius: 15px;
				color: white;
				background: rgba(209, 209, 209, 0.5);
				padding: 3px 5px;
				box-sizing: border-box;
				.text{
					font-size: 13px;
				}
			}
			.close{
				width: 25px;
				height: 25px;
				background: rgba(209, 209, 209, 0.5);
				border-radius: 50%;
				line-height: 25px;
			}
		}
		.main{
			z-index: 90;
			background: white;
			position: absolute;
			top: 180px;
			left: 0;
			width: 100%;
			height: 100vh;
			padding: 22px 15px 0;
			border-radius: 20px 20px 0 0;
			box-sizing: border-box;
			background:#f3f2f7 ;
			.main-top{
				display: flex;
				align-items: center;
				margin-bottom: 10px;
				.avatar{
					width: 54px;
					height: 54px;
					border-radius: 50%;
					border: 2px solid white;
				}
				.info{
					flex: 1;
					margin-left: 10px;
					display: flex;
					flex-direction: column;
					.nick{
						margin-left: 2px;
						margin-bottom: 5px;
						font-size: 20px;
					}
					.sign{
						font-size: 12px;
						color: #8f8e93;
					}
				}
				.change{
					width: 60px;
					height: 60px;
					margin-right: 0;
					display: flex;
					align-items: center;
					.text{
						font-size: 12px;
					}
				}
			}
			.main-bottom{
				background: white;
				border-radius: 5px;
				padding: 0 15px;
				box-sizing: border-box;
				.list{
					width: 100%;
					height: 48px;
					display: flex;
					align-items: center;
					.title{
						flex: 1;
						margin-left: 12px;
					}
					.preicon,.more{
						width: 20px;
						height: 20px;
					}
				}
			}
		}
		.fixed-bottom{
			position: fixed;
			bottom: 10px;
			padding: 0 20px;
			box-sizing: border-box;
			z-index: 99;
			display: flex;
			background: #f3f2f7;
			width: 100%;
			.setting,.night{
				display: flex;
				flex-direction: column;
				font-size: 13px;
				margin-right: 35px;
			}
		}
	}
</style>