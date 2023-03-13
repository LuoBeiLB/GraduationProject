<template>
	<view>
		<view class="page">
			<view class="boxs mar">
				<u-input placeholder="输入班级" suffixIcon="search" @blur="search">
				</u-input>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				
			}
		},
		methods: {
			search(e){
				console.log(e);
			}
		},
		onLoad() {}
	}
</script>

<style>

</style>
