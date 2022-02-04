let headers = {
	"Content-Type": "aplication/json",
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "*",
	"Access-Control-Request-Method": "*",
	"Access-Control-Allow-Headers": "*",
	"Access-Control-Allow-Credentials": true,
};

exports.success = (response, message, callback) => {
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({
			status: 200,
			message: message,
			data: response,
		}),
		headers: headers,
	});
};
exports.existing = (response, message, callback) => {
	callback(null, {
		statusCode: 214,
		body: JSON.stringify({
			status: 200,
			message: message,
			data: response,
		}),
		headers: headers,
	});
};

exports.failed = (response, message, callback) => {
	callback(null, {
		statusCode: 201,
		body: JSON.stringify({
			status: 200,
			message: message,
			data: response,
		}),
		headers: headers,
	});
};

exports.empty = (response, message, callback) => {
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({
			status: 200,
			message: message,
			data: response,
		}),
		headers: headers,
	});
};

exports.successAsync = (response, message) => {
	return {
		statusCode: 200,
		body: JSON.stringify({
			code: 1000,
			data: response,
			message: message || "OK",
		}),
		isBase64Encoded: false,
		headers: headers,
	};
};
exports.failedAsync = (code, response, message, err) => {
	return {
		statusCode: 200,
		body: JSON.stringify({
			code: code,
			data: response,
			error: err || null,
			message: message || "OK",
		}),
		isBase64Encoded: false,
		headers,
	};
};

