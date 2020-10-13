module.exports = {
  "dataElements": {
    "test": {
      "modulePath": "sandbox/javascriptVariable.js",
      "settings": {
        "path": "document.title"
      }
    },
    "clsc": {
      "modulePath": "webvitals/src/lib/dataElements/cls.js",
      "settings": {
        "preserve": false
      }
    },
    "clsp": {
      "modulePath": "webvitals/src/lib/dataElements/cls.js",
      "settings": {
        "preserve": true
      }
    }
  },
  "rules": [{
    "id": "RL1601582214237",
    "name": "CLS",
    "events": [{
      "modulePath": "webvitals/src/lib/events/getcls.js",
      "settings": {
        "reportAllChanges": true
      }
    }],
    "actions": [{
      "modulePath": "sandbox/logEventInfo.js",
      "settings": {}
    }]
  }],
  "extensions": {
    "webvitals": {
      "displayName": "WebVitals",
      "settings": {
        "preserve": true,
        "metricsKey": "tebist"
      }
    }
  },
  "property": {
    "settings": {
      "domains": ["example.com"]
    }
  },
  "company": {
    "orgId": "ABCDEFGHIJKLMNOPQRSTUVWX@AdobeOrg"
  },
  "buildInfo": {
    "turbineVersion": "26.0.2",
    "turbineBuildDate": "2020-10-01T20:08:54.848Z",
    "buildDate": "2020-10-01T20:08:54.848Z",
    "environment": "development"
  }
}