<template>
	<view class="content" :style="{transform:`scale(${contentscale})`}">
		<topBar @popLeft="popLeft" class="tb" :style="{top:-moveTop+'px'}">
			<template #info>
				<view class="nick">,</view>
				<view class="status">
					<view class="dot"></view>
					<view class="device">手机在线-WiFi <uni-icons type="right" size="9"></uni-icons></view>
				</view>
			</template>
			<template #rightbtn>
				<uni-icons type="gift" size="25"></uni-icons>
				<uni-icons @click="handleAddPop" class="plus" type="plusempty" size="25"></uni-icons>
			</template>
		</topBar>
		<PageMain class="main" @search="search" @touchstart="touchstart" @touchend="touchend" @touchmove="touchmove" :style="{transform:`translateY(-${moveTop}px)`}">
			<view class="friend-list" v-show="!isSearch">
				<friendItem v-for="item in 10"></friendItem>
			</view>
		</PageMain>
	</view>
	<view class="addpop" :style="{transform:`scale(${scale})`}">
		<view class="item" v-for="item in 6">
			<uni-icons class="icon" type="gift" size="25"></uni-icons>
			<text>创建频道</text>
		</view>
	</view>
	<view @click="clickCover" v-show="showCover" class="cover" :style="{opacity:coveropacity}"></view>
	<LeftPop @touchstart="popstart" @touchend="popend" @touchmove="popmove" class="leftpop" :style="{transform:`translateX(${moveRight}px)`}"></LeftPop>
</template>

<script setup>
	import {ref,watch} from 'vue'
	import {onBackPress} from '@dcloudio/uni-app'
	let scale = ref(0)
	let contentscale = ref(1)
	let coveropacity = ref(0)
	let {windowWidth} = uni.getSystemInfoSync()
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
	let showCover = ref(false)
	let csx,sx,sy,st
	let toRight=ref(true)
	let moveRight = ref(0)
	let moveDown = ref(0)
	let movecount = 0
	watch(moveRight,(newValue)=>{
		if(newValue!=0){
			uni.hideTabBar()
			showCover.value = true
			contentscale.value =1-(0.07/windowWidth*moveRight.value)
			coveropacity.value = 0.3/windowWidth*moveRight.value
		}else{
			uni.showTabBar()
			showCover.value = false
			contentscale.value=1
			coveropacity.value=0
		}
	})
	const touchstart=(e)=>{
		st = e.timeStamp
		csx = sx = e.touches[0].clientX
		sy = e.touches[0].clientY

	}
	const touchmove=e=>{
		let offsetX = e.touches[0].clientX-sx
		let offsetY = e.touches[0].clientY-sy
		if((moveRight.value==0)&&(offsetX<0)){
			return
		}
		if(movecount==0){
			if((Math.abs(offsetY))>(Math.abs(offsetX))){
				toRight.value= false
			}
			movecount=1
		}
		if(toRight.value){
			moveRight.value += offsetX
			sx = e.touches[0].clientX
			sy = e.touches[0].clientY
		}
	
	}
	const touchend =(e)=>{
		if(toRight.value){
			if(e.timeStamp-st<700){
				if(e.changedTouches[0].clientX-csx>0){
					moveRight.value=windowWidth
				}
			}else{
				if(moveRight.value<windowWidth/2){
					moveRight.value = 0
				}else{
					moveRight.value = windowWidth
				}
			}	
		}
		toRight.value = true
		movecount=0
	}

	const popstart=(e)=>{
		st = e.timeStamp
		csx = sx = e.touches[0].clientX
		sy = e.touches[0].clientY
	}
	const popmove=e=>{
		let offsetX = e.touches[0].clientX-sx
		let offsetY = e.touches[0].clientY-sy
		if((moveRight.value==windowWidth)&&(offsetX>0)){
			return
		}
		if(movecount==0){
			if((Math.abs(offsetY))>(Math.abs(offsetX))){
				toRight.value= false
			}
			movecount=1
		}
		if(toRight.value){
			moveRight.value += offsetX
			if(moveRight.value>windowWidth){
				moveRight.value = windowWidth
				return
			}
			sx = e.touches[0].clientX
		}
		
	}
	const popend =(e)=>{
		if(toRight.value){
			if(e.timeStamp-st<700){
				if(e.changedTouches[0].clientX-csx<0){
					moveRight.value=0
				}
			}else{
				if(moveRight.value<windowWidth/2){
					moveRight.value = 0
				}else{
					moveRight.value = windowWidth
				}
			}
		}
		toRight.value = true	
		movecount=0
	}
	
	const popLeft = ()=>{
		moveRight.value = windowWidth
	}
	
	const handleAddPop = ()=>{
		if(!showCover.value){
			showCover.value = true
			coveropacity.value=0.3
			scale.value=1
		}
	}
	
	const clickCover = ()=>{
		showCover.value = false

		scale.value=0
	}

	//2
</script>




<style>
	page{
		width: 100vw;
		height: 100vh;
		background: #f0f4ff;
	}
</style>
<style lang="scss" scoped>
	.cover{
		z-index: 1000;
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		background: rgb(157, 157, 157);
		transition: .3s;
	}
	.addpop{
		z-index: 2000;
		width: 160px;
		height:276px;
		border-radius: 5px;
		position: absolute;
		top: calc(var(--status-bar-height) + 57px);
		right: 5px;
		background: white;
		padding: 15px 20px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		transform-origin: 90% top;
		transition: .3s;
		.item{
			display: flex;
			align-items: center;
			.icon{
				margin-right: 8px;
			}
		}
		&::before{
			position: absolute;
			content: '';
			top: -20px;
			right: 13px;
			border-width: 11px;
			border-style: solid;
			border-color: transparent transparent white transparent; 
		}
	}
	.leftpop{
		position: fixed;
		top: 0;
		left: -100%;
		z-index: 1000;
		transition: .3s;
	}
	.content{
		width: 100vw;
		min-height:100vh;
		background: #f0f4ff;
		position: relative;
		padding-top:calc(var(--status-bar-height) + 45px) ;
		box-sizing: border-box;
		transition: .3s;
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
