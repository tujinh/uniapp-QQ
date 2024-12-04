<template>
	<view class="content">
		<view class="top">
			<uni-icons class="back" type="left" color="white" size="25"></uni-icons>
			<view class="right">
				<uni-icons type="notification" color="white" class="notice" size="25"></uni-icons>
				<uni-icons type="gear" color="white" class="setting" size="25"></uni-icons>
			</view>
		</view>
		<image class="bg" src="../../static/one.png" mode="aspectFill"></image>
		<view class="main">
			<view class="main-top">
				<image class="avatar" src="../../static/one.png" mode=""></image>
				<view class="right">
					<view class="account">
						<text class="nick">,</text>
						<text class="number">aa号：2095302430</text>
					</view>
					<view class="favor">
						<uni-icons type="hand-up" color="black" class="notice" size="23"></uni-icons>
						<view class="num">18584</view>
					</view>
				</view>
			</view>
			<view class="main-mid">
				<view class="info">
					<view class="detail">
						♂ 男 | 40岁 | 7月13日 巨蟹座 | 现居德国穆尼嗨-索拉卡上界瓦伦 | 来自坦桑哥尼亚巴尔葛朗泰 | 哈哈有限股份公司卢马尼亚传奇
					</view>
					<view class="more">
						<uni-icons type="right" color="#9d9d9f" size="18"></uni-icons>
					</view>
				</view>
				<view class="sign">
					<view class="text">好事多磨</view>
					<view class="more">
						<uni-icons type="right" color="#9d9d9f" size="18"></uni-icons>
					</view>
				</view>
				<view class="space"></view>
			</view>
			<view class="main-bottom">
				<view class="zone">
					<view class="on">
						<uni-icons type="star" color="black" class="z" size="23"></uni-icons>
						<view class="title">
							<view class="name">AA空间</view>
							<view class="right">
								<text class="publish">分享新鲜事</text>
								<uni-icons type="right" color="#9d9d9f" size="18"></uni-icons>
							</view>
						</view>
					</view>
					<view class="pic">
						<image v-for="(item,index) in 4" :key="index" src="../../static/one.png" mode=""></image>
					</view>
				</view>
				<view class="picwall">
					<view class="on">
						<uni-icons type="images" color="black" class="z" size="23"></uni-icons>
						<view class="title">
							<view class="name">精选照片</view>
							<view class="right">
								<uni-icons type="right" color="#9d9d9f" size="18"></uni-icons>
							</view>
						</view>
					</view>
					<view class="pic">
						<image v-for="(item,index) in 4" :key="index" src="../../static/one.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom-btn">
			<MyBtn>个性名片</MyBtn>
			<MyBtn>编辑资料</MyBtn>
			<MyBtn color="blue">发信息</MyBtn>
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
		.bottom-btn{
			width: 100%;
			padding: 13px 15px;
			position: fixed;
			bottom: 0;
			display: flex;
			box-sizing: border-box;
			align-items: center;
			justify-content: space-between;
		}
		.top{
			z-index: 100;
			padding: calc(var(--status-bar-height) + 8px) 10px 0;
			width: 100%;
			position: fixed;
			box-sizing: border-box;
			top: 0;
			left: 0;
			display: flex;
			justify-content: space-between;
			.back,.notice,.setting{
				width: 25px;
				height: 25px;
				border-radius: 50%;
				background: rgba(100,100,100,0.5);
				
			}
			.setting{
				margin-left: 8px;
				margin-right: 5px;
			}
			.right{
				.test{
					width: 25px;
					height: 25px;
					border-radius: 50%;
					background: #bfc1b6;
				}
			}
		}
		.bg{
			width: 100%;
			height: 200px;
		}
		.main{
			z-index: 90;
			background: white;
			position: absolute;
			top: 180px;
			left: 0;
			width: 100%;
			padding: 8px 15px 0;
			border-radius: 20px 20px 0 0;
			box-sizing: border-box;
			.main-top{
				display: flex;
				align-items: center;
				.avatar{
					width: 80px;
					height: 80px;
					border-radius: 50%;
				}
				.right{
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 10px;
					box-sizing: border-box;
					.account{
						display: flex;
						flex-direction: column;
						.nick{
							font-weight: 700;
							margin-left: 3px;
						}
						.number{
							font-size: 12px;
							color: #9d9d9f;
						}
					}
					.favor{
						display: flex;
						flex-direction: column;
						.num{
							font-size: 8px;
							font-weight: 700;
						}
					}
				}
				
			}
			.main-mid{
				margin-top: 15px;
				.space{
					position: absolute;
					left: 0;
					width: 100vw;
					height: 10px;
					background:#f3f2f7 ;
				}
				.info,.sign{
					height: 40px;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.detail{
						font-size: 12px;
						color: #9d9d9f;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					}
					.text{
						font-size: 14px;
					}
					
				}
				
			}
			.main-bottom{
				margin-top: 10px;
				padding-top: 12px;
				.zone{
					margin-bottom: 18px;
				}
				.on{
					display: flex;
					align-items: center;
					.title{
						margin-left: 10px;
						flex: 1;
						display: flex;
						justify-content: space-between;
						.name{
							font-size: 13px;
						}
						.right{
							display: flex;
							align-items: center;
							.publish{
								font-size: 12px;
								color:#2371e6 ;
							}
						}
						
					}
				}
				.pic{
					display: flex;
					justify-content: space-evenly;
					margin-top: 8px;
					image{
						width: 80px;
						height: 80px;
					}
				}
				
			}
		}
		
	}
</style>
