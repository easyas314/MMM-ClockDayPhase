# Module: MMM-ClockDayPhase

Based on the clock module By Michael Teeuw http://michaelteeuw.nl
MIT Licensed.

This module was designed to address specific cognitive disabilities which impact correct interpretation of the time-of-day.  
Specifically, this module displays the current date, time, and a customizable descriptor for the 'phase' of the day; i.e. "morning", "afternoon", etc.  It does not offer an analog clock representation.

   ![image](https://user-images.githubusercontent.com/30437725/38146320-7ce83fea-341b-11e8-80aa-9e1ff51157e9.png)


## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: "MMM-ClockDayPhase",
		position: "top_left",	// This can be any of the regions.
		config: {
			// The config property is optional.
			// See 'Configuration options' for more information.
		}
	}
]
````

## Configuration options

The following properties can be configured:

| Option            | Description
| ----------------- | -----------
| `timeFormat`      | Use 12 or 24 hour format. <br><br> **Possible values:** `12` or `24` <br> **Default value:** uses value of _config.timeFormat_
| `displaySeconds`  | Display seconds. <br><br> **Possible values:** `true` or `false` <br> **Default value:** `true`
| `showPeriod`      | Show the period (am/pm) with 12 hour format. <br><br> **Possible values:** `true` or `false` <br> **Default value:** `true`
| `showPeriodUpper` | Show the period (AM/PM) with 12 hour format as uppercase. <br><br> **Possible values:** `true` or `false` <br> **Default value:** `false`
| `clockBold`       | Remove the colon and bold the minutes to make a more modern look. <br><br> **Possible values:** `true` or `false` <br> **Default value:** `false`
| `showDate`        | Turn off or on the Date section. <br><br> **Possible values:** `true` or `false` <br> **Default value:** `true`
| `showWeek`        | Turn off or on the Week section. <br><br> **Possible values:** `true` or `false` <br> **Default value:** `false`
| `dateFormat`      | Configure the date format as you like. <br><br> **Possible values:** [Docs](http://momentjs.com/docs/#/displaying/format/) <br> **Default value:** `"dddd, LL"`
| `timezone`        | Specific timezone for the time on the clock. <br><br> **Possible examples values:** `America/New_York`, `America/Santiago`, `Etc/GMT+10` <br> **Default value:** `none`. See more information about configuration values [here](https://momentjs.com/timezone/docs/#/data-formats/packed-format/)
| `hoursPhase`      | A list of 24 elements which associates each of the hours in a day, 0-23, with a 'phase-id'
| `phaseText`       | A set of phase-ids and display text for each of the phase-id defined by the hoursPhase property
