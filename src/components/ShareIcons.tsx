import React from 'react'

// import {
//   META_TEXTS,
//   PANIC_ROOM_HASHTAG,
//   PANIC_ROOM_HASHTAGS,
// } from 'constants/texts'
// import { SHARE_ICON_SIZE } from 'constants/theme'

// import {
//   EmailShareButton,
//   FacebookShareButton,
//   LivejournalShareButton,
//   TelegramShareButton,
//   TwitterShareButton,
//   ViberShareButton,
//   VKShareButton,
//   WhatsappShareButton,
//   EmailIcon,
//   FacebookIcon,
//   LivejournalIcon,
//   TelegramIcon,
//   TwitterIcon,
//   ViberIcon,
//   VKIcon,
//   WhatsappIcon,
//   FacebookMessengerIcon,
//   FacebookMessengerShareButton,
// } from 'react-share'

// import { GOLDEN_SHADOW } from 'utils/theme'
// import { appearSlow } from 'utils/animations'

type ShareRowProps = {
  shareUrl: string
  truncatedText?: string
}

// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// export const ShareIcons: React.FC<ShareRowProps> = styled('div').attrs(
//   (props: ShareRowProps) => ({
//     children: (
//       <>
//         <div>
//           <FacebookShareButton
//             url={props.shareUrl}
//             quote={`${META_TEXTS.fortune_told_me}: ${props.truncatedText}`}
//             hashtag={PANIC_ROOM_HASHTAG}
//           >
//             <FacebookIcon size={SHARE_ICON_SIZE} round />
//           </FacebookShareButton>
//           <TwitterShareButton
//             url={props.shareUrl}
//             hashtags={PANIC_ROOM_HASHTAGS}
//             title={META_TEXTS.fortune_title}
//           >
//             <TwitterIcon size={SHARE_ICON_SIZE} round />
//           </TwitterShareButton>
//           <VKShareButton
//             url={props.shareUrl}
//             title={META_TEXTS.fortune_title}
//             image={props.metaImagePath}
//           >
//             <VKIcon size={SHARE_ICON_SIZE} round />
//           </VKShareButton>
//           <LivejournalShareButton
//             url={props.shareUrl}
//             title={META_TEXTS.fortune_title}
//             description={`${META_TEXTS.fortune_told_me}: ${props.truncatedText}`}
//           >
//             <LivejournalIcon size={SHARE_ICON_SIZE} round />
//           </LivejournalShareButton>
//         </div>
//         <div>
//           <TelegramShareButton
//             url={props.shareUrl}
//             title={META_TEXTS.fortune_title}
//           >
//             <TelegramIcon size={SHARE_ICON_SIZE} round />
//           </TelegramShareButton>
//           <FacebookMessengerShareButton
//             url={props.shareUrl}
//             appId="2001449690035746"
//             redirectUri={props.roomUrl}
//           >
//             <FacebookMessengerIcon size={SHARE_ICON_SIZE} round />
//           </FacebookMessengerShareButton>
//           <ViberShareButton
//             url={props.shareUrl}
//             separator={`\n`}
//             title={META_TEXTS.fortune_title}
//           >
//             <ViberIcon size={SHARE_ICON_SIZE} round />
//           </ViberShareButton>
//           <WhatsappShareButton
//             url={props.shareUrl}
//             title={META_TEXTS.fortune_title}
//             separator={`\n`}
//           >
//             <WhatsappIcon size={SHARE_ICON_SIZE} round />
//           </WhatsappShareButton>
//           <EmailShareButton
//             url={props.roomUrl}
//             subject={META_TEXTS.fortune_title}
//             body={`See mine here ${props.shareUrl}\n\nOR\n\n${META_TEXTS.fortune_description}`}
//             separator={`\n 🥠 💙 💙 💙 🥠 \n`}
//           >
//             <EmailIcon size={SHARE_ICON_SIZE} round />
//           </EmailShareButton>
//         </div>
//       </>
//     ),
//   }),
// )`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 2rem 0;
//   animation: ${appearSlow} 2s 1;
//   > div {
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     > button {
//       margin: 13px 7px;
//       :hover {
//         filter: drop-shadow(0.5px 1px 4px ${GOLDEN_SHADOW});
//         transition: 0.2s filter;
//       }
//     }
//   }
// `

export const ShareIcons: React.FC<ShareRowProps> = ({
  shareUrl,
  truncatedText,
}) => {
  return (
    <div>
      hello world {shareUrl} {truncatedText}{' '}
    </div>
  )
}
