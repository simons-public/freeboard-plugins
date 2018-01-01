(function()
{
        freeboard.addStyle('div.colorvalue', "width:280px;margin:0 auto;padding:40px 0;background:#DC5945;font-size:3em;color:#fff;text-align:center;font-family:");

    var colorvalueWidget = function (settings) {
        var self = this;
        var currentSettings = settings;

        var htmlElement = $('<div class="colorvalue"></div>');

        function updateColor(currentValue) {
            if (currentSettings.goodvalue == currentValue) {
                $(htmlElement).css('background', currentSettings.goodcolor)
            } else {
                $(htmlElement).css('background', currentSettings.badcolor)
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
            if (settingName === 'value') {
                $(htmlElement).html(currentSettings.prefix + newValue + currentSettings.suffix);
                updateColor(newValue);
            }

        }
    
    };

    freeboard.loadWidgetPlugin({
        "type_name": "colorvalue_plugin",
        "display_name": "Color Value Plugin",
        "description": "Presents a value with a colored background",
        "settings": [
            {
            "name": "value",
            "display_name": "Value",
            "type": "calculated",
            "default_value": ""
            },
            {
            "name": "suffix",
            "display_name": "Display Suffix",
            "type": "text",
            "default_value": ""
            },
            {
            "name": "prefix",
            "display_name": "Display Prefix",
            "type": "text",
            "default_value": ""
            },
            {
            "name": "goodcolor",
            "type": "text",
            "display_name": "Good Color",
            "default_value": "#94c140"
            },
            {
            "name": "badcolor",
            "type": "text",
            "display_name": "Bad Color",
            "default_value": "#dc5945"
            },
            {
            "name": "goodvalue",
            "type": "text",
            "display_name": "Good Value",
            "default_value": "Success"
            }
        ],
    
        newInstance:function(settings, newInstanceCallback)
        {
            newInstanceCallback(new colorvalueWidget(settings));
        }
    });

}());
