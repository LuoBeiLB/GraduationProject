<template>
	<view>
		<view class="page">
			<view class="boxs mar" v-for="item in list">
				<view class="flex">
					<view style="display: flex;justify-content: center;align-items: center;">
						<u-avatar :src="item.avatar"></u-avatar>
						<view style="margin-left: 20rpx;">{{item.name}}</view>
					</view>
					<view>
						<u-icon name="more-dot-fill" size="20"></u-icon>
					</view>
				</view>
				<u-line margin="10px"></u-line>
				<view class="mar title u-line-1">
					<view>{{item.title}}</view>
				</view>
				<view class="subtitle u-line-2">
					<view>{{item.content}}</view>
				</view>
				<view class="mar flex">
					<view v-for="item1 in item.images" class="pic" :class="item.images.length==1?'onlyone':''">
						<image :src="item1" mode="widthFill" style="width: 100%;height: 100%;"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					avatar: '/static/tabbar1/man.png',
					name: '萝北',
					content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
					title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
					images: ['/static/tabbar1/man.png', '/static/tabbar1/man.png', '/static/tabbar1/man.png']
				}, {
					avatar: '/static/tabbar1/man.png',
					name: '萝北',
					content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
					title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
					images: ['/static/tabbar1/test (1).jpg', '/static/tabbar1/test (2).jpg',
						'/static/tabbar1/test (3).jpg'
					]
				}, {
					avatar: '/static/tabbar1/man.png',
					name: '萝北',
					content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
					title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
					images: ['/static/tabbar1/test (1).jpg']
				}]
			}
		},
		methods: {

		},
		onLoad() {}
	}
</script>

<style lang="scss">
	.pic {
		width: 225rpx;
		height: 225rpx;
		overflow: hidden;

		&:first-child {
			border-radius: 20rpx 0rpx 0rpx 20rpx;
		}

		&:last-child {
			border-radius: 0rpx 20rpx 20rpx 0rpx;
		}

		&.onlyone {
			border-radius: 20rpx;
		}
	}
</style>
