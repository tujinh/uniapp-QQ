<template>
	<view class="content">
		<commontb>
			<template #mid>
				<view class="find">
					<view @click="type=0" :class="{choosed:type==0}" class="people type ">找人</view>
					<view @click="type=1" :class="{choosed:type==1}" class="group type">找群</view>
				</view>
			</template>
		</commontb>
		<view class="main">
			<search>
				AA号/QID/手机号/群
			</search>
			<view class="ways">
				<view class="item" v-for="item in 7">
					<uni-icons   type="search" size="20"></uni-icons>
					<text>条件查找</text>
				</view>
			</view>
			<view class="mayknow">
				<view class="title">
					<view class="left">可能想认识的人</view>
					<view class="right">
						<text>查看更多</text>
						<uni-icons color="#8f8f8f"  type="right" size="15"></uni-icons>
					</view>
				</view>
				<view class="list">
					<friendItem class="fi" v-for="item in 10"></friendItem>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	let type = ref(0)
</script>

<style scoped lang="scss">
	.content{
		width: 100%;
		min-height:100vh ;
		background: #f0f4ff;
		position: relative;
		.find{
			display: flex;
			.type{
				border: 1px solid black;
				padding: 3px 8px;
				font-size: 13px;
				transition: .3s;
			}
			.people{
				border-radius: 3px 0 0 3px;
			}
			.group{
				border-radius:  0 3px 3px 0;
			}
			.choosed{
				color: white;
				background: black;
			}
		}
		.main{
			width: 100%;
			background: white;
			position: absolute;
			top: calc(var(--status-bar-height) + 45px);
			padding-top: 18px;
			box-sizing: border-box;
			.ways{
				display: grid;
				grid-template-columns: repeat(4, 1fr);
				gap: 15px;
				padding: 0 18px;
				margin-bottom: 20px;
				.item{
					display: flex;
					flex-direction: column;
					align-items: center;
					text{
						margin-top: 8px;
						font-size: 11px;
					}
				}
			}
			.mayknow{
				.title{
					display: flex;
					align-items: center;
					justify-content: space-between;
					box-sizing: border-box;
					padding: 0 10px 5px 13px;
					border-bottom: 1px solid rgb(230,230,230);
					.left{
						font-size: 12px;
					}
					.right{
						font-size: 10px;
						display: flex;
						align-items: center;
						color: #8f8f8f;
					}
				}
				.list{
					.fi{
						padding: 0 15px;
					}
				}
			}
			
		}
	}
</style>
