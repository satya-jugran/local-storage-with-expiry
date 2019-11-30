var localStore = function(key) {
	var retention_period = 60*60*1000; // 1 hour

	var get = function() {
		var prevValue = JSON.parse(window.localStorage.getItem(key) || "{}");
		if(Object.keys(prevValue).length > 0) {
			if(Date.now() - prevValue.timestamp > retention_period) {
				window.localStorage.removeItem(key);
				return null;
			} else {
				return prevValue.value;
			}
		} else {
			return null;
		}
	};
	
	var set = function(value) {
		var storeData = {
			timestamp: Date.now(),
			key : key,
			value : value || ""
		};
		window.localStorage.setItem(key, JSON.stringify(storeData));
	};

	var remove = function() {
		var item = getItem();
		if(item) {
			window.localStorage.removeItem(key);
		}
	}

	return {
		get: get,
		set : set,
		remove: remove
	}
};
