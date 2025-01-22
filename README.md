## social-media-follower-widget

<img align="right" width="200" src="https://github.com/efficlab/social-media-follower-widget/blob/main/imgs/example.jpeg?raw=true">

A Scriptable script for adding IOS widget that displays count of followers on **Bilibili** and **YouTube**.

This script requires a Google API Key to fetch the YouTube channel data which needs to be done first by following: https://developers.google.com/youtube/v3/getting-started 

Then modify below fields in the scripts to your own:

### Config Fields

- **NAME**: your channel name.
- **CHANNEL_AVATAR_URL**: the URL of your channel logo, you need to get this with the Browser inspector.

Below field is required if you have a Bilibili channel (optional):

- **BILI_UID**: your Bilibili channel UID.

Below fields are required if you have a YouTube channel (optional):
  
- **YT_API_KEY**: your Google API Key for YouTube.
- **YT_CHANNEL_ID**: your YouTube channel ID.

Next, load the modified script into **Scriptable** app which is installed on your cell phone.

Finally, you can put the script widget on the home screen and see the result just like above.

***\*Please note you need to have the network access to YouTube before you can see the data of your YouTube channel.***
