<template>
	<view>
		<view style="width: 100vw;height: 100vh;background-color:#fffdfd ;">
			<view style="height: 40vh;width: 100%;justify-content: center;" class="flex">
				<u-image src="/static/login.png"></u-image>
			</view>
			<view class="mar" style="position: absolute;bottom: 50%;width: 100%;">
				<u-button customStyle="width:80%" @click="swito('tabbar1/tabbar1')">直接体验</u-button>
			</view>
			<view class="mar" style="position: absolute;bottom: 40%;width: 100%;">
				<u-button :plain="true" customStyle="width:80%">快捷登录</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	
</style>
