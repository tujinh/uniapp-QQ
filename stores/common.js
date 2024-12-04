import {defineStore} from 'pinia'
import {ref} from 'vue'
export const useCommonStore = defineStore('common',()=>{
	let pageHeight = uni.getSystemInfoSync().windowHeight
	let statusBar = uni.getSystemInfoSync().safeAreaInsets
	return {
		pageHeight,
		statusBar
	}
})