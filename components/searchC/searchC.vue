<template>
	<view class="container">
		<view class="wantSearch">
			<view class="me item">
				@我
			</view>
			<view class="item">
				特别关心
			</view>
		</view>
		<view class="relative">
			<view class="title">搜索指定内容</view>
			<view class="types">
				<view class="type" v-for="item in 4">
					<uni-icons class="icon" type="gift" size="23"></uni-icons>
					<text>找人/群</text>
				</view>
			</view>
		</view>
		<view class="recent">
			<view class="title">
				<text>最近搜索</text>
				<uni-icons class="icon" type="gift" size="15"></uni-icons>
			</view>
			<view class="content">
				<view>1</view>
				<view>socket</view>
				<view>uniaqpp</view>
			</view>
		</view>
		<view @click="emit('pageset')" class="set">
			页面设置
		</view>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	const emit =defineEmits(['pageset'])
	// let typeArray = ref([
	// 	{}
	// ])
	
</script>

<style scoped lang="scss">
	.container{
		width: 100%;
		padding: 0 13px;
		height: calc(100vh - var(--status-bar-height) - 62px);
		box-sizing: border-box;
		position: relative;
		.wantSearch{
			display: flex;
			margin-bottom: 18px;
			.me{
				margin-right: 5px;
			}
			.item{
				padding: 2px 5px;
				background: #f6f6f6;
				border-radius: 3px;
				font-size: 12px;
				color: #5d5e60;
			}
		}
		.title{
			font-size: 12px;
			color: #908f94;
			padding: 8px 0;
			border-bottom: 0.5px solid rgba(200,200,200,0.5);
			display: flex;
			justify-content: space-between;
		}
		.relative{
			margin-bottom: 20px;
			.types{
				display: flex;
				justify-content: space-around;
				margin-top: 8px;
				.type{
					display: flex;
					flex-direction: column;
					align-items: center;
					font-size: 13px;
					color: #606163;
				}
			}
		}
		.recent{
			.content{
				margin-top: 8px;
				display: grid;
				grid-template-columns: repeat(2,1fr);
				font-size: 13px;
				color: #606163;
				gap: 13px;
			}
		}
		.set{
			position: absolute;
			bottom: 50px;
			left: 50%;
			transform: translateX(-50%);
			color: #3276d9;
			font-size: 13px;
		}
	}
</style>