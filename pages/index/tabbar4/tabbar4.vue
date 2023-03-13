<template>
	<view>
		<view style="background:linear-gradient(180deg, #5acae6,#fffdfd,40%,#fff);width: 100vw;height: 100vh;">
			<view class="flex" style="justify-content: center;padding-top: 50px;">
				<u-avatar :src="avatarDeafult" size="80"></u-avatar>
			</view>
			<view style="text-align: center; padding-top: 10px;">
				{{name}}
			</view>
			<view style="padding: 30px 20px;">
				<view class="boxs">
					<u-grid col="4">
						<u-grid-item v-for="item in list" @click="navto(item.url)">
							<u-icon :name="item.name" :label="item.label" labelPos="bottom" size="40"></u-icon>
						</u-grid-item>
					</u-grid>
				</view>
			</view>
			<view class="mar">
				<u-button color="#ff0000" customStyle="width:80%"  @click="logout">退出登录</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				avatarDeafult:'/static/man.png',
				name:'小明',
				list:[
					{
						label:'个人信息',
						url:'grzx',
						name:'setting'
					},{
						label:'修改密码',
						url:'xgmm',
						name:'fingerprint'
					},{
						label:'意见反馈',
						url:'yjfk',
						name:'email'
					},{
						label:'上传荣誉',
						url:'scry',
						name:'bookmark'
					}
				]
			}
		},
		methods: {
			getlist(){
				
			},
			logout(){
				uni.reLaunch({
					url:'/pages/index/index'
				})
			}
		},
		onLoad() {
			this.getlist()
		}
	}
</script>

<style>

</style>
