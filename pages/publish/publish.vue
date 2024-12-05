<template>
	<view class="content">
		<topBar>
			<template #info>
				<view class="pos">动态</view>
			</template>
			<template #rightbtn>
				<uni-icons type="tune" size="25"></uni-icons>
				<uni-icons class="gear" type="gear" size="25"></uni-icons>
			</template>
		</topBar>
		<PageMain class="main">
			<view class="part-top">
				<view class="list" hover-class="hover">
					<image :src="publishList[0].img" mode=""></image>
					<view class="right">
						<text class="title">{{publishList[0].title}}</text>
						<uni-icons color="#908f94" type="right" size="18"></uni-icons>
					</view>
				</view>
				<view class="space"></view>
			</view>
			<view class="part-mid" style="margin-top: 10px;" >
				<view  class="list" v-for="item in publishList.slice(1,4)" hover-class="hover">
					<image :src="item.img" mode=""></image>
					<view class="right">
						<text class="title">{{item.title}}</text>
						<uni-icons color="#908f94" type="right" size="18"></uni-icons>
					</view>
				</view>
				<view class="space"></view>
			</view>
			<view style="margin-top: 10px;" class="part-bottom" >
				<view  class="list" v-for="item in publishList.slice(4)" hover-class="hover">
					<image :src="item.img" mode=""></image>
					<view class="right">
						<text class="title">{{item.title}}</text>
						<uni-icons color="#908f94" type="right" size="18"></uni-icons>
					</view>
				</view>
			</view>
			
		</PageMain>
	</view>
</template>

<script setup>
	import { publishList } from '../../common/data';
</script>

<style lang="scss" scoped>
	.hover{
		background: #dddddd;
	}
.content{
	width: 100vw;
	min-height:calc(100vh - 50px);
	background: #f0f4ff;
	position: relative;
	padding-top:calc(var(--status-bar-height) + 45px) ;
	box-sizing: border-box;
		.main{
			min-height: calc(100vh - 95px);
		}
		.gear{
			margin-left: 7px;
		}
		.part-top,.part-mid,.part-bottom{
			width: 100%;
			
		}
		.space{
			position: absolute;
			// bottom: 0;
			left: 0;
			width: 100vw;
			height: 10px;
			background:#f3f2f7 ;
		}
		.list{
			position: relative;
			display: flex;
			width: 100%;
			align-items: center;
			height: 48px;
			padding: 0 18px;
			box-sizing: border-box;
			
			image{
				width: 23px;
				height: 23px;
				border-radius: 5px;
			}
			.right{
				font-size: 16px;
				margin-left: 8px;
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
		}
	}
</style>
