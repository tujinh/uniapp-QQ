<template>
	<view class="content">
		<image class="bg" src="../../static/one.png" mode="aspectFill"></image>
		<view class="top" :style="{background:`rgba(240,244,255,${topopacity})`}">
			<uni-icons :class="[changeColor?'change':'icon']" :color="changeColor?'black':'white'"  type="left"  size="20"></uni-icons>
			<view class="set">
				<uni-icons :class="[changeColor?'change':'icon']" :color="changeColor?'black':'white'"  type="search"  size="20"></uni-icons>
				<uni-icons :class="[changeColor?'change':'icon']" :color="changeColor?'black':'white'"  type="gear"  size="20"></uni-icons>
				<uni-icons :class="[changeColor?'change':'icon']" :color="changeColor?'black':'white'"type="more-filled"  size="20"></uni-icons>
			</view>
		</view>
		<view class="userinfo">
			<image class="avatar" src="../../static/one.png" mode=""></image>
			<view class="info">
				<text class="nick">,</text>
				<text class="number">AA号 2095302430</text>
			</view>
		</view>
		<view class="main">
			<view class="type">
				<view class="item" v-for="item in typeArray">
					<text class="num">{{item.num}}</text>
					<text class="name">{{item.type}}</text>
				</view>
			</view>
			<view class="function">
				<view class="item" v-for="item in 3">
					<uni-icons class="icon" color="blue"  type="gift"  size="23"></uni-icons>
					<text class="title">我的好友</text>
					<uni-icons class="detail" color="#909092"  type="right"  size="15"></uni-icons>
				</view>
				<view class="more">
					<uni-icons class="down" color="black"  type="down"  size="18"></uni-icons>
					<text class="title">更多功能</text>
					<view class="space"></view>
				</view>
			</view>
			<view class="bottom">
				<view class="list" v-for="item in 5">
					<view class="time">
						<text class="date">2024年7月</text>
						<uni-icons class="calendar" color="black"  type="calendar"  size="18"></uni-icons>
					</view>
					<zoneItem></zoneItem>
				</view>
			</view>
		</view>
	</view>
	<publish class="addbtn"></publish>
</template>

<script setup>
	import {ref} from 'vue'
	import {onPageScroll} from '@dcloudio/uni-app'
	let changeColor = ref(false)
	let topopacity = ref(0)
	onPageScroll((e)=>{
		if(e.scrollTop>90){
			changeColor.value = true
			topopacity.value =0.3+ 0.7/65*(e.scrollTop-90)
		}else{
			topopacity.value=0
			changeColor.value = false
		}
	})
	let typeArray = ref([
		{type:'说说',num:170},
		{type:'日志',num:0},
		{type:'相册',num:0},
		{type:'留言',num:13},
		{type:'访客',num:11761},
		
	])
</script>

<style lang="scss" scoped>
	.addbtn{
		bottom: 70px;
	}
	.content{
		width: 100vw;
		min-height: 100vh;
		position: relative;
		.bg{
			width: 100%;
			height: 290px;
		}
		.userinfo{
			width: 100%;
			display: flex;
			align-items: center;
			position: absolute;
			top: 165px;
			padding: 0 20px;
			box-sizing: border-box;
			.avatar{
				width: 59px;
				height: 59px;
				border-radius: 50%;
			}
			.info{
				margin-left: 15px;
				flex: 1;
				display: flex;
				flex-direction: column;
				color: white;
				.nick{
					margin-left: 2px;
					margin-bottom: 5px;
				}
				.number{
					font-size: 13px;
				}
			}
		}
		.main{
			position: absolute;
			top: 245px;
			width: 100%;
			border-radius: 25px 25px 0 0;
			background: white;
			padding: 20px 0 0;
			box-sizing: border-box;
			.type{
				padding: 0 25px;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.item{
					display: flex;
					flex-direction: column;
					align-items: center;
					.num{
						font-weight: 700;
					}
					.name{
						font-size: 13px;
						color:#909092 ;
					}
					
				}
			}
			.function{
				width: 100%;
				margin-top: 13px;
				.item{
					padding: 0 18px;
					box-sizing: border-box;
					width: 100%;
					height: 50px;
					display: flex;
					align-items: center;
					justify-content: space-between;
					border-bottom: 0.3px solid rgba(230,230,230,0.5);
					.title{
						flex: 1;
						margin-left: 10px;
					}
					.icon,.detail{
						width: 25px;
						height: 25px;
						text-align: center;
						line-height: 25px;
					}
				}
				.more{
					display: flex;
					margin-top: 15px;
					align-items: center;
					justify-content: center;
					padding-bottom: 30px;
					position: relative;
					.space{
						position: absolute;
						left: 0;
						bottom: 0px;
						width: 100vw;
						height: 10px;
						background:#f3f2f7 ;
					}
					.title{
						font-size: 12px;
						color:black ;
					}
				}
			}
			.bottom{
				padding-top: 13px;
				.time{
					padding: 0 12px 2px;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					justify-content: space-between;
					color:#8f8e93 ;
				}
			}
		}
		.top{
			z-index: 100;
			padding: calc(var(--status-bar-height) + 10px) 15px 10px;
			width: 100%;
			position: fixed;
			box-sizing: border-box;
			top: 0;
			left: 0;
			display: flex;
			justify-content: space-between;
			.set{
				display: flex;
				gap: 8px;
			}
			.icon{
				width: 25px;
				height: 25px;
				border-radius: 50%;
				background: rgba(180,180,180,0.3);
				text-align: center;
				line-height: 25px;
			}
			.change{
				width: 25px;
				height: 25px;
				text-align: center;
				line-height: 25px;
			}
		}
	}
</style>
