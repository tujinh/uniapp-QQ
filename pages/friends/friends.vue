<template>
	<view class="content">
		<topBar>
			<template #info>
				<view class="pos">联系人</view>
			</template>
			<template #rightbtn>
				<uni-icons type="personadd" size="25"></uni-icons>
			</template>
		</topBar>
		<PageMain class="main">
			<view class="wantKnow">
				<view class="title">
					<text class="text">可能想认识的人</text><uni-icons color="#908f94" type="right" size="18"></uni-icons>
				</view>
				<friendItem avatarSize="mid"></friendItem>
				<friendItem avatarSize="mid"></friendItem>
			<view class="space"></view>
			</view>
			<view class="notice">
				<view class="notice-item">
					<text>新朋友</text><uni-icons color="#908f94" type="right" size="18"></uni-icons>
				</view>
				<view class="notice-item">
					<text>群通知</text><uni-icons color="#908f94" type="right" size="18"></uni-icons>
				</view>
				<view class="space"></view>
			</view>
			<view class="group">
				<view class="choose" @click="test">
					<view  v-for="(item,index) in chooseList" :id="index" :class="[{choosed:choosedId==index},'item'+index]">{{item}}</view>
					<view class="underline" :style="{width:underlineWidth+'px',left:offsetLeft+'px'}"></view>
				</view>
				<view class="users">
					<friendItem avatarSize="mid"></friendItem>
					<friendItem avatarSize="mid"></friendItem>
				</view>
			</view>
		</PageMain>
	</view>
</template>

<script setup>
	import {ref,onMounted,getCurrentInstance } from 'vue'
	
	//选择类型
	let offsetLeft = ref(0) //左移
	let choosedId = ref(1) //所选类型id
	let underlineWidth = ref(32) //下划线宽度
	const instance = getCurrentInstance();
	const query = uni.createSelectorQuery().in(instance.proxy);
	onMounted(()=>{
		query
		  .select(".item1")
		  .boundingClientRect((data) => {
			  console.log(data)
			offsetLeft.value = data.left
		  })
		  .exec();
	})
	let chooseList =['好友','分组','群聊','频道','设备','通讯录']
	
	
	const test=(e)=>{
		if(e.target.id==''||e.target.id==choosedId.value){
			return
		}
		if(e.target.id=='5'){
			underlineWidth.value=48
		}else{
			underlineWidth.value=32
		}
		choosedId.value = e.target.id
		console.log(e.target.offsetLeft)
		offsetLeft.value=e.target.offsetLeft
	}
</script>

<style lang="scss" scoped>
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
		.space{
			position: absolute;
			left: 0;
			width: 100vw;
			height: 10px;
			background:#f3f2f7 ;
		}
		.wantKnow{
			width: 100%;
			margin-bottom: 10px;
			.title{
				padding: 0 13px;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.text{
					font-size: 13px;
					color: #908f94;
				}
			}
		}
		.notice{
			width: 98%;
			height: 100px;
			margin-bottom: 10px;
			.notice-item{
				padding: 0 13px;
				box-sizing: border-box;
				height: 50px;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
		}
		.group{
			width: 100%;
			padding-top: 18px;
			box-sizing: border-box;
			.choose{
				position: relative;
				width: 98%;
				display: flex;
				align-items: center;
				justify-content: space-around;
				margin-bottom: 10px;
				box-sizing: border-box;
				padding: 0 10px;
				.choosed{
					color: #0099ff;
				}
				.underline{
					position: absolute;
					left: 0px;
					bottom: -5px;
					// width: 32px;
					height: 2px;
					background: #0099ff;
					transition: .2s;
				}
			}
			
			
		}
	}
</style>
