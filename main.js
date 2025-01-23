// You need to replace below config with yours.
const CHANNEL_CONFIGS = {
  NAME: 'EfficLab实验室',
  // Your channel logo (optional).
  AVATAR_URL: 'https://i1.hdslb.com/bfs/face/11d27a1f87f6407970d4dfc20cffe50b6093cabe.jpg@128w_128h_1c_1s.webp',
  // For Bilibili (optional).
  BILI_UID: 5953240,
  // For YouTube (optional).
  YT_API_KEY: '[Googla API Key]',
  YT_CHANNEL_ID: 'UCpN3prDRM6G-3MWMZvo_jXQ'
}

// Other internal configs.
const BILI_REQ_URL = `https://api.bilibili.com/x/relation/stat?vmid=${CHANNEL_CONFIGS.BILI_UID}`
const YT_REQ_URL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_CONFIGS.YT_CHANNEL_ID}&fields=items/statistics/subscriberCount&key=${CHANNEL_CONFIGS.YT_API_KEY}`
const BILI_STORE_KEY = 'LAST_BILI_FOLLOWER'
const YT_STORE_KEY = 'LAST_YT_FOLLOWER'

// SVG Base64 is not supported.
const BILI_ICON_BASE64 = 'AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAABMLAAATCwAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A1qEAANahAADWoQAG1qEAb9ahAMvWoQD01qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD01qEAy9ahAG/WoQAG1qEAANahAADWoQAA1qEAG9ahAM/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahANDWoQAb1qEAANahAAfWoQDQ1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahANHWoQAH1qEAbtahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAG7WoQDH1qEA/9ahAP/WoQD/1qEAtdahABjWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahABvWoQC11qEA/9ahAP/WoQD/1qEAx9ahAPnWoQD/1qEA/9ahAP/WoQAZ1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahABjWoQD/1qEA/9ahAP/WoQDz1qEA/9ahAP/WoQD/1qEA/9ahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAErWoQDn1qEA5NahAErWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAErWoQDn1qEA5NahAErWoQAA1qEAANahAADWoQAA1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEA5tahAP/WoQD/1qEA59ahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEA5tahAP/WoQD/1qEA59ahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEA5tahAP/WoQD/1qEA5tahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEA5tahAP/WoQD/1qEA5tahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAADWoQAA1qEAANahAADWoQBJ1qEA5tahAObWoQBJ1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQBJ1qEA5tahAObWoQBJ1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEA+dahAP/WoQD/1qEA/9ahABnWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAGdahAP/WoQD/1qEA/9ahAPjWoQDH1qEA/9ahAP/WoQD/1qEAttahABnWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahABnWoQC21qEA/9ahAP/WoQD/1qEAx9ahAG3WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQBt1qEABtahAM/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA0NahAAfWoQAA1qEAG9ahAM/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAM/WoQAb1qEAANahAADWoQAA1qEABtahAG7WoQDH1qEA89ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA89ahAMfWoQBu1qEABtahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQD/1qEAxdahAA/WoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQD/1qEAxdahAA/WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAAbWoQDF1qEA/9ahAP/WoQD/1qEA/9ahAMXWoQAP1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQD/1qEAxdahAAbWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAYtahAP/WoQD/1qEA/9ahAP/WoQDF1qEADtahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQD/1qEAY9ahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQBf1qEA/9ahAP/WoQD/1qEAxdahAA7WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQBf1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAATWoQCg1qEA6tahAKjWoQAO1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAKjWoQDr1qEAoNahAATWoQAA1qEAANahAADWoQAA1qEAAP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A///////////AAAADgAAAAQAAAAAAAAAAA///wAf//+AP///wD///8A////AP///wDw/w8A8P8PAPD/DwDw/w8A8P8PAPD/DwD///8A////AH///gA///wAAAAAAAAAAAgAAAAcAAAAP8A8A/+AfgH/gP8B/4H/gf+D/8H/////8='
const YT_ICON_BASE64 = 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABJklEQVR4Ae2WpVaFQRSFcaeS4QVwIjTiLbgk7D1w9xeg4FQcOu6acHeXtNnDmsFd7in/WetLI+f7dbYDAFEsAUvgoeAQ5k5iSQFpIH1kkMyQFXJMTsgpwTuc6jlHes2M3qNP71mge7g76DLNg8gygZ1QckGmuSdZJ7Azq8RDCSQTCJGgBCoFBWqVQLegQJcSmPnWIr9oICMXcIr4C4FJJbD9rUX+NtzX+CIQlfVbgS0lcP4jAVNt/UCA7acCZ0oAPxfQdXMLFNUBvpHflvgbAVM7h0B6zrfeD3kB+Ucg/xLKf4biPyLJX3GH9GFUogRSBQUSTSBZEwskQpFs1USyl6E0gRSRJtJPhsnci1B69oVQeqzXzOo9+kmj3juBeDw2BkSxBCyBO+9s03HRLVCoAAAAAElFTkSuQmCC'
const DEFAULT_AVATAR_BASE64 = 'iVBORw0KGgoAAAANSUhEUgAAAYAAAAIACAMAAAC8QUvIAAAC/VBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+G1NxwAAAA/nRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BR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'

const globalStats = {
  youTubeEnabled: CHANNEL_CONFIGS.YT_API_KEY && CHANNEL_CONFIGS.YT_CHANNEL_ID,
  biliEnabled: CHANNEL_CONFIGS.BILI_UID,
}

const widget = createWidget(await getData())

if (!config.runsInWidget) {
  await widget.presentSmall()
}

Script.setWidget(widget)
Script.complete()

async function getData() {
  const result = {
    avatar: null,
    biliFollower: null,
    youtubeFollower: null,
    nickname: 'Unknown'
  }
  
  if (globalStats.biliEnabled) {
    const biliReq = new Request(BILI_REQ_URL)
    const biliRes = await biliReq.loadJSON()
    const biliFollower = biliRes?.data?.follower
    if (biliFollower) {
      result.biliFollower = +biliFollower
      Keychain.set(BILI_STORE_KEY, String(biliFollower))
    } else {
      result.biliFollower = Keychain.contains(BILI_STORE_KEY) ? +Keychain.get(BILI_STORE_KEY) : 0
    }
  }

  if (globalStats.youTubeEnabled) {
    const youtubeReq = new Request(YT_REQ_URL)
    youtubeReq.timeoutInterval = 3
  
    let youtubeRes = null
    try {
      youtubeRes = JSON.parse(await youtubeReq.loadString())
    } catch(e) {
      console.log(e)
    }
    const youtubeFollower = youtubeRes?.items?.[0]?.statistics?.subscriberCount
    if (youtubeFollower) {
      result.youtubeFollower = +youtubeFollower
      Keychain.set(YT_STORE_KEY, String(youtubeFollower))
    } else {
      result.youtubeFollower = Keychain.contains(YT_STORE_KEY) ? +Keychain.get(YT_STORE_KEY) : 0
    }
  }
  result.nickname = CHANNEL_CONFIGS.NAME || 'Unknow'
  result.avatar = CHANNEL_CONFIGS.AVATAR_URL
    ? await (new Request(CHANNEL_CONFIGS.AVATAR_URL)).loadImage()
    : Image.fromData(Data.fromBase64String(DEFAULT_AVATAR_BASE64))

  return result
}

function formatFollower(num) {
  if (typeof num !== 'number') return 'N/A'
  if (num >= 10000) return (num / 10000).toFixed(2) + 'w'
  if (num >= 1000) return (num / 1000).toFixed(2) + 'k'
  return num.toString()
}

function wrapChannelStack(widget, iconBase64, text) {
  widget.addSpacer(5)

  const st = widget.addStack()
  const icon = st.addImage(Image.fromData(Data.fromBase64String(iconBase64)))
  icon.imageSize = new Size(16, 16)
  
  st.addSpacer(5)

  const cap = st.addText(
    Number.isInteger(text) 
      ? new Intl.NumberFormat('en-IN').format(+text)
      : text
  )
  cap.font = Font.italicSystemFont(14)
  cap.textColor = new Color('#FFF')
  cap.lineLimit = 1
  cap.minimumScaleFactor = 0.8
}

function createWidget(options) {
  const w = new ListWidget()
  const { avatar, nickname, biliFollower, youtubeFollower, } = options

  const gr = new LinearGradient()
  gr.locations = [0, 1]
  gr.colors = [
    new Color('#3b3b3b'),
    new Color('#1c1c1c'),
  ]
  
  w.backgroundGradient = gr
  
  const st = w.addStack()
  const ava = st.addImage(avatar)
  ava.imageSize = new Size(20, 20)
  if (CHANNEL_CONFIGS.AVATAR_URL) {
    ava.cornerRadius = 10
    ava.borderWidth = 2
    ava.borderColor = new Color('#FFF')
  }

  st.addSpacer(5)
  
  const cap = st.addText(nickname)
  cap.font = Font.heavySystemFont(16)
  cap.textColor = new Color('#FFF')
  cap.lineLimit = 1
  cap.minimumScaleFactor = 0.8
  
  w.addSpacer(2)
  
  const allFollowers = (biliFollower || 0) + (youtubeFollower || 0)
  const fo = w.addText(formatFollower(allFollowers))
  fo.font = Font.heavySystemFont(45)
  fo.textColor = new Color('#FFF')
  fo.lineLimit = 1
  fo.minimumScaleFactor = 0.5

  if (globalStats.biliEnabled) {
    wrapChannelStack(w, BILI_ICON_BASE64, biliFollower)
  }
  
  if (globalStats.youTubeEnabled) {
    wrapChannelStack(w, YT_ICON_BASE64, youtubeFollower)
  }
  return w
}
