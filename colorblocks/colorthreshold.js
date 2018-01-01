(function()
{
    freeboard.addStyle('div.colorthreshold', "width:280px;margin:0 auto;padding:40px 0;background:#DC5945;font-size:3em;color:#fff;text-align:center;font-family:");

    var colorthresholdWidget = function (settings) {
        var self = this;
        var currentSettings = settings;

        var htmlElement = $('<div class="colorthreshold"></div>');

        function updateThreshColor(currentValue) {
            //todo add low is bad boolean check and setting
            //
            if (currentSettings.thresh_invert == false) {
                if (currentValue <= currentSettings.thresh_goodvalue) {
                    $(htmlElement).css('background', currentSettings.thresh_goodcolor)
                } else if (currentValue > currentSettings.thresh_goodvalue && currentValue < currentSettings.thresh_badvalue) {
                    $(htmlElement).css('background', currentSettings.thresh_warncolor)
                } else {
                    $(htmlElement).css('background', currentSettings.thresh_badcolor)
                }
            } else if (currentSettings.thresh_invert == true){
                if (currentValue >= currentSettings.thresh_goodvalue) {
                    $(htmlElement).css('background', currentSettings.thresh_goodcolor)
                } else if (currentValue < currentSettings.thresh_goodvalue && currentValue > currentSettings.thresh_badvalue) {
                    $(htmlElement).css('background', currentSettings.thresh_warncolor)
                } else {
                    $(htmlElement).css('background', currentSettings.thresh_badcolor)
                }
            
            }
        }

        this.render = function (element) {
            $(element).append(htmlElement);
        }

        this.onSettingsChanged = function (newSettings) {
            currentSettings = newSettings;
        }

        this.getHeight = function () {
            return Number(2);
        }

        this.onCalculatedValueChanged = function (settingName, newValue) {
            if (settingName === 'thresh_value') {
                $(htmlElement).html(currentSettings.thresh_prefix + newValue + currentSettings.thresh_suffix);
                updateThreshColor(newValue);
            }

        }
    
    };

    freeboard.loadWidgetPlugin({
        "type_name": "colorthreshold_plugin",
        "display_name": "Color Threshold Plugin",
        "description": "Presents a value with a colored background",
        "settings": [
            {
            "name": "thresh_value",
            "display_name": "Value",
            "type": "calculated",
            "default_value": ""
            },
            {
            "name": "thresh_suffix",
            "display_name": "Display Suffix",
            "type": "text",
            "default_value": ""
            },
            {
            "name": "thresh_prefix",
            "display_name": "Display Prefix",
            "type": "text",
            "default_value": ""
            },
            {
            "name": "thresh_goodcolor",
            "type": "text",
            "display_name": "Good Color",
            "default_value": "#94c140"
            },
            {
            "name": "thresh_warncolor",
            "type": "text",
            "display_name": "Warning Color",
            "default_value": "#FF9618"
            },
            {
            "name": "thresh_badcolor",
            "type": "text",
            "display_name": "Critical Color",
            "default_value": "#dc5945"
            },
            {
            "name": "thresh_goodvalue",
            "type": "number",
            "display_name": "Good Value",
            "default_value": 10
            },
            {
            "name": "thresh_badvalue",
            "type": "number",
            "display_name": "Bad Value",
            "default_value": 100
            },
            {
            "name": "thresh_invert",
            "type": "boolean",
            "display_name": "Invert Grading Scale",
            "default_value": false
            }
        ],
    
        newInstance:function(settings, newInstanceCallback)
        {
            newInstanceCallback(new colorthresholdWidget(settings));
        }
    });

}());
