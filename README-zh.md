## social-media-follower-widget

<img align="right" width="200" src="https://github.com/efficlab/social-media-follower-widget/blob/main/imgs/example.jpeg?raw=true">

一个 Scriptable 脚本，用于添加可以实时显示 **Bilibili** 和 **YouTube** 上关注者数量的 IOS 小部件。

此脚本需要 Google API 密钥来获取 YouTube 频道数据，需要先按照以下步骤操作：https://developers.google.com/youtube/v3/getting-started，如果不需要现实 YouTube 数据，可以忽略此步骤。

将脚本中的以下字段修改为您自己的字段：

- **NAME**：频道名称。
- **CHANNEL_AVATAR_URL**：频道图标的 URL，您需要使用浏览器检查器获取此 URL。如注释掉该选项，将使用默认图标。

如果您有 Bilibili 频道，则以下字段是必填项，否则，请将其注释掉：

- **BILI_UID**：您的 Bilibili 频道 UID。

如果您有 YouTube 频道，则以下字段是必填项，否则，请将他们注释掉：

- **YT_API_KEY**：您的 YouTube Google API 密钥。
- **YT_CHANNEL_ID**：您的 YouTube 频道 ID。

接下来，按照以下步骤在 Scriptable 中进行设置：

1. 在手机的应用商店中下载 Scriptable；
2. 在 Scriptable 中创建新脚本；
3. 将包含有上述修改后字段的代码粘贴到脚本中，然后保存；
4. 返回主屏幕，长按并添加 Scriptable 小部件，选择您刚刚创建的脚本。

***\*请注意，您需要拥有能够正常访问 YouTube 的网络，然后才能查看 YouTube 频道的数据。***
