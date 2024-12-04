<template>
	<view class="content">
		<topBar class="tb" :style="{top:-moveTop+'px'}">
			<template #info>
				<view class="nick">,</view>
				<view class="status">
					<view class="dot"></view>
					<view class="device">手机在线-WiFi <uni-icons type="right" size="9"></uni-icons></view>
				</view>
			</template>
			<template #rightbtn>
				<uni-icons type="gift" size="25"></uni-icons>
				<uni-icons class="plus" type="plusempty" size="25"></uni-icons>
			</template>
		</topBar>
		<PageMain class="main" @search="search" @touchstart="touchstart" @touchend="touchend" @touchmove="touchmove" :style="{transform:`translateY(-${moveTop}px)`}">
			<view class="friend-list" v-show="!isSearch">
				<friendItem v-for="item in 10"></friendItem>
			</view>
		</PageMain>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	import {onBackPress} from '@dcloudio/uni-app'
	onBackPress(()=>{
		isSearch.value=false
		moveTop.value=0
	})
	let isSearch = ref(false)
	let moveTop = ref(0)
	const search =()=>{
		isSearch.value = true
		moveTop.value = 45
	}
	const touchstart=(e)=>{
		// console.log('statr',e.touches[0])
	}
	const touchend =(e)=>{
		// console.log('end',e.changedTouches[0])
	}
	const touchmove=e=>{
		// console.log('move',e)
	}
	//2
</script>

<style lang="scss" scoped>
	.content{
		width: 100vw;
		min-height:calc(100vh - 50px);
		background: #f0f4ff;
		position: relative;
		padding-top:calc(var(--status-bar-height) + 45px) ;
		box-sizing: border-box;
		.tb,.main{
			transition: .3s;
		}
		.plus{
			margin-left: 7px;
		}
		.friend-list{
			width: 100%;
		}
		.nick{
			padding-left: 1px;
		}
		.status{
			display: flex;
			align-items: center;
			.dot{
				width: 9px;
				height: 9px;
				border-radius: 50%;
				background: #1de583;
				margin-right: 5px;
			}
			.device{
				font-size: 9px;
			}
		}
			
	}
	
		
	
</style>
