var DismissProcessPostRequest = PostRequest.extend({
	
		addRequestTypeToSettings : function() {
		// set new requestType parameter to a fixed value from Constants.js
		this.settings.requestType = DISMISS_PROCESS_TYPE;
    },
    
    createPostPayload : function(){

        var DISMISS_PROCESS_POST = "";
				var jobId = this.settings.jobId;
        var serviceVersion = this.settings.version;
        

			DESCRIBE_PROCESS_POST = '<Dismiss \
				service="WPS" \	version="' + serviceVersion +'" \
				xmlns:wps="http://www.opengis.net/wps/2.0" \
				xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \
				xsi:schemaLocation="http://www.opengis.net/wps/2.0 ../wps.xsd">\
				<wps:JobID>' + jobId + '</wps:JobID>\
			</Dismiss>';
		
		return DISMISS_PROCESS_POST;
    }
})