		{
			// https://github.com/easyas314/MMM-ClockDayPhase.git
			module: "MMM-ClockDayPhase",
			position: "top_center",
			classes: "myClockClass",
			config: {
				// The config property is optional.
				// timeFormat: 12 or 24; defaults to config.timeFormat
				displaySeconds: false
				, showPeriod: true // use am/pm with 12 hr format; default true
				, showPeriodUpper: true // upper/lower case; default false
				, showPhase: true // use defined phase name for the time; default true
				, showWeek: true
				, dateFormat: "[Today is\n] dddd, LL" // default "dddd, LL"; from momentjs.com
				/* what are the phases of your 24 clock? */
				, phaseText : {
					// phase-id and display text
					'ad': 'Before Dawn'
					, 'am': 'Morning'
					, 'pa': 'Afternoon'
					, 'pe': 'Evening'
					, 'pn': 'Night'
					, 'w': 'Work Hrs'
					, 'l': 'Lunch'
					}
				/* each of the 24 hrs assiged to a phrase-id */
				, hoursPhase : [
					// phase-id for Hrs [0,1,2,3,4,5]
					'ad','ad','ad','ad','ad','ad',
					// phase-id for Hrs Hrs [6,7,8,9,10,11]
					'am','am','w','w','w','w',
					// phase-id for Hrs Hrs [12,13,14,15,16]
					'l','pa','pa','pa','pa',
					// phase-id for Hrs Hrs p4: [17,18,19,20]
					'pe','pe','pe','pn',
					// phase-id for Hrs Hrs p5: [21,22,23]
					'pn','pn','pn'
					]
			} // end config
		},
