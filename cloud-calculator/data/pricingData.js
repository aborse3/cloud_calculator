export const regions = [{
		"key": 0,
		"label": "US"
	}, {
		"key": 1,
		"label": "ASIA-PACIFIC"
	}, {
		"key": 2,
		"label": "EUROPE"
	}, {
		"key": 3,
		"label": "SOUTH AMERICA"
	}]

export const machineTypesAWS =  [{
		"key": 0,
		"label": "t2.large"
	}, {
		"key": 1,
		"label": "t2.xlarge"
	}, {
		"key": 2,
		"label": "t2.2xlarge"
	}, {
		"key": 3,
		"label": "m5.4xlarge"
	}]

export const machineTypesGCP = [{
		"key": 0,
		"label": "n1-standard-2"
	}, {
		"key": 1,
		"label": "n1-standard-4"
	}, {
		"key": 2,
		"label": "n1-standard-8"
	}, {
		"key": 3,
		"label": "n1-standard-16"
	}]

export const operatingSystems = [{
		"key": 0,
		"label": "Linux"
	}, {
		"key": 1,
		"label": "Windows"
	}]

export const	pricingAWS = {
		"US": {
			"t2.large": {
				"Linux": 0.0928,
				"Windows": 0.1208
			},
			"t2.xlarge": {
				"Linux": 0.1856,
				"Windows": 0.2266
			},
			"t2.2xlarge": {
				"Linux": 0.3712,
				"Windows": 0.4332
			},
			"m5.4xlarge": {
				"Linux": 0.768,
				"Windows": 1.504
			}
		},
		"ASIA-PACIFIC": {
			"t2.large": {
				"Linux": 0.1168,
				"Windows": 0.1448
			},
			"t2.xlarge": {
				"Linux": 0.2336,
				"Windows": 0.2746
			},
			"t2.2xlarge": {
				"Linux": 0.4672,
				"Windows": 0.5292
			},
			"m5.4xlarge": {
				"Linux": 0.96,
				"Windows": 1.696
			}
		},
		"EUROPE": {
			"t2.large": {
				"Linux": 0.1072,
				"Windows": 0.1352
			},
			"t2.xlarge": {
				"Linux": 0.2144,
				"Windows": 0.2554
			},
			"t2.2xlarge": {
				"Linux": 0.4288,
				"Windows": 0.4908
			},
			"m5.4xlarge": {
				"Linux": 0.92,
				"Windows": 1.656
			}
		},
		"SOUTH AMERICA": {
			"t2.large": {
				"Linux": 0.1488,
				"Windows": 0.1768
			},
			"t2.xlarge": {
				"Linux": 0.2976,
				"Windows": 0.3386
			},
			"t2.2xlarge": {
				"Linux": 0.5952,
				"Windows": 0.6572
			},
			"m5.4xlarge": {
				"Linux": 1.224,
				"Windows": 1.96
			}
		}
	}

export const pricingGCP = {
		"US": {
			"n1-standard-2": {
				"Linux": 0.11,
				"Windows": 0.19
			},
			"n1-standard-4": {
				"Linux": 0.21,
				"Windows": 0.37
			},
			"n1-standard-8": {
				"Linux": 0.43,
				"Windows": 0.75
			},
			"n1-standard-16": {
				"Linux": 0.86,
				"Windows": 1.50
			}
		},
		"ASIA-PACIFIC": {
			"n1-standard-2": {
				"Linux": 0.12,
				"Windows": 0.20
			},
			"n1-standard-4": {
				"Linux": 0.23,
				"Windows": 0.39
			},
			"n1-standard-8": {
				"Linux": 0.47,
				"Windows": 0.79
			},
			"n1-standard-16": {
				"Linux": 0.96,
				"Windows": 1.58
			}
		},
		"EUROPE": {
			"n1-standard-2": {
				"Linux": 0.12,
				"Windows": 0.20
			},
			"n1-standard-4": {
				"Linux": 0.24,
				"Windows": 0.40
			},
			"n1-standard-8": {
				"Linux": 0.49,
				"Windows": 0.81
			},
			"n1-standard-16": {
				"Linux": 0.98,
				"Windows": 1.62
			}
		},
		"SOUTH AMERICA": {
			"n1-standard-2": {
				"Linux": 0.15,
				"Windows": 0.23
			},
			"n1-standard-4": {
				"Linux": 0.30,
				"Windows": 0.46
			},
			"n1-standard-8": {
				"Linux": 0.60,
				"Windows": 0.92
			},
			"n1-standard-16": {
				"Linux": 1.21,
				"Windows": 1.85
			}
		}
	}

	export const instanceMapping = {
		"t2.large" : "n1-standard-2",
		"t2.xlarge" : "n1-standard-4",
		"t2.2xlarge" : "n1-standard-8",
		"m5.4xlarge" : "n1-standard-16",
		"n1-standard-2": "t2.large",
		"n1-standard-4": "t2.xlarge",
		"n1-standard-8": "t2.2xlarge",
		"n1-standard-16": "m5.4xlarge",
	}
