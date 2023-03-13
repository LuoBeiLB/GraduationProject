<template>
	<view>
		<view class="page">
			<view class="boxs mar">
				<u-grid col="4">
					<u-grid-item v-for="item in grid" customStyle="margin-top:40rpx">
						<u-icon :name="item.pic" :label="item.name" labelPos="bottom" size="60"></u-icon>
					</u-grid-item>
				</u-grid>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				grid: [{
					name: '课程表',
					pic:'/static/woman.png'
				}, {
					name: '偶发事件',
					pic:'/static/woman.png'
				}, {
					name: '生情笔记',
					pic:'/static/woman.png'
				}, {
					name: '教育随笔',
					pic:'/static/woman.png'
				}, {
					name: '备忘录',
					pic:'/static/woman.png'
				}]
			}
		},
		methods: {},
		onLoad() {}
	}
</script>

<style>

</style>
