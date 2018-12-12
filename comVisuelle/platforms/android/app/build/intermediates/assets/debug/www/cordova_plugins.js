cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-sqlite-plugin.SQLite",
    "file": "plugins/cordova-sqlite-plugin/www/sqlite.js",
    "pluginId": "cordova-sqlite-plugin"
<<<<<<< HEAD
  },
  {
    "id": "cordova-plugin-camera.Camera",
    "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "Camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverOptions",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverOptions"
    ]
  },
  {
    "id": "cordova-plugin-camera.camera",
    "file": "plugins/cordova-plugin-camera/www/Camera.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "navigator.camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverHandle",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverHandle"
    ]
=======
>>>>>>> cbab1f9d33ae62f9849d02ca6963a1e647b05c34
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
<<<<<<< HEAD
  "cordova-sqlite-plugin": "3.1.1",
  "cordova-plugin-camera": "4.0.3"
=======
  "cordova-sqlite-plugin": "3.1.1"
>>>>>>> cbab1f9d33ae62f9849d02ca6963a1e647b05c34
};
// BOTTOM OF METADATA
});