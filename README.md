## social-media-follower-widget

<img align="right" width="200" src="https://github.com/efficlab/social-media-follower-widget/blob/main/imgs/example.jpeg?raw=true">

English | <a href="https://github.com/efficlab/social-media-follower-widget/blob/main/README-zh.md">中文</a>

A Scriptable script for adding IOS widget that displays count of followers on **Bilibili** and **YouTube**.

This script requires a Google API Key to fetch the YouTube channel data which needs to be done first by following: https://developers.google.com/youtube/v3/getting-started, otherwise, ignore this step.

Then modify below fields in the scripts to your owns:

- **NAME**: your channel name.
- **CHANNEL_AVATAR_URL**: the URL of your channel logo, you need to get this with the Browser inspector.

Below field is required if you have a Bilibili channel, otherwise, comment them out:

- **BILI_UID**: your Bilibili channel UID.

Below fields are required if you have a YouTube channel, otherwise, comment them out:
  
- **YT_API_KEY**: your Google API Key for YouTube.
- **YT_CHANNEL_ID**: your YouTube channel ID.

Next, follow the below steps to set up in Scriptable:

1. Download Scriptable in the app store on your phone.
2. Create a new script in Scriptable.
3. Paste the modified code in the script, and save it.
4. Back to the home screen, long hold and add the Scriptable widget, choose the script you just created.

***\*Please note you need to have network access to YouTube before you can see the data of your YouTube channel.***


