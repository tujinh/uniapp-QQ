<template>
	<view class="content">
		<topBar>
			<view class="title">动态</view>
			<template #rightbtn>
				<uni-icons type="notification" size="25"></uni-icons>
				<uni-icons type="gear" class="gear" size="25"></uni-icons>
			</template>
		</topBar>
		<PageMain class="main">
			<template #search><view></view></template>
			<view class="main-top">
				<image  class="avatar" src="../../static/one.png" mode=""></image>
				<view class="nick">,</view>
				<uni-icons  type="right" color="#cccccc" class="right" size="17"></uni-icons>
			</view>
			<view class="main-mid" :style="{gridTemplateColumns : `repeat(${column},1fr`}">
				<view class="item" v-for="item in array">
					<uni-icons type="gift" color="#cccccc"  size="25"></uni-icons>
					<text>说说说</text>
				</view>
				<view class="space"></view>
			</view>
			<view class="main-bottom">
				<view class="now">
					<view class="left">
						<uni-icons type="gift" color="#cccccc" size="25"></uni-icons>
						<text>此刻</text>
					</view>
					<view class="right">
						<text>记录此刻，分享快乐</text>
						<uni-icons type="right" color="#cccccc" size="15"></uni-icons>
					</view>
				</view>
				<zoneItem v-for="item in 5"></zoneItem>
			</view>
		</PageMain>
	</view>
	<publish></publish>
</template>

<script setup>
	import {ref,computed} from 'vue'
	let array =ref([])
	array.value.length=7
	let column = computed(()=>{
		if(array.value.length<5){
			return array.value.length
		}else if((array.value.length==5||(array.value.length>8))){
			return 5
		}else{
			return 4
		}
	})
	
</script>

<style lang="scss" scoped>
	.content{
		width: 100vw;
		min-height:100vh;
		background: #f0f4ff;
		position: relative;
		padding-top:calc(var(--status-bar-height) + 45px) ;
		box-sizing: border-box;
		transition: .3s;
		.gear{
			margin-left: 7px;
		}
		.main{
			padding: 18px 0 0;
			box-sizing: border-box;
			.space{
				position: absolute;
				left: 0;
				bottom: 0px;
				width: 100vw;
				height: 10px;
				background:#f3f2f7 ;
			}
			.main-top{
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 18px 18px;
				box-sizing: border-box;
				.avatar{
					width: 54px;
					height: 54px;
					border-radius: 50%;
				}
				.nick{
					flex: 1;
					margin-left: 10px;
				}
				.right{
					width: 25px;
					height: 25px;
					text-align: center;
					line-height: 25px;
				}
			}
			.main-mid{
				width: 100%;
				display: grid;
				// grid-template-columns: repeat(auto-fit,minmax(55px,1fr));
				gap: 10px;
				padding: 0 5px 18px;
				box-sizing: border-box;
				position: relative;
				margin-bottom: 10px;
				.item{
					display: flex;
					flex-direction: column;
					align-items: center;

					text{
						margin-top: 5px;
						font-size: 13px;
					}
				}
			}
			.main-bottom{
				width: 100%;
				padding-top: 15px;
				.now{
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 15px 18px;
					box-sizing: border-box;
					border-bottom: 1px solid #e5e5e5 ;
					.left{
						display: flex;
						align-items: center;
					}
					.right{
						display: flex;
						align-items: center;
						text{
							font-size: 12px;
							color: #8f8e93;
						}
					}
				}
			}
		}
	}
</style>
