<template>
	<view class="search" @click="emit('search')">
		<view class="input">
			<uni-icons class="icon-search" color="#7f8082" type="search" size="18"></uni-icons><slot></slot>
		</view>
	</view>
</template>

<script>
	
</script>

<style scoped lang="scss">
	.search{
		width: 100%;
		padding: 0 13px 18px;
		box-sizing: border-box;
		.input{
			// margin: 0 13px 18px;
			box-sizing: border-box;
				height: 32px;
				width: 100%;
				background:#f5f8ff ;
				border-radius: 5px;
				text-align: center;
				line-height: 32px;
				color: #7f8082;
				// margin-bottom: 18px;
				.icon-search{
					margin-right: 3px;
				}
			}
	}
</style>