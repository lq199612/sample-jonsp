let id = 0
const noop = function(){}
const jsonp = function (url, option, fn) {
		if(typeof option == 'Fuction'){
			fn =  option
			option = {}
		}
		option = option || {}
		option.callfn = option.callfn || 'jsonpCallback'
		option.time = option.time || 6000
		const target = document.getElementsByTagName('script')[0] || document.head
		let script
		let _id = `jsonp_${id++}`
		
		const timer = setInterval(()=>{
				clear()
				if(fn) fn(new Error('time out!'))
		}, option.time)

		const clear = function () {
				if (script.parentNode) {
					script.parentNode.removeChild(script)
				} 
				window[_id] = noop
				clearInterval(timer)
		}

		window[_id] = function (data) {
				clear()
				if(fn) fn(null, data)
		}
		
		script = document.createElement('script')
		script.src = url += (~url.includes('?') ? '?':'&') + option.callfn + '=' + encodeURIComponent(_id)
		console.log('url', script.src);
		
		target.parentNode.insertBefore(script, target)
}

export default jsonp