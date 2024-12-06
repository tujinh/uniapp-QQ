<template>
	<view class="list">
		<view class="list-top">
			<image class="avatar" src="../../static/one.png" mode=""></image>
			<view class="info">
				<view class="name">
					梦的回归
				</view>
				<view class="time">
					今天10:36
				</view>
			</view>
			<uni-icons color="#908f94" class="more" type="more-filled"  size="25"></uni-icons>
		</view>
		<view class="list-content">
			梦的回归真的回归了
		</view>
		<view class="list-info">
			<view class="left">
				<view class="see">
					<uni-icons color="#908f94" type="eye"  size="12"></uni-icons>
					<text>浏览60次</text>
				</view>
				<view class="device">
					<uni-icons color="#908f94"  type="calendar"  size="12"></uni-icons>
					<text>OOPP Emkd pro</text>
				</view>
			</view>
			<view class="right">
				<uni-icons color="#908f94"  type="hand-up"  size="28"></uni-icons>
				<uni-icons color="#908f94"  type="chat"  size="28"></uni-icons>
				<uni-icons color="#908f94"  type="redo"  size="28"></uni-icons>
			</view>
		</view>
		<view class="favors">
			<uni-icons  class="favor" type="hand-up-filled"  size="18"></uni-icons>
			<text>梦的回归、梦的回归、梦的回归、梦的回归、梦的回归、梦的回归、梦的回归、梦的回归、梦的回归、梦的回归、梦的回归、梦的回归、</text>
		</view>
		<view class="comment">
			<image class="avatar" src="../../static/one.png" mode=""></image>
			<view class="input">
				<text>说点什么吧...</text>
				<uni-icons color="#908f94"  type="calendar"  size="20"></uni-icons>
			</view>
		</view>
		<view class="space"></view>
	</view>
</template>

<script>
	export default {
		name:"zoneItem",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">
	.list{
		width: 100%;
		padding: 10px 12px ;
		box-sizing: border-box;
		position: relative;
		.space{
			position: absolute;
			left: 0;
			bottom: 0px;
			width: 100vw;
			height: 10px;
			background:#f3f2f7 ;
		}
		.list-top{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.avatar{
				width: 35px;
				height: 35px;
				border-radius: 50%;
			}
			.info{
				margin-left: 8px;
				flex: 1;
				display: flex;
				flex-direction: column;
				.name{
					font-size: 13px;
				}
				.time{
					margin-top: 3px;
					font-size: 11px;
					color: #adadaf;
				}
			}
			.more{
				width: 25px;
				height: 25px;
			}
		}
		.list-content{
			padding: 15px 0;
		}
		.list-info{
			display: flex;
			// align-items: center;
			justify-content: space-between;
			margin-bottom: 12px;
			.left{
				font-size: 11px;
				color: #adadaf;
				text{
					margin-left: 3px;
				}
			}
			.right{
				display: flex;
				margin-top: -5px;
				gap: 10px;
			}
		}
		.favors{
			text{
				font-size: 13px;
			}
		}
		.comment{
			padding: 10px 0 15px;
			display: flex;
			align-items: center;
			.avatar{
				width: 22px;
				height: 22px;
				border-radius: 50%;
				margin-right: 8px;
			}
			.input{
				height: 30px;
				background: #f6f6f6;
				color: #909092;
				border-radius: 3px;
				padding: 5px;
				box-sizing: border-box;
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 13px;
			}
		}
	}
</style>