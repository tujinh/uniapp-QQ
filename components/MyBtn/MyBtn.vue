<template>
	<view class="btn" :class="[size,color]">
		<slot>确认</slot>
	</view>
</template>

<script setup>
	const props = defineProps({
		size:{
			type:String,
			default:'common'
		},
		color:{
			type:String,
			default:'white'
		}
	})
</script>

<style lang="scss" scoped>
	.btn{
		border-radius: 3px;
		box-sizing: border-box;
		text-align: center;
	}
	.common{
		width: 105px;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
	}
	.white{
		border: 1px solid rgba(206, 206, 206);
		color: black;
	}
	.blue{
		background:#0099ff ;
		color: white;
	}
</style>