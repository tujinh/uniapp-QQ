<template>
	<view class="content">
		<topBar>
			<template #info>
				<view class="pos">动态</view>
			</template>
			<template #rightbtn>
				<uni-icons type="settings" size="25"></uni-icons>
				<uni-icons class="gear" type="gear" size="25"></uni-icons>
			</template>
		</topBar>
		<PageMain>
			
		</PageMain>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.content{
		width: 100vw;
		height: 100vh;
		background: #f0f4ff;
		position: relative;
		.gear{
			margin-left: 7px;
		}
	}
</style>
